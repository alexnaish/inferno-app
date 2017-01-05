import Inferno from 'inferno';
import { Provider } from 'inferno-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import logReporter from './middleware/logger';
import App from './app';

const middleware = [
	thunk,
	logReporter
];

const store = createStore(
  reducers,
  compose(applyMiddleware(...middleware))
);

Inferno.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));
