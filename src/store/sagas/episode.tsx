import { put } from 'redux-saga/effects';
import axios from '../../axios';
import { ILoadEpisodeAction, loadEpisodeError, loadEpisodeSuccess } from '../actions/episode';

export function* loadEpisodeSaga(action: ILoadEpisodeAction) {
    try {
        const response = yield axios.get(`shows/${action.showId}/episodebynumber?season=${action.season}&number=${action.number}`);
        yield put(loadEpisodeSuccess(response.data));
    } catch (error) {
        yield put(loadEpisodeError(error.message));
    }
}
