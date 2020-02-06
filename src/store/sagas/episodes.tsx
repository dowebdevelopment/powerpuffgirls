import { put } from 'redux-saga/effects';
import axios from '../../axios';
import { ILoadEpisodesAction, loadEpisodesError, loadEpisodesSuccess } from '../actions/episodes';

export function* loadEpisodesSaga(action: ILoadEpisodesAction) {
    try {
        const response = yield axios.get(`shows/${action.showId}/episodes`);
        yield put(loadEpisodesSuccess(response.data.slice(0, 10)));
    } catch (error) {
        yield put(loadEpisodesError(error.message));
    }
}
