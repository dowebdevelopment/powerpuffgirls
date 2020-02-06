import { takeLatest } from 'redux-saga/effects';
import { LOAD_SHOW } from '../actions/show';
import { loadShowSaga } from './show';
import { loadEpisodeSaga } from './episode';
import { LOAD_EPISODE } from '../actions/episode';

export function* watchEpisode() {
    yield takeLatest(LOAD_EPISODE, loadEpisodeSaga);
}

export function* watchShow() {
    yield takeLatest(LOAD_SHOW, loadShowSaga);
}
