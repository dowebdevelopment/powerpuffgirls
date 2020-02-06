import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadShow } from '../../store/actions/show';
import { Dispatch } from 'redux';
import withSpinner from '../../hoc/WithSpinner/WithSpinner';
import Show, { IShow } from '../../components/Shows/Show';
import { RouteComponentProps } from 'react-router-dom';

const ShowWithSpinner = withSpinner(Show);

interface MatchParams {
    showId: string;
}

export interface IShowContainerProps extends IShow, RouteComponentProps<MatchParams> {
    loadShow: (showId: number) => Dispatch;
    isLoading: boolean;
}

class ShowContainer extends Component<IShowContainerProps> {
    componentDidMount(): void {
        this.props.loadShow(+this.props.match.params.showId);
    }

    render() {
        return (
            <ShowWithSpinner
                isLoading={this.props.isLoading}
                title={this.props.title}
                description={this.props.description}
                imagePath={this.props.imagePath}
                episodes={this.props.episodes}
            >
            </ShowWithSpinner>
        );
    }
}


const mapStateToProps = (state: any) => {
    return {
        ...state.show,
        isLoading: state.show.isLoading,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        loadShow: (showId: number) => dispatch(loadShow(showId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer);

