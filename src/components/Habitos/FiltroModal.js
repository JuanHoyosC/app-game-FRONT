import './filtro.css';

import React from 'react'
import { FiltroItem } from './FiltroItem';

export const FiltroModal = () => {

    const filtros = ['Fecha', 'Dificultad', 'Día de hoy'];
    return (
        <div className="modal modal-filtro fade" id="modalFiltro" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <form className="modal-body pb-0 modal-filtro-body">
                        <h6 className="text-center text-white mb-3">Filtro</h6>
                        <div className="d-flex mb-3 justify-content-center">
                            { filtros.map((filtro, index) => <FiltroItem index={ index } key={ index } value={ filtro } />) }
                        </div>
                        <hr />
                        <div className="mb-3">
                            <input type="text" className="form-control titulo-filter" placeholder="Titulo" />
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <button className="btn reiniciar-btn">Reiniciar</button>
                            <button className="btn hecho-btn">Hecho</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
