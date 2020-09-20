import React from 'react'
import {Link} from "react-router-dom";

function Login() {
    return (
        <div>
            <div className="page-container">
                <div className="left-container inline-blocks">
                    <div className="loginBox">
                        <h1>LOGIN</h1>
                        <div className="inputLabels">
                            <label for="email" className="label4input">Email</label>
                            <input type="text" id="email" className="inputField"/>                        
                            <label for="password">Password</label>
                            <input type="password" id="password" className="inputField" />
                        </div>
                        <div className="btn-pass-box">
                            <input type="submit" className="btn-login" value="Login"></input>
                            <span className="left-align">Forgot Password?</span>
                        </div>
                        <h5>
                            Create an account? 
                            <Link to="/register">
                                <span className="col-darkBlue">
                                    Click Here
                                </span>
                            </Link>
                        </h5>
                    </div>
                </div>
                <div className="right-container inline-blocks">
                </div>
            </div>
        </div>
    )
}

export default Login;
