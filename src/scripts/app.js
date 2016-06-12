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
import Skills from '../jsx/pages/Skills.jsx';
import CareerHistory from '../jsx/pages/CareerHistory.jsx';
import Brands from '../jsx/pages/Brands.jsx';
import Testimonials from '../jsx/pages/Testimonials.jsx';
import Contact from '../jsx/pages/Contact.jsx';

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
       <Route path="skills" component={Skills}></Route>
       <Route path="history" component={CareerHistory}></Route>
       <Route path="brands" component={Brands}></Route>
       <Route path="testimonials" component={Testimonials}></Route>
       <Route path="contact" component={Contact}></Route>
     </Route>
    </Router>
  </Provider>,
appRoot);
