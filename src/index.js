import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './stores';
import App from './containers/App';
import Board from './containers/Board';
import Player from './containers/Player';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
    <div>
      <Router history={history}>
        <Route>
          <Route path="/" component={App}/>
          <Route path="board" component={Board}/>
          <Route path="player" component={Player}/>
        </Route>
      </Router>
      </div>
    </Provider>,
  document.getElementById('app')
);
