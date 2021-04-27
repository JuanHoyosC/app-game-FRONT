import React from 'react';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

import './dragAndDrop.css';


export const DragAndDrop = ({ enviarArchivo, id_tarea, puntaje }) => {

    const { dragLeave, changeFile, dropHandler, dragOverHandler, handleReset, file } = useDragAndDrop();
    return (
        <div className="modal fade" id={`modal${id_tarea}`} tabIndex="-1" onClick={ handleReset } aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content modal-content-drag p-3">
                    <div>
                        <h4 className="text-center">Envía la misión resuelta a tu profesor</h4>
                    </div>
                    <div className="modal-body" >
                        <div id="to_upload" className="to_upload" onDrop={dropHandler} onDragLeave={dragLeave}
                            onDragOver={dragOverHandler} >
                            <div>
                                <p className="icon-drag text-white"><i className="fas fa-file-alt fa-2x"></i></p>
                                <p className="text-drag">{file.name ? file.name : 'No hay archivos'}</p>
                                <p className="upload-only">Arrastra los archivos o dale click en subir archivos <strong>(opcional)</strong></p>
                            </div>
                            <span className="upload-select">Subir archivo
                                <input type="file" id="files-md" onChange={changeFile} />
                            </span>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button className="btn btn-descarga d-flex me-2 align-items-center text-white"
                            onClick={() => { enviarArchivo(file, puntaje) }} data-bs-dismiss="modal" aria-label="Close">
                            <i className="fas fa-paper-plane me-2"></i>
                                Enviar
                        </button>
                        <button className="btn btn-cancelar" onClick={handleReset} data-bs-dismiss="modal" aria-label="Close">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
