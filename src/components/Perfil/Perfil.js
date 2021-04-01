import React from 'react'
import { Estado } from './Estado';
import './perfil.css';

export const Perfil = () => {
    return (
        <div className="perfil-estado mb-5">
            <div className="row mx-0">
                <div className="col-3 imagen-perfil">
                    <img src="https://www.shareicon.net/data/512x512/2016/08/05/807299_player_512x512.png" width="100%" alt="imagen" />
                </div>

                <div className="col-9">
                    <div className="mb-3">
                        <Estado color="bg-danger" estado="Puntos de vida" estadoActual={10} estadoMaximo={50} />
                    </div>
                    <Estado color="bg-warning" estado="Experiencia" estadoActual={40} estadoMaximo={50} />
                </div>
            </div>

            <div class="d-flex mt-2 px-2 text-white justify-content-between">
                <small>Nivel 4.</small>
                <div className="d-flex">
                    <small className="me-4 d-flex align-items-center"><i class="fas me-1 fa-gem"></i> 39.7</small>
                    <small className="d-flex align-items-center"><i class="fas me-1 fa-gem"></i> 10</small>
                </div>
            </div>
        </div>
    )
}
