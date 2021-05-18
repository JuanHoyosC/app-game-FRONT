import React from 'react'
import { useSelector } from 'react-redux';
import { EditarHabito } from './EditarHabito';
import './modalCrear.css';

export const ModalEditar = ({index}) => {

    const habitos = useSelector(state => state.habitos)
    const {titulo, descripcion, frecuencia, dificultad, _id} = habitos[index];

    return (
        <div className="modal modal-crear fade" id={`modalEditarHabito${index}`} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body pb-0 modal-crear-habito">
                        <EditarHabito  index={ index } titulo={ titulo } descripcion={ descripcion } dificultad={ dificultad } _id={ _id } frecuencia={ frecuencia }/>
                    </div>
                </div>
            </div>
        </div>
    )
}
