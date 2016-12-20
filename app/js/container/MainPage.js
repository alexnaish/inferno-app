import Inferno from 'inferno';
import Component from 'inferno-component';
import Header from '../components/Header.react';
import Footer from '../components/Footer.react';

export default class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }

}
