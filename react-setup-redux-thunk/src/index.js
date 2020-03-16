import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

/* Pages */
import Home from 'pages/Home';
import Panel from 'pages/Panel';

import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/panel" component={Panel} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
