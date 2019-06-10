import React, { Component } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";
import KitchenImg from "../../assets/images/kitchen.jpg";
import googleIcon from "../../assets/images/gsuite.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import { ClientId } from "../config.js";
import { connect } from "react-redux";
import {
  LoginWrapper,
  LoginCard,
  FacebookButton,
  GoogleButton,
  LogoContainer,
  BackgroundImg,
  LoginHeader,
  AuthIcon,
  ButtonHolder,
  LoginForm
} from "./styles";
import { appHandleLoginResponse } from "../../reducers/app/actions";
import {
  loginSetChecked,
  appSetUserToken
} from "../../reducers/app/actions/actionCreators";
import {
  userSelectLoginChecked,
  userSelectIsLoggedIn
} from "../../Selectors/app";

class Login extends Component {
  handleGoogleResponse = async response => {
    const { setUserDetails, loginSetChecked, history } = this.props;
    await setUserDetails("google", response);
    loginSetChecked(true);
    history.push("/welcome");
  };

  hangleFacebookResponse = async response => {
    const { setUserDetails, loginSetChecked, history } = this.props;
    await setUserDetails("facebook", response);
    loginSetChecked(true);
    history.push("/welcome");
  };

  render() {
    const { loginChecked, isLoggedIn, history } = this.props;
    return isLoggedIn && loginChecked ? (
      history.push("/app")
    ) : (
      <LoginWrapper>
        <LoginCard>
          <LogoContainer>
            <BackgroundImg src={KitchenImg} />
          </LogoContainer>
          <LoginForm>
            <LoginHeader>Enter Kitchen room using</LoginHeader>
            <FacebookLogin
              appId={ClientId.facebook}
              LoginForm
              fields="name,email,picture"
              render={renderProps => (
                <ButtonHolder
                  renderProps={renderProps}
                  onClick={renderProps.onClick}
                >
                  <AuthIcon src={facebookIcon} />
                  <FacebookButton>Facebook</FacebookButton>
                </ButtonHolder>
              )}
              callback={this.hangleFacebookResponse}
            />
            <GoogleLogin
              clientId={ClientId.google}
              render={renderProps => (
                <ButtonHolder google={"google"} onClick={renderProps.onClick}>
                  <AuthIcon src={googleIcon} />
                  <GoogleButton
                    google={"google"}
                    disabled={renderProps.disabled}
                  >
                    Google
                  </GoogleButton>
                </ButtonHolder>
              )}
              buttonText="Login"
              onSuccess={this.handleGoogleResponse}
              onFailure={this.handleGoogleResponse}
              cookiePolicy={"single_host_origin"}
            />
          </LoginForm>
        </LoginCard>
      </LoginWrapper>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: userSelectIsLoggedIn(state),
  loginChecked: userSelectLoginChecked(state)
});
const mapDispatchToProps = {
  setUserDetails: appHandleLoginResponse,
  loginSetChecked,
  appSetUserToken
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
