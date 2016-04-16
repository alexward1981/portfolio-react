import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
//
// import * as ConfigActions from '../../actions/configActions';
// import ConfigStore from '../../stores/configStore';

import Layout from '../jsx/layouts/Layout.jsx'
import Index from '../jsx/pages/Index.jsx'

const app = document.getElementById('app');

var LayoutWrapper = React.createClass({
  render: function () {
    return (
        <Layout status="available" />
    );
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
   <Route path="/" component={LayoutWrapper}>
     <IndexRoute component={Index}></IndexRoute>
   </Route>
  </Router>,
app);
