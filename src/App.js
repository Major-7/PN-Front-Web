import React from "react";
import { Router } from "@reach/router";
import UserProvider from "./providers/UserProvider";
import Login from "./components/Login";
import NavBar from "./components/navbar";
import Register from "./components/Register";
import Forgot from "./components/forgotPass";
import Reset from "./components/Reset";
import Verify from "./components/VerifyEmail";
import Verified from "./components/VerifiedEmail";
import AfterForgot from "./components/AfterForgot"
import "./App.css";

function App() {
	return (
		<UserProvider>
			<NavBar />
			<Router>
				<Login path="/" />
				<Login path="/login" />
				<Register path="/register"></Register>
				<Forgot exact path="/forgotPassword"></Forgot>
				<AfterForgot exact path="/AfterForgot"></AfterForgot>
				<Reset exact path="/resetPassword"></Reset>
				<Verify exact path="/verifyEmail"></Verify>
				<Verified exact path="/verifiedEmail"></Verified>
			</Router>
		</UserProvider>

	);
}

export default App;

