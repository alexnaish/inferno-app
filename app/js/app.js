import Inferno from 'inferno';
import createHashHistory from 'history/createHashHistory';
import { Router, Route, IndexRoute } from 'inferno-router';
import { APP_NAME } from 'config';

import MainPage from './container/MainPage';
import General from './modules/general/page';
import BackupRestore from './pages/BackupRestore';
import Missing from './pages/Missing';

const history = createHashHistory();

const pageEnter = function(item){
    document.title = item.props.name ? `${APP_NAME} - ${item.props.name}` : APP_NAME ;
}

export default function({}){
  return (
    <Router history={history}>
      <Route component={MainPage}>
        <IndexRoute name="General" component={General} onEnter={pageEnter}/>
        <Route name="Backup / Restore" path="/backup" component={BackupRestore} onEnter={pageEnter} />
        <Route name="Specific" path="/backup/:file" component={BackupRestore} onEnter={pageEnter} />
        <Route name="Missing Page" path="*" component={Missing} onEnter={pageEnter} />
      </Route>
    </Router>
  )
};
