import { Action } from 'redux';
import { ILoadShowSuccessAction, LOAD_SHOW, LOAD_SHOW_ERROR, LOAD_SHOW_SUCCESS } from '../actions/show';

export interface IShowState {
    isLoading: boolean;
    title: string;
    description: string;
    imagePath: string ;
}

const initialState: IShowState = {
    isLoading: false,
    imagePath: '',
    description: '',
    title: '',
};

const loadShow = (state: IShowState): IShowState => {
    return {
        ...state,
        isLoading: true,
    };
};

const loadShowSuccess = (state: IShowState, action: ILoadShowSuccessAction): IShowState => {
    return {
        ...state,
        ...action.payload,
        isLoading: false,
    };
};

const loadShowError = (state: IShowState): IShowState => {
    return {
        ...state,
        isLoading: false,
    };
};

const reducer = (state: IShowState = initialState, action: Action): IShowState => {
    switch (action.type) {
        case LOAD_SHOW:
            return loadShow(state);
        case LOAD_SHOW_SUCCESS:
            return loadShowSuccess(state, action as ILoadShowSuccessAction);
        case LOAD_SHOW_ERROR:
            return loadShowError(state);
        default:
            return state;
    }
};

export default reducer;
