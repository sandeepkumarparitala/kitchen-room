import Cookies from "js-cookie";
import {
  appSetUserDetails,
  appSetUserToken,
  loginSetChecked,
  appSetInitializing,
  appSetLoginSuccessful,
  userLogout
} from "./actionCreators";
import axios from "axios";
import { loginBaseUrl, registerBaseUrl } from "../../constants";
import { history, setDefaultToken } from "../../helper";

export const appCheckisLoggedIn = () => (dispatch, getState) => {
  const token = Cookies.get("accessToken");
  if (token) {
    dispatch(appSetUserToken(token));
    setDefaultToken(token)
  }
  dispatch(loginSetChecked(true));
  dispatch(appSetInitializing(false));
};

export const requestLogin = (email, password) => async (dispatch, getState) => {
  const {data:{access_token}} = await axios.post(loginBaseUrl(), {
    email,
    password
  });
  if (!access_token) {
    dispatch(appSetLoginSuccessful(false));
    return
  }
  dispatch(handleJwt(access_token));
  dispatch(appSetLoginSuccessful(true));
};

export const handleJwt = token => (dispatch, getState) => {
  Cookies.set("accessToken", token);
  dispatch(appSetUserToken(token));
  setDefaultToken(token);
};

export const appLogout = () => (dispatch) => {
  console.log('here in logout')
  Cookies.remove("accessToken");
  dispatch(userLogout())
}

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
