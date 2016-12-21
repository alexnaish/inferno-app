import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

import Navigation from './Navigation';

export default class Content extends Component {

  render() {
    const { page } = this.props;

    return (
      <main className="content">
        <Navigation />
        {page}
      </main>
    );
  }
};
