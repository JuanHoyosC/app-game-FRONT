import React from 'react'
import './habito.css';
export const Habito = ({ titulo, descripcion, id }) => {
    return (
        <div className="habito accordion-item">
            <div className="d-flex header-btn">
                <button className="btn btn-warning text-white"><i className="fas fa-edit"></i></button>
                <button className="btn btn-success"><i className="fas fa-plus"></i></button>

                <h2 className="accordion-header d-flex" id={'flush-heading' + id}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#flush-collapse' + id} aria-expanded="false" aria-controls={'flush-collapse' + id}>
                        {titulo}
                    </button>
                </h2>
                <button className="btn btn-info text-white"><i className="fas fa-times"></i></button>
                <button className="btn btn-danger"><i className="fas fa-trash"></i></button>
            </div>
            <div id={'flush-collapse' + id} className="accordion-collapse collapse" aria-labelledby={'flush-heading' + id} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    {descripcion}
                </div>
            </div>
        </div>
    )
}
