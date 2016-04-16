import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Layout from '../jsx/layouts/Layout.jsx'
import Index from '../jsx/pages/Index.jsx'

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
   <Route path="/" component={Layout}>
     <IndexRoute component={Index}></IndexRoute>
   </Route>
  </Router>,
app);
