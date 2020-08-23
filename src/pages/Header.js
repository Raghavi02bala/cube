import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightRounded';
function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="" />
            </Link>

            <div className="header__nav">
                <Link to="/about" className="header__link">
                    <div className="header__optionAbout">
                        <PersonIcon />
                        <span className="header__aboutText">About Us</span>
                    </div>
                </Link>

                <Link to="/contact" className="header__link">
                    <div className="header__optionLogin">
                        <ArrowRightAltRoundedIcon />
                        <span className="header__loginText">Contact</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;