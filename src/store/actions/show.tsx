import { IShow } from '../../components/Shows/Show';
import { Action } from 'redux';

export const LOAD_SHOW = '[Show] LOAD';
export const LOAD_SHOW_SUCCESS = '[Show] LOAD_SUCCESS';
export const LOAD_SHOW_ERROR = '[Show] LOAD_ERROR';

export interface ILoadShowAction extends Action {
    showId: number;
}

export interface ILoadShowSuccessAction extends Action {
    payload: IShow;
}

interface ILoadShowError extends Action {
    payload: string;
}

export const loadShow = (showId: number): ILoadShowAction => {
    return {
        type: LOAD_SHOW,
        showId
    };
};

export const loadShowSuccess = (data: IShow): ILoadShowSuccessAction => {
    return {
        type: LOAD_SHOW_SUCCESS,
        payload: data,
    };
};

export const loadShowError = (error: string): ILoadShowError => {
    return {
        type: LOAD_SHOW_ERROR,
        payload: error,
    };
};
