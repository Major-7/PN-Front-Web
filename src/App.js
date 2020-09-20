import React from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./navbar";

function App() {
	return (
		<Router>
			<NavBar />
			<div className="App">
				<Switch>
					<Route exact path="/login" component={Login}></Route>
					<Route exact path="/register" component={Register}></Route>
					<Route path="/" component={Login}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
