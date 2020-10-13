import React, { useState } from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { signInUser } from "../reduxStore/actions/authActions";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = props.signInError;

  const signInHandler = (event) => {
    event.preventDefault();
    props.signInUser(email, password);
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
          {props.signingIn ? (
            <div className="loginBox">
              <h5>Logging In...</h5>
            </div>
          ) : (
            <div className="loginBox">
              <h1>LOGIN</h1>
              <div className="inputLabels">
                <label htmlFor="userEmail" className="label4input">
                  Email
                </label>
                <input
                  type="text"
                  name="userEmail"
                  className="inputField"
                  value={email}
                  id="userEmail"
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
                  value="Login"
                  onClick={signInHandler}
                >
                  Login
                </button>
                <Link to="/forgotPassword">
                  <span className="left-align">Forgot Password?</span>
                </Link>
              </div>
              <h5>
                Create an account?
                <Link to="/register">
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
    signingIn: state.auth.signingIn,
    signInError: state.auth.signInError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInUser: (email, password) => dispatch(signInUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
