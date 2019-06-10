import { createSelector } from "reselect";

export const userSelectLoginChecked = ({ app: { isLoginChecked } }) =>
  isLoginChecked;

export const appSelectUserToken = ({ app: { token } }) => token;

export const userSelectIsLoggedIn = createSelector(
  appSelectUserToken,
  token => Boolean(token)
);

export const appCheckIsInitializing = ({ app: { isIntializing } }) =>
  isIntializing;
