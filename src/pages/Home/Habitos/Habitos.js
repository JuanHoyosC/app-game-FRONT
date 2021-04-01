import React from 'react'
import { Habito } from '../../../components/Habitos/Habito';
import './habitos.css';
export const Habitos = () => {

    const habitos = [{ titulo: 'Hacer algo', descripcion: 'Hacer algo', id: 0 },
    { titulo: 'Hacer algo 2', descripcion: 'Hacer algo 2', id: 1 }]

    return (
        <div className="habitos">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                {habitos.map(({ titulo, descripcion, id }) => <Habito titulo={titulo} descripcion={descripcion} id={id} key={id} />)}
            </div>
        </div>

    )
}
