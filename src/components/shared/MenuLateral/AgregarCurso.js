import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addClass } from '../../../services/addClass'

export const AgregarCurso = () => {


    const dispatch = useDispatch();
    const usuario = useSelector(state => state.auth);

    const [codigo, setCodigo] = useState(usuario.id_clase);

    const handleChange = ({ target }) => {
        setCodigo( target.value )
    }

    const handleSubimit = ( e ) => {
        e.preventDefault();

        addClass(usuario._id, codigo, dispatch).then()
    }

    return (
        <form>
            <input className="form-control" type="text" value={ codigo } onChange={ handleChange } placeholder="Código de la sala" aria-label=".form-control-sm example" />
            <div className="d-flex justify-content-end">
                <button className="btn text-white btn-añadir d-flex align-items-center mt-2" type="submit" onClick={ handleSubimit }>
                    <i className="fas me-1 fa-fingerprint"></i>
                     { usuario.id_clase ? 'Editar sala' : 'Unirse' }
                </button>
            </div>
        </form>
    )
}
