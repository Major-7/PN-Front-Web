import React, { Component } from 'react';
import "../css/master.css";

export default class Verify extends Component {
    render() {
        return (
            <div className="div-container">
                <div className="img-container"></div>
                <div className="div-right-container">
                    <div className="textContainer">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/2905/2905068.svg"></img>
                        <p>A confirmation Mail has been sent to your registered mail. Please click on that to verify your email.</p>
                        <h6>Didn't Received? <span>Click Here</span></h6>
                    </div>
                    
                </div>
            </div>
        )
    }
}

