import {
    ILoadEpisodesSuccessAction,
    LOAD_EPISODES,
    LOAD_EPISODES_ERROR,
    LOAD_EPISODES_SUCCESS
} from '../actions/episodes';
import { Action } from 'redux';

export interface IEpisodeState {
    id: number,
    title: string,
    description: string,
    imagePath: string,
    season: number,
    number: number,
}

export interface IEpisodesState {
    isLoading: boolean;
    list: IEpisodeState[];
}

const initialState: IEpisodesState = {
    isLoading: false,
    list: [],
};

const loadEpisodes = (state: IEpisodesState): IEpisodesState => {
    return {
        ...state,
        isLoading: true,
    };
};

const loadEpisodesSuccess = (state: IEpisodesState, action: ILoadEpisodesSuccessAction): IEpisodesState => {
    return {
        ...state,
        isLoading: false,
        list: action.payload,
    };
};

const loadEpisodesError = (state: IEpisodesState): IEpisodesState => {
    return {
        ...state,
        isLoading: false,
    };
};

const reducer = (state: IEpisodesState = initialState, action: Action): IEpisodesState => {
    switch (action.type) {
        case LOAD_EPISODES:
            return loadEpisodes(state);
        case LOAD_EPISODES_SUCCESS:
            return loadEpisodesSuccess(state, action as ILoadEpisodesSuccessAction);
        case LOAD_EPISODES_ERROR:
            return loadEpisodesError(state);
        default:
            return state;
    }
};

export default reducer;
