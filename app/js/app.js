import Inferno from 'inferno';
import createHashHistory from 'history/createHashHistory';
import { Router, Route, IndexRoute } from 'inferno-router';

import MainPage from './container/MainPage';
import General from './modules/general/page';
import BackupRestore from './pages/BackupRestore';
import Missing from './pages/Missing';

const history = createHashHistory();

export default function app ({}){
  return (
    <Router history={history}>
      <Route component={MainPage}>
        <IndexRoute component={General} />
        <Route path="/backup" component={BackupRestore} />
        <Route path="*" component={Missing} />
      </Route>
    </Router>
  )
};
