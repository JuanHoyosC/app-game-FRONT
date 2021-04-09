import React from 'react'
import { useHabitos } from '../../hooks/useHabitos';
import './habito.css';
export const Habito = ({ titulo, descripcion, id, dispatch }) => {

    console.log(id)

    const [ , handleDelete ] = useHabitos({} , id, dispatch );

    return (
        <div className="habito accordion-item">
            <div className="d-flex header-btn">
                <button className="btn"><i className="fas fa-plus"></i></button>
                <h2 className="accordion-header d-flex" id={'flush-heading' + id}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#flush-collapse' + id} aria-expanded="false" aria-controls={'flush-collapse' + id}>
                        {titulo}
                    </button>
                </h2>
                <button className="btn"><i className="fas fa-sad-tear"></i></button>
            </div>
            <div id={'flush-collapse' + id} className="accordion-collapse collapse" aria-labelledby={'flush-heading' + id} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    {descripcion}
                    <div className="d-flex header-btn justify-content-between">
                        <button className="btn"><i className="fas fa-edit"></i></button>
                        <button className="btn" onClick={ handleDelete }><i className="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
