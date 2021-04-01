import React from 'react'
import './misiones.css';

export const AccordeonItem = ({titulo, descripcion, index}) => {

    let classIcon = '';
    if(index[1] === '0') classIcon = 'fa-play';
    if(index[1] === '1') classIcon = 'fa-clock';
    if(index[1] === '2') classIcon = 'fa-check';
    if(index[1] === '3') classIcon = 'fa-dizzy';

    return (
        <div className="accordion-item">
            <h2 className="accordion-header " id={'flush-heading'+index}>
                <button className="accordion-button collapsed text-center" type="button" data-bs-toggle="collapse" data-bs-target={'#'+'flush-collapse'+index} aria-expanded="false" aria-controls={'flush-collapse'+index}>
                <i  className={'fas me-3 ' + classIcon}></i> { titulo }
            </button>
            </h2>
            <div id={'flush-collapse' + index} className="accordion-collapse collapse" aria-labelledby={'flush-heading'+index} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    { descripcion }
                </div>
            </div>
        </div>
    )
}
