import {all} from 'redux-saga/effects';
import {watcherSearchAsync} from './search/sagas';

/**
 * generator function for root saga which contains a watcher function of the app
 *
 */

export default function* rootSaga() {
  yield all([watcherSearchAsync()]);
}
