import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  userSelectLoginChecked,
  userSelectIsLoggedIn
} from "../../Selectors/app";
import { availableRoutes } from "./constants";
export const Welcome = () => {
  return <div>Welcom</div>;
};
class ProtectedRoutes extends Component {
  renderRedirectToLanding = () => {
    return <Redirect to="/about" />;
  };
  render() {
    return (
      <div>
        <h1>hey</h1>
        <Link to="/about">about</Link>
        <Link to="/recipies">recipies</Link>
        <Link to="/Kitchen-designs">Kitchen-designs</Link>
        <Switch>
          {availableRoutes.map(route => (
            <Route path={route.path} component={route.component} />
          ))}
          <Route render={this.renderRedirectToLanding} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginChecked: userSelectLoginChecked(state),
  loggedIn: userSelectIsLoggedIn(state)
});

export default connect(
  mapStateToProps,
  null
)(ProtectedRoutes);