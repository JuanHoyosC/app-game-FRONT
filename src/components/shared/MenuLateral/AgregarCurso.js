import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addClass } from '../../../services/addClass'
import { getClasses } from '../../../services/getClasses';

export const AgregarCurso = () => {

    const [cursos, setCursos] = useState([])
    const dispatch = useDispatch();
    const usuario = useSelector(state => state.auth);

    const [codigo, setCodigo] = useState(usuario.id_clase);

    const handleChange = ({ target }) => {
        setCodigo(target.value)
    }

    useEffect(() => {
        getClasses().then(res => setCursos(res));
    }, [])


    const handleSubimit = (e) => {
        e.preventDefault();

        addClass(usuario._id, codigo, dispatch).then()
    }

    return (
        <>
            { cursos.length === 0 ?

                <p>No hay cursos registrados</p>
                :

                <form>
                    <select className="form-select select-curso" defaultValue={usuario.id_clase} onChange={handleChange}>
                        {cursos.map((curso, i) => <option key={i} value={curso._id}>
                            {curso.nombre_clase}</option>)}
                    </select>
                    <div className="d-flex justify-content-end">
                        <button className="btn text-white btn-añadir d-flex align-items-center mt-3" type="submit" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleSubimit}>
                            <i className="fas me-1 fa-fingerprint"></i>
                            Ingresar a la sala
                        </button>
                    </div>
                </form>
            }
        </>
    )
}
