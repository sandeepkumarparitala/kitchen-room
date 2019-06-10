import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  appSetUserToken,
  loginSetChecked
} from "../../actions/app/actionCreators";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import {
  userSelectIsLoggedIn,
  userSelectLoginChecked
} from "../../Selectors/app";

class AuthGateway extends Component {
  componentDidMount() {
    this.handleCheckLogin();
  }

  handleCheckLogin = () => {
    const { loginSetChecked, appSetUserToken } = this.props;
    const token = Cookies.get("accessToken");
    if (token) {
      appSetUserToken(token);
    }
    loginSetChecked(true);
  };

  render() {
    const { loggedIn, loginChecked } = this.props;
    if (!loginChecked) return null;
    if (loginChecked && loggedIn) {
      return <Redirect to="/welcome" />;
    }
    return <Redirect to="/login" />;
  }
}

const mapStateToProps = state => ({
  loginChecked: userSelectLoginChecked(state),
  loggedIn: userSelectIsLoggedIn(state)
});

const mapDispatchToProps = {
  loginSetChecked,
  appSetUserToken
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthGateway);
