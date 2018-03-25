import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Model from './reducers/Model';
import App from './containers/App';

const store = createStore(Model);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();