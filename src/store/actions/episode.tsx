import { Action } from 'redux';
import { IEpisode } from '../../components/Episodes/Episode';

export const LOAD_EPISODE = '[Episode] LOAD';
export const LOAD_EPISODE_SUCCESS = '[Episode] LOAD_SUCCESS';
export const LOAD_EPISODE_ERROR = '[Episode] LOAD_ERROR';

export interface ILoadEpisodeAction extends Action {
    showId: number;
    season: number;
    number: number;
}

interface IMazeEpisode {
    name: string;
    summary: string;
    image: {
        medium: string;
    }
}

export interface ILoadEpisodeSuccessAction extends Action {
    payload: IEpisode;
}

interface ILoadEpisodeErrorAction extends Action {
    payload: string;
}

export const loadEpisode = (showId: number, season: number, number: number): ILoadEpisodeAction => {
    return {
        type: LOAD_EPISODE,
        showId,
        season,
        number,
    };
};

export const loadEpisodeSuccess = (data: IMazeEpisode): ILoadEpisodeSuccessAction => {
    return {
        type: LOAD_EPISODE_SUCCESS,
        payload: {
            title: data.name,
            description: data.summary,
            imagePath: data.image.medium
        },
    };
};

export const loadEpisodeError = (error: string): ILoadEpisodeErrorAction => {
    return {
        type: LOAD_EPISODE_ERROR,
        payload: error
    };
};
