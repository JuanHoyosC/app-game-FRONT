import React, { useEffect, useState } from 'react'
import { Estado } from './Estado';
import './perfil.css';
import '../../assets/experiencia-icon.png'
import { useSelector } from 'react-redux';
import { getPicture } from '../../services/getUser';


export const Perfil = () => {
    
    const usuario = useSelector(state => state.auth);
    const [picture, setPicture] = useState('');

    useEffect(() => {
        getPicture(usuario.foto).then(url => setPicture(url));
    }, [usuario])

    return (
        <div className="perfil-estado mb-5">
            <div className="row mx-0">
                <div className="col-3 ps-0 imagen-perfil">
                    <img src={ picture } width="100%" alt="imagen" />
                </div>

                <div className="col-9 pe-0">
                    <div className="mb-3">
                        <Estado color="bg-vida" estado="Puntos de vida" estadoActual={usuario.vida} estadoMaximo={usuario.vida_actual} imgIcon="https://i.ibb.co/chR5njb/Heart.png" />
                    </div>
                    <Estado color="bg-exp" estado="Experiencia" estadoActual={usuario.experiencia} estadoMaximo={usuario.nivel*100} imgIcon="https://i.ibb.co/RbCsMgF/lightning.png"/>
                </div>
            </div>

            <div className="d-flex mt-2 text-white justify-content-between">
                <small>Nivel { usuario.nivel }.</small>
                <div className="d-flex">
                    <small className="me-4 d-flex align-items-center"><img src="https://i.ibb.co/Yh22kyR/Coin.png" className="img-coin" alt="img-coin" />{ usuario.saldo }</small>
                    <small className="d-flex align-items-center"><img src="https://i.ibb.co/GWvsX5Q/Diamond-2.png" className="img-diamond" alt="img-diamond"/>{ usuario.diamantes }</small>
                </div>
            </div>
        </div>
    )
}
