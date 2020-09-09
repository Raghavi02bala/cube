import React from 'react'
import "./Header.css";
import InfoIcon from '@material-ui/icons/InfoRounded';
import ContactIcon from '@material-ui/icons/ImportContactsRounded';
import {Link} from "react-scroll";

function Header() {
    return (
        <nav className="header">
            <Link to="main"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            >               
                <img className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="" />
            </Link>
            <div className="header__nav">
                <Link to="about" className="header__link link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                >
                    <div className="header__option about">
                        <InfoIcon className="header__aboutIcon" />
                        <span className="header__optionLineOne header__link" >About</span>
                    </div>
                </Link>
                <Link to="contact"contact className="header__link link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                >
                    <div className="header__option">
                        <ContactIcon className="header__contactIcon" />
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
