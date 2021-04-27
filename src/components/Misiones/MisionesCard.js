import React, { useState } from 'react'
import { Mision } from './Mision'

export const MisionesCard = ({ tituloMision, misiones, index }) => {

    const [collapsed, setCollapsed] = useState(true);

    const handleClick = () => {
        setCollapsed( !collapsed );
    }

    return (
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3 misiones">
            <div className="card">
                <div className="card-header text-center">
                    {tituloMision}
                </div>
                <div className="card-body">
                    <div className="accordion accordion-flush" id={`accordion${index}`}>
                        <div className="accordion-item">

                            <h2 className="accordion-header" id={`flush-headingOne${index}`} onClick={ handleClick }>
                                <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${index}`} aria-expanded="false" aria-controls={`flush-collapseOne${index}`}>
                                    <i className="fas fa-hand-point-right me-2"></i> Click para { collapsed ? 'ver' : 'ocultar' } las misiones
                                </button>
                            </h2>

                            <div id={`flush-collapseOne${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-headingOne${index}`} data-bs-parent={`#accordion${index}`}>
                                <div className="accordion-body p-0">
                                    <Mision misiones={misiones} misionIndex={index} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
