import React from 'react'
import { Perfil } from '../../Perfil/Perfil';
import './menuLateral.css';

export const MenuLateral = () => {
    return (
        <div className="offcanvas menuLateral offcanvas-end" tabIndex="-1" id="menuLateral" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header text-white">
                <h5 id="offcanvasRightLabel">Juan Carlos Hoyos Cabarique</h5>
                <i className="fas fa-bars" data-bs-dismiss="offcanvas" aria-label="Close"></i>
            </div>
            <div className="offcanvas-body">
                <Perfil />
            </div>
        </div>
    )
}