import Cookies from "js-cookie";
import {
  appSetUserDetails,
  appSetUserToken,
  loginSetChecked,
  appSetInitializing,
  appSetLoginSuccessful
} from "./actionCreators";
import axios from "axios";
import { loginBaseUrl, registerBaseUrl } from "./constants";
import { history } from "../../helper";

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
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve({ accessToken: "token" }), 1000);
  });
  const response = await promise;
  // const response = await axios.post(loginBaseUrl(), {
  //   email,
  //   password
  // });
  if (!response.accessToken) {
    dispatch(appSetLoginSuccessful(false));
  }
  dispatch(handleJwt(response.accessToken));
  dispatch(appSetLoginSuccessful(true));
};

export const handleJwt = token => (dispatch, getState) => {
  Cookies.set("accessToken", token);
  dispatch(appSetUserToken(token));
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
  console.log("register data ==>", userData);
  const response = await axios.post(registerBaseUrl(), userData);
  history.push("/login");
  // if (!response) return;
};
