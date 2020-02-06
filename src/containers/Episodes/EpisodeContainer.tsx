import React, { Component } from 'react';
import Episode, { IEpisode } from '../../components/Episodes/Episode';
import { connect } from 'react-redux';
import { loadEpisode } from '../../store/actions/episode';
import withSpinner from '../../hoc/WithSpinner/WithSpinner';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

const EpisodeWithSpinner = withSpinner(withRouter(Episode));

interface MatchParams {
    showId: string;
    season: string;
    number: string;
}

export interface IEpisodeContainerProps extends IEpisode, RouteComponentProps<MatchParams> {
    loadEpisode: (showId: number, season: number, number: number) => Dispatch;
    isLoading: boolean;
}

class EpisodeContainer extends Component<IEpisodeContainerProps> {
    componentDidMount(): void {
        this.props.loadEpisode(
            +this.props.match.params.showId,
            +this.props.match.params.season,
            +this.props.match.params.number,
        );
    }

    render() {
        return (
            <EpisodeWithSpinner
                isLoading={this.props.isLoading}
                title={this.props.title}
                description={this.props.description}
                imagePath={this.props.imagePath}
            />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        isLoading: state.episode.isLoading,
        ...state.episode,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        loadEpisode: (showId: number, season: number, number: number) => dispatch(loadEpisode(showId, season, number)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeContainer);
