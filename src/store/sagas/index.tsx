import { takeLatest } from 'redux-saga/effects';
import { LOAD_EPISODES } from '../actions/episodes';
import { LOAD_SHOW } from '../actions/show';
import { loadShowSaga } from './show';
import { loadEpisodesSaga } from './episodes';
import { loadEpisodeSaga } from './episode';
import { LOAD_EPISODE } from '../actions/episode';

export function* watchEpisodes() {
    yield takeLatest(LOAD_EPISODES, loadEpisodesSaga);
}

export function* watchEpisode() {
    yield takeLatest(LOAD_EPISODE, loadEpisodeSaga);
}

export function* watchShow() {
    yield takeLatest(LOAD_SHOW, loadShowSaga);
}
