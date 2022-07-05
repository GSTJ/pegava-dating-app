import produce from "immer";
import { action, createReducer } from "typesafe-actions";
import { FeedbackStatus } from "../components/Feedback";
import moment from "moment";

export interface Message {
  _id: string;
  message: string;
  createdAt: string;
  status: FeedbackStatus;
  self: boolean;
}

export interface State {
  messages: Message[];
  buffer: Message[];
}

const mockMessage = {
  _id: "609c830794d0a801004bc667",
  self: false,
  message: "bom diaa",
  createdAt: "2021-05-13T01:38:15.144Z",
  status: FeedbackStatus.Success,
};

export const INITIAL_STATE: State = {
  messages: [mockMessage],
  buffer: [],
};

export enum Types {
  SET_MESSAGES = "SET_MESSAGES",
  ADD_MESSAGE = "ADD_MESSAGE",
  ADD_TEMP = "ADD_TEMP",
  REMOVE_TEMP = "REMOVE_TEMP",
  ERROR_TEMP = "ERROR_TEMP",
}

export const Creators = {
  setMessages: ({ messages }: { messages: Message[] }) =>
    action(Types.SET_MESSAGES, { messages }),
  addMessage: ({ message }: { message: Message }) =>
    action(Types.ADD_MESSAGE, { message }),
  addTemp: ({ _id, body }: { _id: string; body: string }) =>
    action(Types.ADD_TEMP, { _id, body }),
  removeTemp: ({ _id }: { _id: string }) => action(Types.REMOVE_TEMP, { _id }),
  errorTemp: ({ _id }: { _id: string }) => action(Types.ERROR_TEMP, { _id }),
};

const setMessages = (state = INITIAL_STATE, { payload: { messages } }) =>
  produce(state, (draft) => {
    if (!messages || messages.length === draft.messages?.length) return draft;
    draft.messages = messages.reverse();
    return draft;
  });

const addMessage = (state = INITIAL_STATE, { payload: { message } }) =>
  produce(state, (draft) => {
    draft.messages.unshift(message);
    return draft;
  });

// Adding a fake message with current time
const addTemp = (state = INITIAL_STATE, { payload: { _id, body } }) =>
  produce(state, (draft) => {
    draft.buffer.unshift({
      _id,
      message: body,
      createdAt: moment().toISOString(),
      self: true,
      status: FeedbackStatus.Loading,
    } as Message);

    return draft;
  });

const removeTemp = (state = INITIAL_STATE, { payload: { _id } }) =>
  produce(state, (draft) => {
    const index = draft.buffer.findIndex((message) => message._id === _id);
    draft.buffer.splice(index, 1);
    return draft;
  });

const errorTemp = (state = INITIAL_STATE, { payload: { _id } }) =>
  produce(state, (draft) => {
    const index = draft.buffer.findIndex((message) => message._id === _id);
    draft.buffer[index].status = FeedbackStatus.Error;
    return draft;
  });

export default createReducer<typeof INITIAL_STATE>(INITIAL_STATE)
  .handleAction(Types.SET_MESSAGES, setMessages)
  .handleAction(Types.ADD_MESSAGE, addMessage)
  .handleAction(Types.ADD_TEMP, addTemp)
  .handleAction(Types.ERROR_TEMP, errorTemp)
  .handleAction(Types.REMOVE_TEMP, removeTemp);
