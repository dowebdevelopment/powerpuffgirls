import { Action } from 'redux';
import { IEpisodeState } from '../reducers/episodes';

export const LOAD_EPISODES = '[Episodes] LOAD';
export const LOAD_EPISODES_SUCCESS = '[Episodes] LOAD_SUCCESS';
export const LOAD_EPISODES_ERROR = '[Episodes] LOAD_ERROR';

export interface ILoadEpisodesAction extends Action {
    showId: number;
}

export interface ILoadEpisodesSuccessAction extends Action {
    payload: IEpisodeState[];
}

interface IMazeEpisode {
    id: string;
    name: string;
    summary: string;
    image: {
        medium: string;
    }
    season: string;
    number: string;
}

interface ILoadEpisodesErrorAction extends Action {
    payload: string;
}

export const loadEpisodes = (showId: number): ILoadEpisodesAction => {
    return {
        type: LOAD_EPISODES,
        showId,
    };
};

export const loadEpisodesSuccess = (data: IMazeEpisode[]): ILoadEpisodesSuccessAction => {
    return {
        type: LOAD_EPISODES_SUCCESS,
        payload: data.map((episode: IMazeEpisode): IEpisodeState => {
            return {
                id: +episode.id,
                title: episode.name,
                description: episode.summary,
                imagePath: episode.image.medium,
                season: +episode.season,
                number: +episode.number,
            }
        }),
    };
};

export const loadEpisodesError = (error: string): ILoadEpisodesErrorAction => {
    return {
        type: LOAD_EPISODES_ERROR,
        payload: error,
    };
};

