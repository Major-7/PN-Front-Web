import React, { Component } from 'react';
import "../css/master.css";

export default class Verified extends Component {
    render() {
        return (
            <div className="div-container">
                <div className="img-container"></div>
                <div className="div-right-container">
                    <div className="textContainer">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/992/992481.svg"></img>
                        <p>Your email has been verified. Now you can login to your main application.</p>
                        <h6>Please Login. <span>Click Here</span></h6>
                    </div>
                    
                </div>
            </div>
        )
    }
}





