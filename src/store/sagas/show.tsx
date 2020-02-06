import { put } from 'redux-saga/effects';
import { ILoadShowAction, loadShowError, loadShowSuccess } from '../actions/show';
import { loadEpisodes } from '../actions/episodes';
import axios from '../../axios';

export function* loadShowSaga(action: ILoadShowAction) {
    try {
        const response = yield axios.get(`shows/${action.showId}`);
        yield put(loadShowSuccess({
            title: response.data.name,
            description: response.data.summary,
            imagePath: response.data.image.medium
        }));
        yield put(loadEpisodes(action.showId));

    } catch (error) {
        yield put(loadShowError(error.message));
    }
}
