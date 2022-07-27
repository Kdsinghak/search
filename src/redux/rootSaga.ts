import {all} from 'redux-saga/effects';
import {watcherSearchAsync} from './search/sagas';

export default function* rootSaga() {
  yield all([watcherSearchAsync()]);
}
