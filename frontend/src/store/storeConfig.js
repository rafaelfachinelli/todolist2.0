import { combineReducers } from 'redux';
import { applyMiddleware, createStore } from 'redux';

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import { todoReducer } from './reducers/todoReducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const reducers = combineReducers({
  todo: todoReducer
});

export const store = applyMiddleware(multi, promise, thunk)(createStore)(reducers, devTools);
