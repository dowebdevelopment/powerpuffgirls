import { ILoadEpisodeSuccessAction, LOAD_EPISODE, LOAD_EPISODE_ERROR, LOAD_EPISODE_SUCCESS } from '../actions/episode';
import { Action } from 'redux';

export interface IEpisodeState {
    isLoading: boolean;
    title: string;
    description: string;
    imagePath: string;
}

const initialState = {
    isLoading: false,
    title: '',
    description: '',
    imagePath: '',
};

const loadEpisode = (state: IEpisodeState): IEpisodeState => {
    return {
        ...state,
        isLoading: true,
    };
};

const loadEpisodeSuccess = (state: IEpisodeState, action: ILoadEpisodeSuccessAction): IEpisodeState => {
    return {
        ...state,
        isLoading: false,
        ...action.payload,
    };
};

const loadEpisodeError = (state: IEpisodeState): IEpisodeState => {
    return {
        ...state,
        isLoading: false,
    };
};

const reducer = (state: IEpisodeState = initialState, action: Action) => {
    switch (action.type) {
        case LOAD_EPISODE:
            return loadEpisode(state);
        case LOAD_EPISODE_SUCCESS:
            return loadEpisodeSuccess(state, action as ILoadEpisodeSuccessAction);
        case LOAD_EPISODE_ERROR:
            return loadEpisodeError(state);
        default:
            return state;
    }
};

export default reducer;
