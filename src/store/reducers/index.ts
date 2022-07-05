import * as users from "./users";
import { StateType } from "typesafe-actions";
import { combineReducers } from "redux";

export const Types = {
  ...users.Types,
};

export const Actions = {
  users: users.Actions,
};

const rootReducer = combineReducers({
  users: users.default,
});

export type RootReducer = StateType<typeof rootReducer>;

export default rootReducer;
