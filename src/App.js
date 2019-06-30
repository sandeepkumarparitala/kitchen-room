import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Routes from "./Components/Routes";
import RegisterForm from "./Components/Register";
import {
  loginSetChecked,
  appSetUserToken,
  appSetInitializing
} from "./reducers/app/actions/actionCreators";
import { connect } from "react-redux";
import { appCheckIsInitializing } from "./Selectors/app";
import { appCheckisLoggedIn } from "./reducers/app/actions/index";
import AuthGateway from "./Components/Auth";

class App extends Component {
  componentDidMount() {
    const { appSetInitializing, appCheckisLoggedIn } = this.props;
    appSetInitializing(true);
    appCheckisLoggedIn();
  }
  render() {
    const { isInitializing } = this.props;
    return isInitializing ? (
      <div>loading...</div>
    ) : (
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={Login} />
          <AuthGateway path="/" component={Routes} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export const mapStateToProps = state => ({
  isInitializing: appCheckIsInitializing(state)
});

export const mapDispatchToProps = {
  loginSetChecked,
  appSetUserToken,
  appSetInitializing,
  appCheckisLoggedIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
