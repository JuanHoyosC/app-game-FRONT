import React from 'react'
import { AñadirHabito } from './AñadirHabito'
import './modalCrear.css';

export const ModalCrear = () => {
    return (
        <div className="modal modal-crear fade" id="modalCrearHabito" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body pb-0 modal-crear-habito">
                        <AñadirHabito />
                    </div>
                </div>
            </div>
        </div>
    )
}
