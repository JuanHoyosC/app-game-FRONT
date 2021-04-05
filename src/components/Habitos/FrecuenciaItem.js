import React from 'react'

export const FrecuenciaItem = ({ frecuencia, index }) => {


    const handleSeleccionar = () => {
        document.querySelectorAll('.frecuenciaItem').forEach(el => el.classList.remove('active'));
        document.querySelector(`#frecuencia${index}`).classList.add('active');
    }
    return (
        <div  className={`${ index === 0 ? 'frecuenciaItem active': 'frecuenciaItem' }`} id={`frecuencia${index}`} onClick={ handleSeleccionar }>
            <small className="text-white text-center">{ frecuencia }</small>
        </div>
    )
}
