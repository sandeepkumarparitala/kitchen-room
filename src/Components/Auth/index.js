import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  appSetUserToken,
  loginSetChecked
} from "../../reducers/app/actions/actionCreators";
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
    const {
      loggedIn,
      loginChecked,
      component: Component,
      ...rest
    } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
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
