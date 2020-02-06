import { Action } from 'redux';

export interface IErrorAction extends Action {
    payload: string;
}
