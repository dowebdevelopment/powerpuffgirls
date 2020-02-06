import React, { Component } from 'react';
import EpisodeList from '../Episodes/EpisodeList';
import withSpinner from '../../hoc/WithSpinner/WithSpinner';
import striptags from 'striptags';
import { IEpisode } from '../Episodes/Episode';
import './Shows.scss';

const EpisodeListWithSpinner = withSpinner(EpisodeList);

export interface IShow {
    title: string;
    description: string;
    imagePath: string;
}

export interface IShowProps extends IShow {
    isLoadingEpisodes: boolean;
    episodes: IEpisode[];
}

class Show extends Component<IShowProps> {
    render() {
        return (
            <div className="show">
                <header className="show__header">
                    <h1 className="show__title">{this.props.title}</h1>
                </header>

                <main className="show__main">
                    <p className="show__description">
                        {striptags(this.props.description)}
                    </p>
                    <p className="show__image">
                        <img
                            src={this.props.imagePath}
                            alt={this.props.title}/>
                    </p>
                </main>

                <section className="episodes">
                    <h2 className="episodes__title">Episodes</h2>
                    <EpisodeListWithSpinner
                        isLoading={this.props.isLoadingEpisodes}
                        episodes={this.props.episodes}>
                    </EpisodeListWithSpinner>
                </section>
            </div>
        );
    }
}

export default Show;

