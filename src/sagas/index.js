import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_ITEM_LIST, RENDER_ITEM_LIST } from '../actions';

export function* fetchList() {
  const endpoint = "https://api.github.com/repos/facebook/create-react-app/issues";
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_ITEM_LIST, itemList: data });
}

export function* loadItemList() {
  yield takeEvery(LOAD_ITEM_LIST, fetchList);
}

export default function* rootSaga() {
  yield all([loadItemList()]);
}