import Cookies from "js-cookie";
import {
  appSetUserDetails,
  appSetUserToken,
  loginSetChecked,
  appSetInitializing,
  appSetLoginFailed
} from "./actionCreators";
import axios from "axios";
import { loginBaseUrl, registerBaseUrl } from "./constants";
import { history } from "../../helper";

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

export const requestLogin = (email, password) => async (dispatch, getState) => {
  console.log("access token requesting", loginBaseUrl());
  const response = await axios.post(loginBaseUrl(), {
    email,
    password
  });
  console.log("access token requesting", response);
  if (!response) {
    dispatch(appSetLoginFailed());
  }
  dispatch(handleJwt(response.access_token));
};

export const handleJwt = token => (dispatch, getState) => {
  Cookies.set("jwt", token);
  dispatch(appSetUserToken(token));
};

export const requestRegister = data => async (dispatch, getState) => {
  history.push("/login");
  const response = await axios.post(registerBaseUrl(), data);
  // if (!response) return;
};
