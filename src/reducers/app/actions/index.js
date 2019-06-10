import Cookies from "js-cookie";
import {
  appSetUserDetails,
  appSetUserToken,
  loginSetChecked,
  appSetInitializing
} from "./actionCreators";

export const appSetTokenCookie = accessToken =>
  Cookies.set("accessToken", accessToken);

export const appHandleLoginResponse = (authClient, response) => async (
  dispatch,
  getState
) => {
  let user = { authClient, ...response };
  let { accessToken } = response;
  await appSetTokenCookie(accessToken);
  dispatch(appSetUserDetails(user));
  dispatch(appSetUserToken(accessToken));
};

export const appCheckisLoggedIn = () => (dispatch, getState) => {
  const token = Cookies.get("accessToken");
  if (token) {
    dispatch(appSetUserToken(token));
  }
  dispatch(loginSetChecked(true));
  dispatch(appSetInitializing(false));
};
