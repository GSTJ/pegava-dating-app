import produce from "immer";
import { createAction, createAsyncAction } from "typesafe-actions";
import { ActionType, createReducer } from "typesafe-actions";
import { Swipe } from "~views/Swipe/components/SwipeHandler/hooks/useSwipeGesture";

export const initialState = {
  request: {
    data: [],
    loading: true,
    error: null,
  },
  config: {
    limit: 3,
    nextPage: 1,
    hasMore: true,
    lastCardId: null,
  },
};

export enum Types {
  SWIPE_USER_REQUEST = "SWIPE_USER_REQUEST",
  SWIPE_USER_SUCCESS = "SWIPE_USER_SUCCESS",
  SWIPE_USER_FAILURE = "SWIPE_USER_FAILURE",

  SWIPE_BACK = "SWIPE_BACK",
}

const asyncActions = createAsyncAction(
  Types.SWIPE_USER_REQUEST,
  Types.SWIPE_USER_SUCCESS,
  Types.SWIPE_USER_FAILURE
)<
  { id: number; swipeType: Swipe },
  { id: number },
  { id: number; message: string }
>();

const swipeBack = createAction(Types.SWIPE_BACK)();

export const Actions = { ...asyncActions, swipeBack };

const swipeUserRequest = (
  state = initialState,
  { payload }: ActionType<typeof Actions.request>
) =>
  produce(state, (draft) => {
    const { lastCardId } = draft.config;
    const { data: users } = draft.request;

    const lastCardIndex = users.findIndex((user) => user.id === lastCardId);

    // we shouldn't ever discard the current user
    // this way we are able to 'go back' and avoid flickering issues
    if (lastCardIndex > -1) {
      draft.request.data.splice(lastCardIndex, 1);
    }

    draft.config.lastCardId = payload.id;

    return draft;
  });

const swipeBackHandler = (state = initialState) =>
  produce(state, (draft) => {
    draft.config.lastCardId = null;

    return draft;
  });

export default createReducer<typeof initialState, ActionType<typeof Actions>>(
  initialState
)
  .handleAction(Actions.request, swipeUserRequest)
  .handleAction(Actions.swipeBack, swipeBackHandler);
