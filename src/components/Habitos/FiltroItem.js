import React from 'react'

export const FiltroItem = ({ index, value, setFilter }) => {

    const handleFocus = () => {
        setFilter(data => ({ ...data, frecuencia: value }));
        document.querySelectorAll('.form-check-label').forEach(el => el.classList.remove('check-active'));
        document.querySelector(`#label${index}`).classList.add('check-active');
    }

    return (
        <div className="form-check">
            <label className={`${index === 0 ? 'form-check-label check-active' : 'form-check-label'}`} onClick={handleFocus}
                id={`label${index}`} >
                {value}
            </label>
        </div>
    )
}
