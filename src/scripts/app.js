import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from '../jsx/layouts/Layout.jsx';
import Index from '../jsx/pages/Index.jsx';

let store = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore)(rootReducer)

const appRoot = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
   <Route path="/" component={Layout}>
     <IndexRoute component={Index}></IndexRoute>
   </Route>
  </Router>,
appRoot);
