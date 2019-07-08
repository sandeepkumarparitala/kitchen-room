import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  userSelectLoginChecked,
  userSelectIsLoggedIn
} from "../../Selectors/app";
import { availableRoutes } from "./availableRoutes";
import Dashboard from "../Dashboard";
export const Welcome = () => {
  return <div>Welcom</div>;
};
class ProtectedRoutes extends Component {
  renderRedirectToLanding = () => {
    return <Redirect to="/jobs/dashboard" />;
  };
  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <Switch>
            <Route path={'/jobs/dashboard'} component={Dashboard} />
            <Route path={'/jobs/recomended-jobs'} component={Dashboard} />
            <Route path={'/jobs/interviews-attended'} component={Dashboard}/>
            <Route path={'/jobs/companies-shortlisted'} component={Dashboard}/>
            <Route path={'/jobs/comapnies-placed'} component={Dashboard}/>
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
