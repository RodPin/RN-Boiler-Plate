import NavigationService from "@navigators/NavigationService";
import { takeLatest, call, put, delay } from "redux-saga/effects";
import { types } from "@reducers/authReducer";
import { NavigationActions } from "react-navigation";
export const sagas = [
  loginSAGA(),
  forgotPasswordSAGA(),
  newPasswordSubmitSaga(),
  signUpSAGA(),
  signOutSAGA()
];

function* loginSAGA() {
  yield takeLatest(types.LOGIN_REQUEST_SAGA, login);
}

function* login(action) {
  try {
    const { email, password } = action.payload;
    yield put({ type: types.LOGIN_REQUEST });
    const user = yield call("LOGIN SERVICE");
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: user.attributes
    });

    yield call(NavigationService.navigate, "SCREEN_NAME");
  } catch (e) {
    yield put({ type: types.LOGIN_FAIL, payload: e.message });
    yield delay(5000);
    yield put({ type: types.CLEAR_ERROR });
  }
}

function* forgotPasswordSAGA() {
  yield takeLatest(types.FORGOT_PASSWORD_REQUEST_SAGA, forgotPassword);
}

function* forgotPassword(action) {
  try {
    const { email } = action.payload;
    yield put({ type: types.FORGOT_PASSWORD_REQUEST });
    yield call(AmplifyService.forgotPassword, email);
    yield put({
      type: types.FORGOT_PASSWORD_SUCCESS,
      payload: email
    });
    yield call(NavigationService.navigate, "SCREEN_NAME");
  } catch (e) {
    yield put({ type: types.FORGOT_PASSWORD_FAIL, payload: e.message });
    yield delay(5000);
    yield put({ type: types.CLEAR_ERROR });
  }
}

function* newPasswordSubmitSaga() {
  yield takeLatest(types.NEW_PASSWORD_SUBMIT_REQUEST_SAGA, newPasswordSubmit);
}

function* newPasswordSubmit(action) {
  try {
    const { email, code, password } = action.payload;
    yield put({ type: types.NEW_PASSWORD_SUBMIT_REQUEST });
    yield call(AmplifyService.newPasswordSubmit, email, code, password);
    yield put({
      type: types.NEW_PASSWORD_SUBMIT_SUCCESS
    });
    yield call(NavigationService.navigate, "SCREEN_NAME");
  } catch (e) {
    console.log(e);
    yield put({ type: types.NEW_PASSWORD_SUBMIT_ERROR, payload: e.message });
    yield delay(3000);
    yield put({ type: types.CLEAR_ERROR });
  }
}

function* signUpSAGA() {
  yield takeLatest(types.SIGN_UP_REQUEST_SAGA, signUp);
}

function* signUp(action) {
  try {
    const { username, password, name, locale } = action.payload;
    yield put({ type: types.SIGN_UP_REQUEST });
    yield call(AmplifyService.signUp, username, password, name, locale);
    yield put({
      type: types.SIGN_UP_SUCCESS
    });
    yield call(NavigationService.navigate, "SCREEN_NAME");
  } catch (e) {
    console.log(e);
    yield put({ type: types.SIGN_UP_FAIL, payload: e.message });
    yield delay(10000);
    yield put({ type: types.CLEAR_ERROR });
  }
}

function* signOutSAGA() {
  yield takeLatest(types.SIGN_UP_REQUEST_SAGA, signUp);
}

function* signOut(action) {
  try {
    yield put({ type: types.LOGOUT_REQUEST });
    yield call(AmplifyService.signUp, username, password, name, locale);
    yield put({
      type: types.LOGOUT_SUCCESS
    });
    yield call(NavigationService.navigate, "SCREEN_NAME");
  } catch (e) {
    console.log(e);
    yield put({ type: types.LOGOUT_FAIL, payload: e.message });
    yield delay(10000);
    yield put({ type: types.CLEAR_ERROR });
  }
}
