import { createSelector } from "reselect";
import { State } from "./reducers";

const messagesSelector = (state: State) => state?.messages ?? [];
const bufferSelector = (state: State) => state?.buffer ?? [];

export const getMessagesDisplay = createSelector(
  messagesSelector,
  bufferSelector,
  (messages, buffer) => [...buffer, ...messages]
);
