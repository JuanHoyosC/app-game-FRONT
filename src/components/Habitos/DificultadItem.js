import React from 'react'

export const DificultadItem = ({ dificultad, index }) => {

    const handleSeleccionar = () => {
        document.querySelectorAll('.dificultad').forEach(el => el.classList.remove('active'));
        document.querySelector(`#${dificultad}`).classList.add('active');
    }

    return (
        <div className="col-3 dificultadItem pe-0">
            <div className={`${ index === 0 ? 'dificultad active': 'dificultad' }`} id={dificultad} onClick={ handleSeleccionar }>

            </div>
            <small className="d-flex small-dificultad text-white justify-content-center" >{ dificultad  }</small>
        </div>
    )
}
