import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import InfoIcon from '@material-ui/icons/InfoRounded';
import LoginIcon from '@material-ui/icons/ExitToAppRounded';
import ContactIcon from '@material-ui/icons/ImportContactsRounded'
function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="" />
            </Link>
            <div className="header__nav">
                <Link to="/login" className="header__link link">
                    <div className="header__option">
                        <LoginIcon className="header__loginIcon"/>
                        <span className="header__optionLineOne">Login</span>
                    </div>
                </Link>
                <Link to="/about" className="header__link link">
                    <div className="header__option">
                        <InfoIcon className="header__aboutIcon"/>
                        <span className="header__optionLineOne header__link" >About</span>
                    </div>
                </Link>
                <Link to="/" className="header__link link">
                    <div className="header__option">
                        <ContactIcon className="header__contactIcon"/>
                        <span className="header__optionLineOne">Contact</span>
                    </div>  
                </Link>
                <Link to="/checkout" className="header__link">
                </Link>
            </div>
        </nav>
    );
}

export default Header;
