import React, { useState } from "react";
import { Link } from "@reach/router";
import {auth} from "../firebase/firebase";



function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
		event.preventDefault();
		try{
		const {user} = await auth.createUserWithEmailAndPassword(email, password);
		console.log("Email is: ", email);
		}
		catch(error){
		setError('Error Signing up with email and password');
		}
	
		setEmail("");
		setPassword("");
	};

	const onChangeHandler = event => {
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
								onChange={event => onChangeHandler(event)}

							/>
							<label htmlFor="password">Password</label>
							<input
								type="password"
								className="inputField"
								name="userPassword"
								value={password}
								placeholder="Your Password"
								id="userPassword"
								onChange={event => onChangeHandler(event)}
							/>
						</div>
						{error !== null && (
							<div className="error-msg">							
								{error}
							</div>
						)}
						<div className="btn-pass-box">
							<button
								type="submit"
								className="btn-login"
								value="Register"
								onClick={event => {
									createUserWithEmailAndPasswordHandler(event, email, password);
								  }}
							>Register</button>
						</div>
						<h5>
							Already a Member?
							<Link to="/login">
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


export default Register;
