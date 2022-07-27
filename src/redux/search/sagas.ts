import {put, takeEvery, call} from 'redux-saga/effects';
import getSearchData from '../../services/searchServices';

import {setData} from './action';

export function* searchDataAsync() {
  try {
    const data = yield call(getSearchData);

    yield put(setData(data));
  } catch (e) {}
}

export function* watcherSearchAsync() {
  yield takeEvery('Fetch_Data', searchDataAsync);
}
