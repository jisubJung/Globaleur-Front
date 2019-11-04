import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import AppLayout from '../components/AppLayout';
import reducer from '../reducers';
import rootSaga from '../sagas';

const Globaleur = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>Globaleur</title>
                <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.css' />
                <script src='https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.js' />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

Globaleur.propTypes = {
    Component: PropTypes.elementType,
    store: PropTypes.object,
}

const configureStore = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [
        // 여기에 store 커스터마이징을 할 수 있음
        sagaMiddleware,
    ];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : compose(
            applyMiddleware(...middlewares),
            !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
        );

    const store = createStore(reducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
};

export default withRedux(configureStore)(Globaleur);