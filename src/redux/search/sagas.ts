import {put, takeEvery, call} from 'redux-saga/effects';
import {saveDataOnFirebase} from '../../screens/home/action';
import getSearchData from '../../services/searchServices';

import {addData, beginLoading, endLoading, setData} from './action';

/**
 * generatior function for api call , loading , pagination
 * @param action
 */

export function* searchDataAsync(action: any) {
  const {page, search, uid, email, recentSearch} = action;

  yield put(beginLoading());

  try {
    const data = yield call(getSearchData, page, search);
    // call->call doesn't execute the effect, it just creates a plain object like {type: 'CALL', func, args}

    if (action.page === 0) {
      yield put(setData(data, page, search));
      if (data.length > 0) {
        saveDataOnFirebase(uid, email, search, recentSearch);
      }
    } else {
      yield put(addData(action.data, data, page, search));
    }
  } catch (e) {
  } finally {
    yield put(endLoading());
  }
}

/**
 * generator function which match the type and after matching a function acync task run
 */

export function* watcherSearchAsync() {
  yield takeEvery('Fetch_Data', searchDataAsync);
}
