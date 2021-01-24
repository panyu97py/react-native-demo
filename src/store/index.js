import {createStore, compose, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const enhancer = compose(applyMiddleware(thunk, logger));
export const store = createStore(reducers, enhancer);
