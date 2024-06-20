// src/store/configureStore.js

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers'; // Make sure to import your root reducer

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

export default store;
