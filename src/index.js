import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './admin/reducers'
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import App from './containers/App';

import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const logger = createLogger();

let store = createStore(
  reducer,
  {},
  applyMiddleware(thunk, logger)
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
