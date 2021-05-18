import React from 'react'

export const FrecuenciaItem = ({ frecuencia, index, change, value, i }) => {


    const handleSeleccionar = () => {
        document.querySelectorAll('.frecuenciaItem'+i).forEach(el => el.classList.remove('active'));
        document.querySelector(`#frecuencia${i}${index}`).classList.add('active');
    }
    
    return (
        <label  className={`${ index === 0 ? `frecuenciaItem${i} frecuenciaItem d-block active`: `frecuenciaItem${i} frecuenciaItem d-block` }`} id={`frecuencia${i}${index}`} htmlFor={ `input${i}` + index } onClick={ handleSeleccionar }>
            <input className="form-check-input" type="radio" 
                    name="frecuencia" id={`input${i}`+index} value={ value } checked={ index === 0 ? true: false } onChange={ change }/>
            <small className="text-white text-center">{ frecuencia }</small>
        </label>
    )
}
