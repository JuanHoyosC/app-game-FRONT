import React from 'react'
import { Mision } from './Mision'

export const MisionesCard = ({ tituloMision, misiones, index }) => {
    return (
        <div className="col-12 col-sm-6 col-md-3 mb-3 misiones">
            <div className="card">
                <div className="card-header text-center">
                    { tituloMision }
                </div>
                <div className="card-body">
                    <Mision misiones={ misiones } misionIndex={ index }/>
                </div>
            </div>
        </div>
    )
}
