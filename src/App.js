import React from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";

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
