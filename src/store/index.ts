import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import sagas from "./sagas";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer,
  middleware: middlewares,
});

sagaMiddleware.run(sagas);
