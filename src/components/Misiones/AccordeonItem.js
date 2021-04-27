import React from 'react'
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
import { useMisiones } from '../../hooks/useMisiones';
import { DragAndDrop } from './DragAndDrop';
import './misiones.css';
import 'moment/locale/es';


export const AccordeonItem = ({ titulo, descripcion, index, path, puntaje, fecha, id_tarea, estudiantes, file }) => {

    let classIcon = '';
    if (index === 0) classIcon = 'fa-play';
    if (index === 1) classIcon = 'fa-clock';
    if (index === 2) classIcon = 'fa-check';
    if (index === 3) classIcon = 'fa-dizzy';

    const usuario = useSelector(state => state.auth);
    const file_upload = estudiantes.find(e => e._id === usuario._id);

    const dispatch = useDispatch();

    const [handleProceso, descargarArchivo, enviarArchivo] = useMisiones(usuario, id_tarea, dispatch);

    return (
        <div className="accordion-item">

            <h2 className="accordion-header" id={`flush-heading${id_tarea}`}>
                <button className="accordion-button collapsed icono-mision" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${id_tarea}`} aria-expanded="false" aria-controls={`flush-collapse${id_tarea}`}>
                    <i className={`fas me-3 ${classIcon}`} onClick={() => { if (index !== 0) return; handleProceso() }}></i> {titulo}
                </button>
            </h2>

            <div id={`flush-collapse${id_tarea}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${id_tarea}`} data-bs-parent={`#accordionFlushExample${index}`}>
                <div className="accordion-body">
                    <small className="d-flex align-items-center justify-content-end mb-3"><i className="fas fa-calendar-day me-2"></i>{moment(fecha).format('MMMM Do YYYY')}</small>
                    <p className="descripcion-mision mb-3">{descripcion}</p>
                    <div className="d-flex justify-content-center">
                        {path && index !== 2 &&
                            <button className="btn btn-descarga me-3 d-flex align-items-center text-white" onClick={() => {descargarArchivo(file).then() }}>
                                <i className="fas fa-download me-2"></i>
                                Descargar
                            </button>
                        }


                        {
                            index === 1 &&
                            <div>
                                <button className="btn btn-descarga d-flex align-items-center text-white" data-bs-toggle="modal" data-bs-target={`#modal${id_tarea}`} >
                                    <i className="fas fa-paper-plane me-2"></i>
                                    Enviar
                                </button>
                                <DragAndDrop enviarArchivo={enviarArchivo} puntaje={puntaje} id_tarea={id_tarea} />
                            </div>
                        }

                        {
                            file_upload?.path_tarea &&
                            <button className="btn btn-descarga me-3 d-flex align-items-center text-white" onClick={() => { descargarArchivo(file).then() }}>
                                <i className="fas fa-download me-2"></i>
                                Descargar archivo subido
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>


    )
}
