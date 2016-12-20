import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

export default class General extends Component {

  render() {
    return (
      <div>
        <h1>General Page</h1>
        <ul>
          <li><Link to="">General</Link></li>
          <li><Link to="backup">Backup / Restore</Link></li>
        </ul>

      </div>
    )
  }

}
