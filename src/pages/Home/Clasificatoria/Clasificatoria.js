import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getClasificatoria } from '../../../services/getClasificatoria';
import './clasificatoria.css';
import { FilaItem } from './FilaItem';

export const Clasificatoria = () => {


    const [clasificatoria, setClasificatoria] = useState([]);
    const usuario = useSelector(state => state.auth);

    console.log(clasificatoria)

    useEffect(() => {
        getClasificatoria(usuario.id_clase).then(estudiantes => setClasificatoria(estudiantes));
    }, [usuario.id_clase])


    return (
        <>
        <h3 className="text-center text-white mb-5">Top 10 de los mejores jugadores</h3>
            <table className="table clasificatoria">
                <thead>
                    <tr>
                        <th scope="col">posición</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Nivel</th>
                    </tr>
                </thead>
                <tbody>
                    {clasificatoria.map(({ nivel, username }, index) => <FilaItem posicion={index + 1}
                        nivel={nivel} username={username} key={index} />)}
                </tbody>
            </table>
        </>
    )
}
