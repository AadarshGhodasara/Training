import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import reducer from './component/redux/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({reducer});

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);