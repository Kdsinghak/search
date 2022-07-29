import {put, takeEvery, call, delay} from 'redux-saga/effects';
import getSearchData from '../../services/searchServices';

import {addData, setData} from './action';

export function* searchDataAsync(action: any) {
  const {page, search} = action;
  try {
    const data = yield call(() => getSearchData(page, search));
    console.log('data recieved', page, data);
    if (action.page === 0) yield put(setData(data, page, search));
    else yield put(addData(action.data, data, page, search));
  } catch (e) {}
}

export function* watcherSearchAsync() {
  yield takeEvery('Fetch_Data', searchDataAsync);
}
