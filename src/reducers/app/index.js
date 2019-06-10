import * as types from "./types";

export const initialState = {
  user: null,
  token: null,
  isLoginChecked: false,
  isInitializing: true
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.APP_SET_USER_DETAILS: {
      const { user } = action;
      return { ...state, user };
    }
    case types.LOGIN_SET_CHECKED: {
      const { checked } = action;
      return { ...state, isLoginChecked: checked };
    }
    case types.APP_SET_TOKEN: {
      const { token } = action;
      return { ...state, token };
    }
    case types.APP_SET_INITIALIZING: {
      const { isInitializing } = action;
      return { ...state, isInitializing };
    }
    default:
      return state;
  }
};
