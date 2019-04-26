import { takeLatest, call, put, delay } from "redux-saga/effects";
import { types } from "../reducers/Reducer";

//Here we should put all our sagas
export const sagas = [plusSAGA(), minusSAGA()];

function* plusSAGA() {
  yield takeLatest(types.PLUSMINUS_SAGA, plus);
}

function* plus() {
  try {
    yield put({ type: types.PLUS });
  } catch (e) {
    console.log(e);
  }
}

function* minusSAGA() {
  yield takeLatest(types.PLUSMINUS_SAGA, minus);
}

function* minus() {
  try {
    yield put({ type: types.MINUS });
  } catch (e) {
    console.log(e);
  }
}
