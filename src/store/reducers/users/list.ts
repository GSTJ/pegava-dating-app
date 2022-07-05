import produce from "immer";
import { createAsyncAction } from "typesafe-actions";
import { ActionType, createReducer } from "typesafe-actions";
import { removeDuplicates } from "~services/utils";
import { initialState } from "./swipe";

export enum Types {
  FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS = "FETCH_SUCCESS",
  FETCH_USERS_FAILURE = "FETCH_FAILURE",
}

export const Actions = createAsyncAction(
  Types.FETCH_USERS_REQUEST,
  Types.FETCH_USERS_SUCCESS,
  Types.FETCH_USERS_FAILURE
)<
  void,
  { users: any[]; nextPage: number; hasMore: boolean },
  { message: string }
>();

const fetchUsersRequest = (state = initialState) =>
  produce(state, (draft) => {
    draft.request.loading = true;
    draft.request.error = null;

    return draft;
  });

const fetchUsersSuccess = (
  state = initialState,
  { payload }: ActionType<typeof Actions.success>
) =>
  produce(state, (draft) => {
    draft.request.loading = false;
    draft.request.error = null;
    draft.request.data = [...draft.request.data, ...payload.users].filter(
      removeDuplicates
    );

    draft.config.nextPage = payload.nextPage;
    draft.config.hasMore = payload.hasMore;

    return draft;
  });

const fetchUsersFailure = (
  state = initialState,
  { payload }: ActionType<typeof Actions.failure>
) =>
  produce(state, (draft) => {
    draft.request.loading = false;
    draft.request.error = payload.message;

    return draft;
  });

export default createReducer<typeof initialState, ActionType<typeof Actions>>(
  initialState
)
  .handleAction(Actions.request, fetchUsersRequest)
  .handleAction(Actions.success, fetchUsersSuccess)
  .handleAction(Actions.failure, fetchUsersFailure);
