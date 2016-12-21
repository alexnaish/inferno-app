import Inferno from 'inferno';
import Component from 'inferno-component';

export default class Header extends Component {

  toggleMenu() {
    document.body.classList.toggle('collapsed');
  }

  render() {

    const { name } = this.props;

    return (
      <section className="subheader">
        <button type="button" id="main-menu-toggle" onClick={this.toggleMenu}>
            <i className="navbar-icon fa fa-bars icon"></i>
        </button>
        <div className="content">
            <div className="title"><strong>{name}</strong></div>
            <div>
                <button className="btn btn-success publish">Publish REPLACE Channel</button>
            </div>
        </div>
      </section>
    );
  }
};
