import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";
import { Redirect, Link } from "react-router-dom";
import { LoginWrapper } from "../Login/styles";
import { requestRegister } from "../../reducers/app/actions";

class Registerform extends Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    countryCode: "+91",
    collage: "",
    submitted: false
  };

  handleInputChanges = e => {
    const value = e.target.value;
    const name = e.target.name;
    const change = {};
    change[name] = value;
    this.setState(change);
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      phoneNumber,
      countryCode,
      collage
    } = this.state;
    const { requestRegister } = this.props;
    this.setState({ submitted: true });
    requestRegister();
  };

  render() {
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      phoneNumber,
      countryCode,
      collage
    } = this.state;
    return (
      <LoginWrapper>
        <div className="wrapper animate">
          <form onSubmit={this.handleSubmit}>
            <div className="container">
              <p>
                <b>Register</b>
              </p>
              <div className="name-section">
                <div className="firstname">
                  <label className="label">First name</label>
                  <input
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                    value={firstName}
                    onChange={this.handleInputChanges}
                    required
                  />
                </div>
                <div className="last-name">
                  <label>Last name</label>
                  <input
                    name="lastName"
                    placeholder="Enter last name"
                    required
                    value={lastName}
                    onChange={this.handleInputChanges}
                    required
                  />
                </div>
              </div>
              <div className="phn-section">
                <div className="number">
                  <label>Number</label>
                  <div className="number-inputs">
                    <input
                      style={{ width: "15%", marginRight: "10px" }}
                      name="countryCode"
                      placeholder="+91"
                      required
                      value={countryCode}
                      onChange={this.handleInputChanges}
                      required
                    />
                    <input
                      name="phoneNumber"
                      placeholder="Enter phone number"
                      required
                      value={phoneNumber}
                      onChange={this.handleInputChanges}
                      required
                    />
                  </div>
                </div>
              </div>
              <label>collage</label>
              <input
                placeholder="Enter collage name"
                name="collage"
                value={collage}
                onChange={this.handleInputChanges}
                required
              />
              <label>Email</label>
              <input
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={this.handleInputChanges}
                required
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={this.handleInputChanges}
                required
              />

              <label>Repeat Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Repeat Password"
                value={confirmPassword}
                onChange={this.handleInputChanges}
                required
              />
              <hr />
              <p>
                By creating an account you agree to our{" "}
                <a href="#">Terms & Privacy</a>.
              </p>

              <button name="submit" className="registerbtn">
                Register
              </button>

              <div className="signin">
                <p>
                  Already have an account? <Link to="/login">Sign in</Link>.
                </p>
              </div>
            </div>
          </form>
        </div>
      </LoginWrapper>
    );
  }
}

const mapStatetoProps = state => {};

const mapDispatchToProps = {
  requestRegister
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Registerform);
