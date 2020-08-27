import React from 'react';
import './SignUp.css';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

function SignUp() {
    return (
        <div>
            <div className="App__Aside">
                <div className="PageSwitcher">
                    <Link to="/signIn" className="PageSwitcher__Item">SignIn</Link>
                    <a href="#" className="PageSwitcher__Item  PageSwitcher__Item--Active">Sign Up</a>
                </div>
                <div className="FormTitle">
                    <Link to="/signIn" className="FormTitle__Link">Sign In</Link> <span className="ortag">or</span>
                    <a href="#" className="FormTitle__Link   FormTitle__Link--Active">Sign Up</a>
                </div>
                <Route path="/SignUp">
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
                                <label htmlFor="email" className="FormField__Label">e-mail address</label>
                                <input type="email" id="email" className="FormField__Input"
                                    placeholder="Enter your Email" name="email" />
                            </div>
                            <div className="FormField">
                                <button className="FormField__Button">Sign Up</button>
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

export default SignUp;

