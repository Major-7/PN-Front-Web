import React from 'react';
import './App.css';
import Login from '../src/Login';
import Register from '../src/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from '../src/navbar';


function App() {
  return (
    <Router>
      <NavBar/>
      <div className="App">

      <Route path="/login" exact component={Login}></Route>
      <Route path="/register" exact component={Register}></Route>

      </div>
    </Router>
  );
}

export default App;
