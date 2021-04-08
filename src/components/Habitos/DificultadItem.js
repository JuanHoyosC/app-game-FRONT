import React from 'react'

export const DificultadItem = ({ dificultad, index, change, value }) => {

    const handleSeleccionar = () => {
        document.querySelectorAll('.dificultad').forEach(el => el.classList.remove('active'));
        document.querySelector(`#${dificultad}`).classList.add('active');
    }

    return (
        <div className="col-3 dificultadItem pe-0">
            <label className={`${ index === 0 ? 'dificultad d-block active': 'dificultad d-block' }`} id={dificultad} htmlFor={`${dificultad}Input`} onClick={ handleSeleccionar }>
                <input className="form-check-input" type="radio" 
                    name="dificultad" id={dificultad + 'Input'} value={ value } checked={ index === 0 ? true: false } onChange={ change }/>
            </label>
            <small className="d-flex small-dificultad text-white justify-content-center" >{ dificultad  }</small>
        </div>
    )
}
