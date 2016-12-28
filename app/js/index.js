import Inferno from 'inferno';
import createHashHistory from 'history/createHashHistory';
import { Router, Route, IndexRoute } from 'inferno-router';

import MainPage from './container/MainPage';
import General from './pages/General';
import BackupRestore from './pages/BackupRestore';

import Missing from './pages/Missing';

const history = createHashHistory();

const routes = (
  <Router history={history}>
    <Route component={MainPage}>
      <IndexRoute component={General} />
      <Route path="/backup" component={BackupRestore} />
      <Route path="*" component={Missing} />
    </Route>
  </Router>
);

Inferno.render(routes, document.getElementById('app'));
