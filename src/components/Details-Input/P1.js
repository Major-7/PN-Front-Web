import React from 'react'

function P1() {
    return (
        <div className="right-c">
                <div className="input-c">
                    <h1>PERSONAL Details</h1>
                    <hr></hr>
                    <div className="flex-row">
                        <div className="flex-col">
                            <label>Full Name</label>
                            <input></input>
                            <label>Mobile Number</label>
                            <input type="number"></input>
                            <label>Gender</label>
                            <input></input>
                            <label>Address Line 1</label>
                            <input></input>
                            <label>Address Line 2</label>
                            <input></input>
                            <label>PIN CODE</label>
                            <input type="number"></input>
                        </div>
                        <div className="flex-col">
                            <label>Primary Email</label>
                            <input type="email"></input>
                            <label>Secondary Email</label>
                            <input type="email"></input>
                            <label>DOB</label>
                            <input></input>
                            <label>State</label>
                            <input></input>
                            <label>City</label>
                            <input></input>
                            <input type="submit" className="next-btn" value="Next"></input>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default P1;
