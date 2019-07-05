import * as types from "./types";

export const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case types.APP_SET_USER_DETAILS: {
    //   const { user } = action;
    //   return { ...state, user };
    // }
    default:
      return state;
  }
};
