import { LOAD_SHOW_ERROR } from '../actions/show';
import { IErrorAction } from '../actions/errors';
import { LOAD_EPISODE_ERROR } from '../actions/episode';
import { Action } from 'redux';

export interface IErrorState {
    message: string;
}

const initialState = {
    message: '',
};

const setError = (state: IErrorState, action: IErrorAction) => {
    return {
        ...state,
        message: action.payload,
    };
};

const reducer = (state: IErrorState = initialState, action: Action) => {
    switch (action.type) {
        case LOAD_EPISODE_ERROR:
        case LOAD_SHOW_ERROR:
            return setError(state, action as IErrorAction);
        default:
            return state;
    }
};

export default reducer;
