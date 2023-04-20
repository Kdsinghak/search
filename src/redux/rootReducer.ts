import {combineReducers} from 'redux';
import {searchData} from './search/reducer';

/**
 * root reducer function which contains a many reducers of app
 */
const rootReducer = combineReducers({searchData});
export default rootReducer;
