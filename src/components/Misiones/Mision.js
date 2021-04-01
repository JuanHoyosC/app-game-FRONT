import React from 'react'
import { AccordeonItem } from './AccordeonItem'

export const Mision = ({ misiones = [], misionIndex }) => {
    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            { misiones.map(({titulo, descripcion}, index) => <AccordeonItem titulo={ titulo } 
                                descripcion={ descripcion } index={ index +''+misionIndex } key={ index }/>) }
        </div>
    )
}
