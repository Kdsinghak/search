import {put, takeEvery, call, delay} from 'redux-saga/effects';
import getSearchData from '../../services/searchServices';

import {addData, beginLoading, endLoading, setData} from './action';

export function* searchDataAsync(action: any) {
  const {page, search} = action;
  yield put(beginLoading());
  delay(5000);
  try {
    const data = yield call(() => getSearchData(page, search));

    if (action.page === 0) {
      yield put(setData(data, page, search));
    } else {
      yield put(addData(action.data, data, page, search));
    }
  } catch (e) {
  } finally {
    yield put(endLoading());
  }
}

export function* watcherSearchAsync() {
  yield takeEvery('Fetch_Data', searchDataAsync);
}
