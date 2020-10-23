import React from 'react';

function P1() {
    return (
        <div className="right-c">
                <div className="input-c">
                    <h1>Education Details</h1>
                    <hr></hr>
                    <div className="flex-row">
                        <div className="flex-col">
                            <label> School Name (Class Xth)</label>
                            <input className="mr-2r"></input>
                            <label> School Name (Class XIIth)</label>
                            <input className="mr-2r"></input> 
                            <label> School Name (Graduation)</label>
                            <input className="mr-2r"></input> 
                        </div>
                        <div className="flex-col">
                            <label> CGPA</label>
                            <input className="sm-field mr-2r"></input>
                            <label> CGPA</label>
                            <input className="sm-field mr-2r"></input>
                            <label> CGPA</label>
                            <input className="sm-field mr-2r"></input>
                        </div>
                        <div className="flex-col">
                            <label> Passing Year</label>
                            <input className="sm-field mr-2r"></input>
                            <label> Passing Year</label>
                            <input className="sm-field mr-2r"></input>
                            <label> Passing Year</label>
                            <input className="sm-field mr-2r"></input>
                        </div>
                    </div>
                    <input type="submit" className="next-btn" value="Next"></input>

                </div>
        </div>
    )
}

export default P1;
