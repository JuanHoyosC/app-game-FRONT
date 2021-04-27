import React from 'react';
import './ficha.css';

export const Ficha = ({ value, setLista, index }) => {

    const handleRotar = ( { target } ) => {
        const clase = target.className.split(' ')[0];
        if(clase !== 'rectangulo' && clase !== 'rectangulo-reverse') return ;

        if(target.offsetWidth === 100) {
            setLista(lista => lista.map((list, i) => i === index ? ({...list, clase: 'rectangulo-reverse m-2'}) : list))
        }
        
        if(target.offsetWidth === 50)  {
            setLista(lista => lista.map((list, i) => i === index ? ({...list, clase: 'rectangulo m-2'}) : list))
        }
    }


    return (
        <div className={ value.clase } onClick={ handleRotar }>
            { value.clase.split(' ')[0] === 'cuadrado' && <p className="mb-0 valor-ficha" >x<sup>2</sup></p> }
            { (value.clase.split(' ')[0] === 'rectangulo' || value.clase.split(' ')[0] === 'rectangulo-reverse') && <p className="mb-0 valor-ficha" >x</p> }
            { value.clase.split(' ')[0] === 'cuadrito' && <p className="mb-0 valor-ficha">1</p> }
        </div>
    )
}
