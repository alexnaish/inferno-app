import Inferno from 'inferno';
import Component from 'inferno-component';

import NavigationLink from './NavigationLink';

export default class Navigation extends Component {

  render() {
    return (
      <nav className="sidenav">
        <ul className="navigation">
          <NavigationLink text="General" linkTo="/" icon="fa-cogs" />
          <NavigationLink text="Backup & Restore" linkTo="/backup" icon="fa-floppy-o" />
        </ul>
      </nav>
    );
  }
};
