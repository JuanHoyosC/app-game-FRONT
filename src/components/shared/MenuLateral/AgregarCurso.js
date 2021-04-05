import React, { useState } from 'react'

export const AgregarCurso = () => {

    const [codigo, setCodigo] = useState('')

    const handleChange = ({ target }) => {
        setCodigo( target.value )
    }

    const handleSubimit = ( e ) => {
        e.preventDefault();
        console.log( codigo )
    }

    return (
        <form>
            <input className="form-control" type="text" value={ codigo } onChange={ handleChange } placeholder="Código del curso" aria-label=".form-control-sm example" />
            <div className="d-flex justify-content-end">
                <button className="btn text-white btn-añadir d-flex align-items-center mt-2" type="submit" onClick={ handleSubimit }><i className="fas me-1 fa-fingerprint"></i> Unirse</button>
            </div>
        </form>
    )
}
