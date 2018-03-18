import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { reducer as montage } from './montage';
import sagas from './sagas';

// Hook redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create root reducer
const rootReducer = combineReducers({
  form: formReducer,
  montage
});

// Load middlewares
const enhancer = composeEnhancers(applyMiddleware(
  thunk,
  sagaMiddleware
));

// Create store with reducer and middleware
const store = createStore(rootReducer, enhancer);

// Run sagas
sagaMiddleware.run(sagas);

export default store;