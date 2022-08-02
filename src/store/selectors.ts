import { createSelector } from "reselect";
import { RootReducer } from "~reducers/index";

export const getCards = createSelector(
  (state: RootReducer) => state.users.request,
  (request) => request.data
);

export const getLastCardId = (state: RootReducer) =>
  state.users.config.lastCardId;

export const getActiveCards = createSelector(
  getCards,
  getLastCardId,
  (cards, lastCardId) => cards.filter((card) => card.id !== lastCardId)
);

export const getCurrentCardId = createSelector(
  getActiveCards,
  (activeCards) => activeCards?.[0]?.id
);
