import { put } from 'redux-saga/effects';
import { ILoadShowAction, loadShowError, loadShowSuccess } from '../actions/show';
import axios from '../../axios';

const EPISODE_LIST_LIMIT = 10;

interface IMazeEpisode {
    id: string;
    name: string;
    summary: string;
    image: {
        medium: string;
    }
    season: string;
    number: string;
}

export function* loadShowSaga(action: ILoadShowAction) {
    try {
        const response = yield axios.get(`shows/${action.showId}?embed=episodes`);
        yield put(loadShowSuccess({
            title: response.data.name,
            description: response.data.summary,
            imagePath: response.data.image.medium,
            episodes: response.data._embedded.episodes.slice(0, EPISODE_LIST_LIMIT).map((episode: IMazeEpisode) => {
                return {
                    id: +episode.id,
                    title: episode.name,
                    description: episode.summary,
                    imagePath: episode.image.medium,
                    season: +episode.season,
                    number: +episode.number,
                }
            })
        }));
    } catch (error) {
        yield put(loadShowError(error.message));
    }
}
