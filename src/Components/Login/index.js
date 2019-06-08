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
import { appSetToken } from "../../actions/app";

class WebLogin extends Component {
  handleGoogleResponse = response => {
    const { appHandleLoginResponse } = this.props;
    appHandleLoginResponse("google", response);
    console.log(response);
  };

  hangleFacebookResponse = response => {
    const { appHandleLoginResponse } = this.props;
    appHandleLoginResponse("fb", response);
    console.log(response);
  };

  render() {
    return (
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

const mapDispatchToProps = {
  setUserDetails: appHandleLoginResponse
};

export default connect(mapDispatchToProps)(WebLogin);
