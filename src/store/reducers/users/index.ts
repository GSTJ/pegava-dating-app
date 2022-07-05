import * as swipe from "./swipe";
import * as list from "./list";
import reduceReducers from "reduce-reducers";
import { initialState } from "./swipe";

export const Types = {
  ...list.Types,
  ...swipe.Types,
};

export const Actions = {
  swipe: swipe.Actions,
  list: list.Actions,
};

export default reduceReducers(initialState, swipe.default, list.default);
