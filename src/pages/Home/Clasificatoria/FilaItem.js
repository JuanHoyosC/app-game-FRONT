import React from 'react'

export const FilaItem = ({ posicion, username, nivel }) => {
    const icons = ['fa-trophy', 'fa-medal', 'fa-award'];
    const posiciones = ['Primera posición', 'Segunda posición', 'Tercera posición', 'Cuarto posición',
                        'Quinta posición', 'Sexta posición', 'Septima posición', 'Octava posición',
                        'Novena posición', 'Decima posición'];
    return (
        <tr>
            <td className="d-flex align-items-center">{ (posicion === 1 || posicion === 2 || posicion === 3) &&
                <i className={`fas ${ icons[posicion - 1] } icono-clas me-2`}></i>  }{ posiciones[ posicion -1 ] }</td>
            <td>{ username } </td>
            <td>{ nivel } </td>
        </tr>
    )
}
