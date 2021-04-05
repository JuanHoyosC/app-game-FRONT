import React from 'react'
import { Estado } from './Estado';
import './perfil.css';
import '../../assets/experiencia-icon.png'

export const Perfil = () => {
    return (
        <div className="perfil-estado mb-5">
            <div className="row mx-0">
                <div className="col-3 ps-0 imagen-perfil">
                    <img src="https://www.shareicon.net/data/512x512/2016/08/05/807299_player_512x512.png" width="100%" alt="imagen" />
                </div>

                <div className="col-9 pe-0">
                    <div className="mb-3">
                        <Estado color="bg-vida" estado="Puntos de vida" estadoActual={10} estadoMaximo={50} imgIcon="https://i.ibb.co/chR5njb/Heart.png" />
                    </div>
                    <Estado color="bg-exp" estado="Experiencia" estadoActual={40} estadoMaximo={50} imgIcon="https://i.ibb.co/Rb7g1GR/Lightning.png"/>
                </div>
            </div>

            <div className="d-flex mt-2 text-white justify-content-between">
                <small>Nivel 4.</small>
                <div className="d-flex">
                    <small className="me-4 d-flex align-items-center"><img src="https://i.ibb.co/Yh22kyR/Coin.png" className="img-coin" alt="img-coin" /> 39.7</small>
                    <small className="d-flex align-items-center"><img src="https://i.ibb.co/GWvsX5Q/Diamond-2.png" className="img-diamond" alt="img-diamond"/> 10</small>
                </div>
            </div>
        </div>
    )
}
