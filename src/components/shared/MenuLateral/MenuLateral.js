import React from 'react'
import { Perfil } from '../../Perfil/Perfil';
import { AgregarCurso } from './AgregarCurso';
import './menuLateral.css';
import { BtnClasificatoria } from './BtnClasificatoria';

export const MenuLateral = () => {
    return (
        <div className="offcanvas menuLateral offcanvas-end" tabIndex="-1" id="menuLateral" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header text-white">
                <h5 id="offcanvasRightLabel">Juan Carlos Hoyos</h5>
                <i className="fas fa-bars" data-bs-dismiss="offcanvas" aria-label="Close"></i>
            </div>
            <div className="offcanvas-body d-flex flex-column justify-content-between">
                <div>
                    <Perfil />
                    <AgregarCurso />
                    <BtnClasificatoria />
                </div>
                <button className="off btn"><i className="fas fa-power-off"></i></button>
            </div>
        </div>
    )
}
