import React from 'react'
import { AccordeonItem } from './AccordeonItem'

export const Mision = ({ misiones = [], misionIndex }) => {
    return (
        <>
            {
                misiones.length === 0
                    ?
                    <div className="d-flex no-mision flex-column align-items-center">
                        <i className="fas fa-gamepad fa-2x mb-2"></i>
                        <h5 className="text-center">No tienes misiones en esta etapa</h5>
                    </div>
                    :
                    <div className="accordion accordion-flush" id={`accordionFlushExample${misionIndex}`}>
                        {misiones.map(({ titulo, comentario, estudiantes, puntaje, path_tarea, nombre_archivo, fecha_fin, _id }, index) => <AccordeonItem titulo={titulo}
                            descripcion={comentario} estudiantes={ estudiantes } puntaje={ puntaje } aceptar={misionIndex === 0} file={nombre_archivo} id_tarea={_id} fecha={fecha_fin} path={path_tarea} index={misionIndex} key={index} />)}
                    </div>
            }
        </>
    )
}
