import React from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import UserProvider from "./providers/UserProvider";
import Login from "./components/Login";
import NavBar from "./components/navbar";
import Register from "./components/Register";
import Forgot from "./components/forgotPass";
import Reset from "./components/Reset";
import Verify from "./components/VerifyEmail";
import Verified from "./components/VerifiedEmail";
import AfterForgot from "./components/AfterForgot";
import Details from "./screens/Details";
import Review from "./components/Details-Input/Review"
import "./App.css";

import { store } from "./reduxStore/store";

function App() {
  return (
    <Provider store={store}>
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
          <Details exact path="/details-1"></Details>
          <Details exact path="/details-2"></Details>
          <Details exact path="/details-3"></Details>
          <Review exact path="/review"></Review>


        </Router>
      </UserProvider>
    </Provider>
  );
}

export default App;
