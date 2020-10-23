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
import Education from "./screens/Education";
import Socials from "./screens/Socials";

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
          <Education exact path="/details-2"></Education>
          <Socials exact path="/details-3"></Socials>
          <Review exact path="/review"></Review>

        </Router>
      </UserProvider>
    </Provider>
  );
}

export default App;
