import React from 'react';
import { NavLink } from 'react-router-dom'

import '../css/navbar.css'

const Navbar = () => {
    return (
    <>
        <div className="container-fluid nav_bg bg-color" >
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <NavLink className="navbar-brand" to="/">Shivansh Chadha - 19BCT0142</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink activeClassName="menu_active" exact className="nav-link underline" to="/resume1">Resume1</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink activeClassName="menu_active" exact className="nav-link underline" to="/resume2">Resume2</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink activeClassName="menu_active" exact className="nav-link underline" to="/resume3">Resume3</NavLink>
                            </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
    );
}

export default Navbar;
