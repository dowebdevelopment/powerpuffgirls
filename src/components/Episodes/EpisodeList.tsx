import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './EpisodeList.scss';
import { IEpisodeState } from '../../store/reducers/episodes';

interface IEpisodeListProps {
    episodes: IEpisodeState[];
}

class EpisodeList extends Component<IEpisodeListProps> {
    render() {
        return (
            <ul className="episodes__list">
                {this.props.episodes.map((episode: IEpisodeState) => (
                    <li key={episode.id} className="episodes__item">
                        <NavLink
                            to={`${window.location.pathname}/episodes/${episode.season}/${episode.number}`}>
                            {episode.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        )
    }
}

export default EpisodeList;
