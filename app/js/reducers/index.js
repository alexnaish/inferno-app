import { combineReducers } from 'redux';
import generalReducers from '../modules/general/reducers';

export default combineReducers({
	general: generalReducers
});
