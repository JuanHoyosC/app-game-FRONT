import React from 'react'
import { NavLink } from "react-router-dom";
import { MenuLateral } from '../MenuLateral/MenuLateral';
import './navBar.css';

export const NavBar = () => {
    return (
        <nav className="navbar nav-game">
            <div className="container justify-content-start">
                <NavLink exact className="navbar-brand" to="/home">GameApp</NavLink>
                <div className="d-flex" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-row text-white">
                        <li className="nav-item">
                            <NavLink activeClassName="active" exact className="nav-link" to="/habitos">Habitos</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink activeClassName="active" exact className="nav-link" to="/misiones">Misiones</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink activeClassName="active" exact className="nav-link" to="/tienda">Tienda</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="icon-navbar text-white justify-self-end">
                    <i className="fas fa-bars" data-bs-toggle="offcanvas" data-bs-target="#menuLateral" aria-controls="offcanvasRight"></i>
                </div>
            </div>
            <MenuLateral />
        </nav>
    )
}
