import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './containers/App';
import { articleReducer } from './reducers/reducers';

const rootReducer = combineReducers({ articleReducer });

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
