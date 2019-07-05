import Cookies from "js-cookie";
import {
  appSetUserDetails,
  appSetUserToken,
  loginSetChecked,
  appSetInitializing,
  appSetLoginSuccessful
} from "./actionCreators";
import axios from "axios";
import { loginBaseUrl, registerBaseUrl } from "../../constants";
import { history, setDefaultToken } from "../../helper";

// export const appSetTokenCookie = accessToken =>
//   Cookies.set("accessToken", accessToken);

// need to restrcutre according to new flow

// export const appHandleLoginResponse = (authClient, response) => async (
//   dispatch,
//   getState
// ) => {
//   let user = { authClient, ...response };
//   let { accessToken } = response;
//   await appSetTokenCookie(accessToken);
//   dispatch(appSetUserDetails(user));
//   dispatch(appSetUserToken(accessToken));
// };

export const appCheckisLoggedIn = () => (dispatch, getState) => {
  const token = Cookies.get("accessToken");
  if (token) {
    dispatch(appSetUserToken(token));
  }
  dispatch(loginSetChecked(true));
  dispatch(appSetInitializing(false));
};

export const requestLogin = (email, password) => async (dispatch, getState) => {
  const { data: response } = await axios.post(loginBaseUrl(), {
    email,
    password
  });
  if (!response.access_Token) {
    dispatch(appSetLoginSuccessful(false));
  }
  dispatch(handleJwt(response.access_token));
  dispatch(appSetLoginSuccessful(true));
};

export const handleJwt = token => (dispatch, getState) => {
  Cookies.set("accessToken", token);
  dispatch(appSetUserToken(token));
  setDefaultToken(token);
};

export const requestRegister = data => async (dispatch, getState) => {
  const {
    email,
    firstName: first_name,
    lastName: last_name,
    confirmPassword: password,
    phoneNumber: mobile_number,
    countryCode: country_code,
    college_name
  } = data;
  const userData = {
    email,
    password,
    first_name,
    last_name,
    country_code,
    mobile_number,
    college_name
  };
  const { data: response } = await axios.post(registerBaseUrl(), userData);
  // if (!response){
  //   dispatch(registerFailed)
  // }
  // dispatch(requestSuccessful())
};
