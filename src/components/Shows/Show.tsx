import React, { Component } from 'react';
import EpisodeList from '../Episodes/EpisodeList';
import striptags from 'striptags';
import './Shows.scss';
import { IEpisodeState } from '../../store/reducers/show';

export interface IShow {
    title: string;
    description: string;
    imagePath: string;
    episodes: IEpisodeState[];
}

export interface IShowProps extends IShow {
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
                    <h2 className="episodes__title">First {this.props.episodes.length} episodes</h2>
                    <EpisodeList episodes={this.props.episodes}/>
                </section>
            </div>
        );
    }
}

export default Show;

