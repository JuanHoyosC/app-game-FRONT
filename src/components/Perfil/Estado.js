import React from 'react'

export const Estado = ({ color, estado, estadoActual, estadoMaximo, imgIcon }) => {
    return (
        <div className="row mx-0">
            <div className="col-2 d-flex align-items-start px-0 imagen-icon">
                <img src={ imgIcon } alt="icon" />
            </div>

            <div className="col-10 px-0">
                <div className="progress estado">
                    <div className={'progress-bar vida-progress ' + color} role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                <small className="d-flex text-white justify-content-between mt-1"><small>{estadoActual}/{estadoMaximo}</small><small>{estado} </small></small>
            </div>
        </div>
    )
}
