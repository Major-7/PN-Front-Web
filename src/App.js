import React from "react";
import "./App.css";
import Login from "../src/Login";
import Register from "../src/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../src/navbar";

function App() {
	return (
		<Router>
			<NavBar />
			<div className="App">
				<Route exact path="/login" component={Login}></Route>
				<Route exact path="/register" component={Register}></Route>
			</div>
		</Router>
	);
}

export default App;
