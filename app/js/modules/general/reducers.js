import { combineReducers } from 'redux';
import { UPDATE } from './constants';

export function timeout (state = 0, action = {}) {
	switch (action.type) {
        case UPDATE:
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({
    timeout: timeout
});
