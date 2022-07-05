import { put } from "redux-saga/effects";
import users from "~store/sagas/users";
import { Actions } from "~store/reducers";

export default function* rootSaga() {
  yield users;
  yield put(Actions.users.list.request());
}
