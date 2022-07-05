import { all } from "redux-saga/effects";
import fetchUsersRequest from "./list";
import handleSwipeUserRequest from "./swipe";

export default all([fetchUsersRequest, handleSwipeUserRequest]);
