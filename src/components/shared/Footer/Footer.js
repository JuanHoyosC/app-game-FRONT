import React from 'react'
import { NavLink } from "react-router-dom";
import './footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="lista">
                <li className="nav-item">
                    <NavLink activeClassName="active" exact className="nav-link d-flex flex-column align-items-center" to="/habitos">
                        <i className="fas fa-clipboard-list"></i>
                        <small>Habitos</small>
                    </NavLink>
                </li>


                <li className="nav-item">
                    <NavLink activeClassName="active" exact className="nav-link d-flex flex-column align-items-center" to="/agregar">
                        <i className="fas fa-plus"></i>
                        <small>Añadir</small>    
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink activeClassName="active" exact className="nav-link d-flex flex-column align-items-center" to="/misiones">
                        <i className="fas fa-thumbtack"></i>
                        <small>Misiones</small>    
                    </NavLink>
                </li>


                <li className="nav-item">
                    <NavLink activeClassName="active" exact className="nav-link d-flex flex-column align-items-center" to="/tienda">
                        <i className="fas fa-store"></i>
                        <small>Tienda</small>
                    </NavLink>
                </li>
            </div>
        </footer>
    )
}
