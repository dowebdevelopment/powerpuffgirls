import React from 'react';
import sinon from 'sinon';
import axios from '../../axios';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { put } from 'redux-saga/effects';
import { loadEpisode, loadEpisodeError, loadEpisodeSuccess } from '../actions/episode';
import { loadEpisodeSaga } from './episode';

const getSpy = sinon.stub(axios, 'get');

const MAZE_EPISODE_RESPONSE = {
    name: 'name',
    summary: 'sum',
    image: {
        medium: 'url'
    },
};

describe('loadEpisodeSaga', () => {
    it('should load a episode', () => {
        getSpy.callsFake(() => (Promise.resolve({data: MAZE_EPISODE_RESPONSE})));

        const gen = cloneableGenerator(loadEpisodeSaga)(loadEpisode(1, 2, 3));
        gen.next();

        expect(gen.next({data: MAZE_EPISODE_RESPONSE}).value)
            .toEqual(
                put(loadEpisodeSuccess(MAZE_EPISODE_RESPONSE))
            );

        expect(gen.next().done).toEqual(true);
    });

    it('should dispatch error when endpoint errors out', () => {
        getSpy.throws({
            message: 'fail'
        });

        const gen = cloneableGenerator(loadEpisodeSaga)(loadEpisode(1, 2, 3));

        expect(gen.next().value).toEqual(put(loadEpisodeError('fail')));
        expect(gen.next().done).toEqual(true);
    });
});
