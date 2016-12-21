import Inferno from 'inferno';
import Component from 'inferno-component';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <a className="logo" title="onemedia logo"></a>
        <div className="border">&nbsp;</div>
      </div>
    );
  }
};
