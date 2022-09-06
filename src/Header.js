import React from "react";
import {Link} from 'react-router-dom'
import './header.css';

const Header = () => {
    return (
        <div className="header">
           <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">Zomato React App</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">Home</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link href="#"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
 export default Header;