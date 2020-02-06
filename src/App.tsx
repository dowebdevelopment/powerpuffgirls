import React, { Component } from 'react';
import './App.scss';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import EpisodeContainer from './containers/Episodes/EpisodeContainer';
import ShowContainer from './containers/Shows/ShowContainer';
import Layout from './hoc/Layout/Layout';
import { RouteComponentProps } from 'react-router';

const SHOW_TO_DISPLAY = {
    url: 'powerpuff-girls',
    id: 6771,
};

interface IAppProps extends RouteComponentProps {
}

class App extends Component<IAppProps> {
    render() {
        return (
            <div className="app">
                <Layout>
                    <Switch>
                        <Route path="/:showName/:showId" exact component={ShowContainer}/>
                        <Route path="/:showName/:showId/episodes/:season/:number" exact component={EpisodeContainer}/>
                        <Redirect to={`${SHOW_TO_DISPLAY.url}/${SHOW_TO_DISPLAY.id}`}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default withRouter(App);
