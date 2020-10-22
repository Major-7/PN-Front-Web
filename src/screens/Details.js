import React from 'react';
import "../css/details.css";
import P1 from "../components/Details-Input/P1"
function Details() {
    return (
        <div className="details-container">
            <div className="left-c">
                <h1>Welcome</h1>
                <h2>Fill the required details and you are ready to go.</h2>
                <img src="https://firebasestorage.googleapis.com/v0/b/ait-application-suite.appspot.com/o/Assets_Web%2Fundraw_Detailed_information_re_qmuc%201.png?alt=media&token=7f1997da-c54c-4567-a394-16ae5faf562e"></img>
            </div>
            <P1/>
        </div>
    )
}

export default Details;
