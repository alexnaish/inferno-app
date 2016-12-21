import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

export default class Navigation extends Component {

  render() {
    return (
      <nav className="sidenav">
        <ul className="navigation">
          <li><Link activeClassName="active" to="/">General</Link></li>
          <li><Link activeClassName="active" to="/backup">Backup / Restore</Link></li>
        </ul>
      </nav>
    );
  }
};
