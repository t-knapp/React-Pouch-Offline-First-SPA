import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Reducer from './reducers/Reducer';
import App from './containers/App';

const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();