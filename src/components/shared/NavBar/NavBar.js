import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { MenuLateral } from '../MenuLateral/MenuLateral';
import './navBar.css';

export const NavBar = () => {
    return (
        <nav className="navbar nav-game">
            <div className="container align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <Link className="navbar-brand" to="/">GameApp</Link>
                    <div className="d-flex" id="navbarNav">
                        <ul className="navbar-nav d-flex flex-row text-white">
                            <li className="nav-item" activeclassname="active" >
                                <NavLink exact className="nav-link" to="/">Habitos</NavLink>
                            </li>

                            <li className="nav-item" activeclassname="active" >
                                <NavLink exact className="nav-link" to="/misiones">Misiones</NavLink>
                            </li>

                            <li className="nav-item" activeclassname="active" >
                                <NavLink exact className="nav-link d-flex align-items-center" to="/tienda">Tienda</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="icon-navbar d-flex align-items-center text-white justify-self-end">
                    <i className="fas fa-bars" data-bs-toggle="offcanvas" data-bs-target="#menuLateral" aria-controls="offcanvasRight"></i>
                </div>
            </div>
            <MenuLateral />
        </nav>
    )
}
