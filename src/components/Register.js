import React, { useState } from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";

import { signUpUser } from "../reduxStore/actions/authActions";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = props.signUpError;

  const signUpHandler = (event) => {
    event.preventDefault();
    props.signUpUser(email, password);

    setEmail("");
    setPassword("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <div>
      <div className="page-container">
        <div className="left-container inline-blocks">
          {props.signingUp ? (
            <div className="loginBox">
              <h5>Signing up...</h5>
            </div>
          ) : (
            <div className="loginBox">
              <h1>Register</h1>
              <div className="inputLabels">
                <label htmlFor="userEmail" className="label4input">
                  Email
                </label>
                <input
                  type="text"
                  id="userEmail"
                  name="userEmail"
                  value={email}
                  className="inputField"
                  onChange={(event) => onChangeHandler(event)}
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="inputField"
                  name="userPassword"
                  value={password}
                  id="userPassword"
                  onChange={(event) => onChangeHandler(event)}
                />
              </div>
              {error !== null && <div className="error-msg">{error.code}</div>}
              <div className="btn-pass-box">
                <button
                  type="submit"
                  className="btn-login"
                  value="Register"
                  onClick={signUpHandler}
                >
                  Register
                </button>
              </div>
              <h5>
                Already a Member?
                <Link to="/login">
                  <span className="col-darkBlue">Click Here</span>
                </Link>
              </h5>
            </div>
          )}
        </div>
        <div className="right-container inline-blocks"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signingUp: state.auth.signingUp,
    signUpError: state.auth.signUpError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (email, password) => dispatch(signUpUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
