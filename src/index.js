import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
));

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/*" component={App} />
    </Router>
  </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
