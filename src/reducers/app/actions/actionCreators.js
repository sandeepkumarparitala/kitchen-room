import * as types from "../types";

export const appSetUserDetails = user => ({
  type: types.APP_SET_USER_DETAILS,
  user
});

export const appSetUserToken = token => ({
  type: types.APP_SET_TOKEN,
  token
});

export const loginSetChecked = checked => ({
  type: types.LOGIN_SET_CHECKED,
  checked
});

export const appSetInitializing = isInitializing => ({
  type: types.APP_SET_INITIALIZING,
  isInitializing
});

export const appSetLoginSuccessful = status => ({
  type: types.APP_SET_LOGIN_SUCCESSFUL,
  status
});

export const userLogout = () => ({
  type:types.USER_LOGOUT
})
