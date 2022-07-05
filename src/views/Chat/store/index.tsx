import * as selectors from "./selectors";
import React, { createContext } from "react";

const store = createContext({});
export const useContext = () => {
  return React.useContext<any>(store);
};

export {
  default as reducers,
  Types,
  Creators,
  INITIAL_STATE,
} from "./reducers";
export const Selectors = selectors;
export default store;
