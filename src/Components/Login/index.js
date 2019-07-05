import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./index.css";
import { LoginWrapper } from "./styles";
import { requestLogin } from "../../reducers/app/actions";
import {
  loginSetChecked,
  appSetUserToken
} from "../../reducers/app/actions/actionCreators";
import {
  userSelectLoginChecked,
  userSelectIsLoggedIn
} from "../../Selectors/app";
import UserIcon from "../../assets/images/man.svg";

class Login extends Component {
  state = {
    username: "",
    password: "",
    submit: false,
    validPassword: true,
    validUsername: true
  };

  handleUsernameChange = e => {
    e.preventDefault();
    const username = e.target.value.trim();
    this.setState({ username });
  };

  handlePasswordChange = e => {
    e.preventDefault();
    const password = e.target.value.trim();
    this.setState({ password });
  };

  onClickSubmit = () => {
    const { username, password } = this.state;
    const { requestLogin } = this.props;
    this.setState({ submitted: true });
    if (username && password) requestLogin(username, password);
  };

  render() {
    const { isLoggedIn } = this.props;
    const { submitted, username, password } = this.state;
    return isLoggedIn ? (
      <Redirect to="/" />
    ) : (
      <LoginWrapper>
        <div className="wrapper">
          <div className="modal-content animate">
            <div className="imgcontainer">
              <img src={UserIcon} alt="Avatar" className="avatar" />
            </div>
            <div className="login-container">
              <label>
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                value={username}
                onChange={this.handleUsernameChange}
                required
              />
              {submitted && !username && (
                <p
                  className="help-block"
                  // style={{ marginBottom: "20px", color: "red" }}
                >
                  Username is required
                </p>
              )}
              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                name="psw"
                onChange={this.handlePasswordChange}
                required
              />
              {submitted && !password && (
                <p className="help-block">Username is required</p>
              )}
              <button onClick={this.onClickSubmit}>Login</button>
            </div>

            <div
              style={{
                backgroundColor: "#f1f1f1",
                height: "50px",
                padding: "10px"
              }}
            >
              <span className="psw">
                new user <Link to="/register">Register</Link>
              </span>
            </div>
          </div>
        </div>
      </LoginWrapper>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: userSelectIsLoggedIn(state),
  loginChecked: userSelectLoginChecked(state)
});

const mapDispatchToProps = {
  loginSetChecked,
  appSetUserToken,
  requestLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
