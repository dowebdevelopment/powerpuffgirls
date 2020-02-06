import React, { Component } from 'react';
import striptags from 'striptags';
import './Episode.scss';
import { RouteComponentProps } from 'react-router';

export interface IEpisode {
    title: string;
    description: string;
    imagePath: string;
}

interface IEpisodeProps extends IEpisode, RouteComponentProps {
}

class Episode extends Component<IEpisodeProps> {
    render() {
        return (
            <div className="episode">
                <header className="episode__header">
                    <h1 className="episode__title">{this.props.title}</h1>
                </header>
                <main className="episode__main">
                    <p className="episode__description">
                        {striptags(this.props.description)}
                    </p>
                    <p className="episode__image">
                        <img
                            src={this.props.imagePath}
                            alt={this.props.title} />
                    </p>
                </main>
                <footer>
                    <button className="back-button" onClick={this.props.history.goBack}>Go Back</button>
                </footer>
            </div>
        );
    }
}

export default Episode;
