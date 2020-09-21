import React, { Component } from 'react';
import "../css/master.css";

export default class AfterForgot extends Component {
    render() {
        return (
            <div className="div-container">
                <div className="img-container"></div>
                <div className="div-right-container">
                    <div className="textContainer">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/564/564619.svg"></img>
                        <p>A Password reset link has been sent your registered mail. Please click on that link to reset your password.</p>
                        <h6>Didn't Received? <span>Click Here</span></h6>
                    </div>
                    
                </div>
            </div>
        )
    }
}

