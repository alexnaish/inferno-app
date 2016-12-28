import Inferno from 'inferno';
import Component from 'inferno-component';

import { FOOTER_NAME } from 'config';

export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <span>{FOOTER_NAME}</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    );
  }
};
