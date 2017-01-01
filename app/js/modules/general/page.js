import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { bindActionCreators } from 'redux';

export class General extends Component {
	render() {
        console.log("this.props", this.props)
		return (
            <div className="panel">
                <div className="panel-heading">General Settings</div>
                <div className="panel-body">Content Here</div>
            </div>
		);
	}
};

const mapStateToProps = (state) => ({
    general: state.general
});

export default connect(mapStateToProps)(General);
