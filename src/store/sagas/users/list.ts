import { call, put, takeLatest, select, delay } from "redux-saga/effects";
import { Actions, Types } from "~store/reducers";
import api from "~services/api";

export function* fetchUsersRequest() {
  const config = yield select((state) => state.users.config);

  try {
    yield delay(1000);

    const { data: response } = yield call(api.get, "/users", {
      params: {
        page: config.nextPage,
        limit: config.limit,
      },
    });

    yield put(
      Actions.users.list.success({
        users: response,
        nextPage: config.nextPage + 1,
        hasMore: true,
      })
    );
  } catch (err) {
    const error = { message: "Alguma coisa deu errada" };
    yield put(Actions.users.list.failure(error));
  }
}

export default takeLatest(Types.FETCH_USERS_REQUEST, fetchUsersRequest);
