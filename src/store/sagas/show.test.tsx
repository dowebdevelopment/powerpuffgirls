import React from 'react';
import { loadShowSaga } from './show';
import sinon from 'sinon';
import axios from '../../axios';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { loadShow, loadShowError, loadShowSuccess } from '../actions/show';
import { put } from 'redux-saga/effects';

const getSpy = sinon.stub(axios, 'get');

const MAZE_EPISODE = {
    id: '1',
    name: 'name',
    summary: 'sum',
    image: {
        medium: 'url'
    },
    season: '1',
    number: '2',
};

const MAZE_SHOW = {
    name: 'foo',
    summary: 'bar',
    image: {
        medium: 'url'
    },
    _embedded: {
        episodes: [MAZE_EPISODE],
    }
};

describe('loadShowSaga', () => {
    it('should load a show', () => {
        getSpy.callsFake(() => (Promise.resolve({data: mockResponse})));

        const mockResponse = MAZE_SHOW;
        const gen = cloneableGenerator(loadShowSaga)(loadShow(1));

        gen.next();

        expect(gen.next({data: mockResponse}).value)
            .toEqual(
                put(loadShowSuccess({
                    title: MAZE_SHOW.name,
                    description: MAZE_SHOW.summary,
                    imagePath: MAZE_SHOW.image.medium,
                    episodes: [
                        {
                            id: +MAZE_EPISODE.id,
                            title: MAZE_EPISODE.name,
                            description: MAZE_EPISODE.summary,
                            imagePath: MAZE_EPISODE.image.medium,
                            season: +MAZE_EPISODE.season,
                            number: +MAZE_EPISODE.number,
                        }
                    ]})
                )
            );

        expect(gen.next().done).toEqual(true);
    });

    it('should dispatch error when endpoint errors out', () => {
        getSpy.throws({
            message: 'fail'
        });

        const gen = cloneableGenerator(loadShowSaga)(loadShow(1));
        expect(gen.next().value).toEqual(put(loadShowError('fail')));
        expect(gen.next().done).toEqual(true);
    });
});
