import Inferno from 'inferno';
import Component from 'inferno-component';
import { name } from 'config';

import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Content from '../components/Content';
import Footer from '../components/Footer';

export default class Main extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <SubHeader name={name} />
        <Content page={this.props.children}/>
        <Footer />
      </div>
    );
  }

}
