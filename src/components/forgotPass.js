import React, { Component } from 'react';
import "../css/master.css"
export default class Forgot extends Component {
    render() {
        return (
            <div className="div-container">
                <div className="img-container"></div>
                <div className="div-right-container">
                    <h1>Forgot Password</h1>
                    <form>
                        <label className="labelEmail" htmlFor="emailField">Email Address</label>
                        <input type="email" id="emailField" className="inp-field"></input>
                        <input type="submit" className="btn-field" value="SUBMIT"/>
                    </form>
                </div>
            </div>
        )
    }
}

