import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Redirector } from "react-router-redirect";
import "./App.css";
import Login from "./Components/Login";
import Routes from "./Components/Routes";
import {
  loginSetChecked,
  appSetUserToken,
  appSetInitializing
} from "./actions/app/actionCreators";
import { connect } from "react-redux";
// import AuthGateway from "./Components/Auth";

class App extends Component {
  componentDidMount() {
    const { appSetInitializing, appCheckisLoggedIn } = this.props;
    appSetInitializing(true);
    appCheckisLoggedIn();
  }
  render() {
    return (
      <BrowserRouter>
        <Redirector />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/app" exact component={Routes} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export const mapStateToProps = state => ({
  appSetInitializing: appSetInitializing(state)
});
export const mapDispatchToProps = {
  loginSetChecked,
  appSetUserToken
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
