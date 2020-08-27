import React from 'react';
import './SignUp.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function SignIn() {
    return (
        <div>
            <div className="App__Aside">
                <div className="PageSwitcher">
                    <a href="#" className="PageSwitcher__Item  PageSwitcher__Item--Active">SignIn</a>
                    <Link to="/signUp" className="PageSwitcher__Item ">Sign Up</Link>
                </div>
                <div className="FormTitle">
                    <a className="FormTitle__Link  FormTitle__Link--Active">Sign In</a> <span className="ortag">or</span>
                    <Link to="/signUp" className="FormTitle__Link">Sign Up</Link>
                </div>
                <Route path="/SignIn">
                    <div className="FormCenter">
                        <from className="FormFields" >
                            <div className="FormField">
                                <label htmlFor="name" className="FormField__Label">Full Name</label>
                                <input type="text" id="name" className="FormField__Input"
                                    placeholder="Enter your full name" name="name" />
                            </div>
                            <div className="FormField">
                                <label htmlFor="password" className="FormField__Label">Password</label>
                                <input type="password" id="password" className="FormField__Input"
                                    placeholder="Enter your password" name="password" />
                            </div>
                            <div className="FormField">
                                <button className="FormField__Button">Sign In</button>
                            </div>
                        </from>
                    </div>
                </Route>
            </div>
            <div className="App__Form">
            </div>
        </div>
    );
}

export default SignIn;

