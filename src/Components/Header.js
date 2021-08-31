import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <a href="index.html">
                            <img src="/images/logo.PNG" width="150px"/>
                        </a>
                    </div>
                    <nav>
                        <ul id="Menuitems">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/product">Product</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link href="#"><img src='/images/cart.png' width="30px" height="30px"/></Link>
                    <img src="images/menu.png" className="menu_icon"/>
                </div>
            </div>
        </div>
    );
};

export default Header;