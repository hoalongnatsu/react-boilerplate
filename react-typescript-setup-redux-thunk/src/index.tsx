import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import * as serviceWorker from 'serviceWorker';

/* Page */
import App from 'layouts/App';
import Home from 'pages/Home';
import About from 'pages/About';

import rootReducer from 'reducers';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <App>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
        </App>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
