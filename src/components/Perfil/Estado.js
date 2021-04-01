import React from 'react'

export const Estado = ({ color, estado, estadoActual, estadoMaximo }) => {
    return (
        <div className="row">
            <div className="col-3">

            </div>

            <div className="col-9">
                <div class="progress estado">
                    <div class={'progress-bar vida-progress ' + color} role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                <small class="d-flex text-white justify-content-between mt-1"><small>{estadoActual}/{estadoMaximo}</small><small>{estado} </small></small>
            </div>
        </div>
    )
}
