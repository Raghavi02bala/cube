import React from 'react';
import './s_header.css';
import {Link} from "react-router-dom";
import LoginIcon from "@material-ui/icons/ExitToAppRounded";



function s_header() {
    return (
        <nav className="header">
            <Link to="/">               
                <img className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="" />
            </Link>
            <Link to="/login" className="header_link">
            <LoginIcon className="header__loginicon"/>
            <span className="header_link">Login</span>
            </Link>
        </nav>
    );
}

export default s_header;
