import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { watchEpisode, watchShow } from './store/sagas';
import episodeReducers from './store/reducers/episode';
import showReducers from './store/reducers/show';
import errorReducers from './store/reducers/errors';

const rootReducer = combineReducers({
    episode: episodeReducers,
    show: showReducers,
    error: errorReducers,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware),
    )
);

sagaMiddleware.run(watchEpisode);
sagaMiddleware.run(watchShow);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
