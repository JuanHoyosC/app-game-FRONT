import React from 'react'
import { useHabitos } from '../../hooks/useHabitos';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/es';
import './habito.css';
import { ModalEditar } from './ModalEditar';



export const Habito = ({ habito, index }) => {

    const { titulo, descripcion, proxima_fecha, dificultad, _id } = habito;
    //Obtiene los datos del usuario
    const dispatch = useDispatch();
    const usuario = useSelector(state => state.auth)

    const { handleDelete, handleSuccess, handleDown } = useHabitos({}, _id, dispatch);

    return (
        <div className="habito accordion-item">
            <div className="d-flex header-btn">
                <button className="btn" onClick={() => handleSuccess(usuario, habito)}><i className="fas fa-plus"></i></button>
                <h2 className="accordion-header d-flex" id={'flush-heading' + _id}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#flush-collapse' + _id} aria-expanded="false" aria-controls={'flush-collapse' + _id}>
                        <span>{titulo}</span>
                    </button>
                </h2>
                <button className="btn" onClick={() => handleDown(usuario, habito, dispatch)}><i className="fas fa-sad-tear"></i></button>
            </div>
            <div id={'flush-collapse' + _id} className="accordion-collapse collapse" aria-labelledby={'flush-heading' + _id} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <div>
                        <div className="d-flex justify-content-between mb-3">
                            <small className="habito-fecha">{moment(proxima_fecha).format('MMMM Do YYYY')}</small>
                            <small className="habito-dificultad">{dificultad}</small>
                        </div>
                        <span>{descripcion}</span>
                    </div>
                    <div className="d-flex header-btn justify-content-between">
                        <button className="btn btn-done"  data-bs-toggle="modal" data-bs-target={`#modalEditarHabito${index}`}><i className="fas fa-edit"></i></button>
                        <button className="btn btn-eliminar" onClick={handleDelete}><i className="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
            <ModalEditar index={index} />
        </div>
    )
}
