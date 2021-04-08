import React from 'react'

export const FrecuenciaItem = ({ frecuencia, index, change, value }) => {


    const handleSeleccionar = () => {
        document.querySelectorAll('.frecuenciaItem').forEach(el => el.classList.remove('active'));
        document.querySelector(`#frecuencia${index}`).classList.add('active');
    }
    return (
        <label  className={`${ index === 0 ? 'frecuenciaItem d-block active': 'frecuenciaItem d-block' }`} id={`frecuencia${index}`} htmlFor={ 'input' + index } onClick={ handleSeleccionar }>
            <input className="form-check-input" type="radio" 
                    name="frecuencia" id={'input'+index} value={ value } checked={ index === 0 ? true: false } onChange={ change }/>
            <small className="text-white text-center">{ frecuencia }</small>
        </label>
    )
}
