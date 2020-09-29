import React, {useState} from "react";
import { Link } from "@reach/router";
import {auth} from "../firebase/firebase";
 
function Login() {
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = (event, email, password) => {
		event.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
		.catch(error => {
          setError("Incorrect Email or Password");
          console.error("Error signing in with password and email", error);
        });

    };

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };
	return (
		<div>
			<div className="page-container">
				<div className="left-container inline-blocks">
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
								value = {email}
								id="userEmail"
								onChange = {(event) => onChangeHandler(event)}
							/>
							<label htmlFor="password">Password</label>
							<input
								type="password"
								className="inputField"
								name="userPassword"
								value = {password}
								placeholder="Your Password"
								id="userPassword"
								onChange = {(event) => onChangeHandler(event)}
							/>
						</div>
						{error !== null && <div className = "error-msg">{error}</div>}

						<div className="btn-pass-box">
							<button
								type="submit"
								className="btn-login"
								value="Login"
								onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}
							>Login</button>
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
				</div>
				<div className="right-container inline-blocks"></div>
			</div>
		</div>
	);
}

export default Login;
