import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(
  /* Middlewares */
  thunk
));


const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer, enhancer);

export default store;