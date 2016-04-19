import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import rootReducer from './reducer';

import Layout from '../jsx/layouts/Layout.jsx';
import Index from '../jsx/pages/Index.jsx';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

const history = syncHistoryWithStore(browserHistory, store);

const appRoot = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
     <Route path="/" component={Layout}>
       <IndexRoute component={Index}></IndexRoute>
     </Route>
    </Router>
  </Provider>,
appRoot);
