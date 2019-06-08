import { combineReducers } from "redux";
import { reducer as appReducer, initialState as appInitialState } from "./app";
import * as types from "../types/app";

export const initialState = {
  app: appInitialState
};

export const reducers = combineReducers({
  app: appReducer
});

/**
 * this intercepts all actions
 * when we trigger logout, we need to reset the store to its initial state
 *
 * check this link for more details
 * https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
 * @param {Object} state
 * @param {Object} action
 */
const rootReducer = (state, action) => {
  if (action.type === types.USER_LOGOUT) {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;
