import React from "react";
import "./Header.css";
const logo = require('./images/frog.png');


function Header() {
    return (
        <div className="header">
            <img src={logo} alt="frogpic" className="logo"/>
            <h1>Welcome to CareerLeap!</h1 >
        </div>
    )
}

export default Header;