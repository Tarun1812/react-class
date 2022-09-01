import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
           <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a class="navbar-brand" href="#">Zomato React App</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li class="active"><Link href="#">Home</Link></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><Link href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link href="#"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
 export default Header;