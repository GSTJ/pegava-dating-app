import { put, takeLatest, select, all, fork } from "redux-saga/effects";
import { Actions, Types } from "~store/reducers";
import { ActionType } from "typesafe-actions";

function* swipeUserRequest({
  payload,
}: ActionType<typeof Actions.users.swipe.request>) {
  const { id, swipeType: _swipeType } = payload;

  try {
    // const { data: response } = yield call(api.post, `/swipe/${id}`, {
    //   params: { swipeType: _swipeType },
    // });

    yield put(Actions.users.swipe.success({ id }));
  } catch (err) {
    const error = { id, message: "Alguma coisa deu errada" };
    yield put(Actions.users.swipe.failure(error));
  }
}

function* handleCardFetching() {
  const request = yield select((state) => state.users.request);
  if (request.data.length >= 3 || request.error) return;
  yield put(Actions.users.list.request());
}

export function* handleSwipeUserRequest(
  props: ActionType<typeof Actions.users.swipe.request>
) {
  yield all([fork(() => swipeUserRequest(props)), fork(handleCardFetching)]);
}

export default takeLatest(Types.SWIPE_USER_REQUEST, handleSwipeUserRequest);
