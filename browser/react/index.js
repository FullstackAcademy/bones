import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);