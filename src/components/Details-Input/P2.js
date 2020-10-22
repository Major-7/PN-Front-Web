import React from 'react';

function P1() {
    return (
        <div className="right-c">
                <div className="input-c">
                    <h1>PERSONAL Details</h1>
                    <hr></hr>
                    <div className="flex-row">
                        <div className="flex-col">
                            <label>LikedIn Profile</label>
                            <input type="url"></input>
                            <label>Github Profile</label>
                            <input type="url"></input>
                            <label>Skype ID</label>
                            <input type="url"></input>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default P1;
