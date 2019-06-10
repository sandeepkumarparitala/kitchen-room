import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
  componentDidMount() {
    const { loginChecked, loggedIn, history } = this.props;
    if (!loginChecked || !loggedIn) {
      history.push("/");
    }
  }

  render() {
    return (
      <Switch>
        {availableRoutes.map(route => (
          <Route path={route.path} component={route.component} />
        ))}
        <Route render={this.renderRedirectToLanding} />
      </Switch>
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
