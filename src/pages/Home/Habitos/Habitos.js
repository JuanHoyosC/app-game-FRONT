import React, { useEffect } from 'react';
import { Habito } from '../../../components/Habitos/Habito';
import { HabitosHeader } from '../../../components/Habitos/HabitosHeader';
import { Perfil } from '../../../components/Perfil/Perfil';
import { getHabitos } from '../../../services/getHabitos';
import { types } from '../../../types/types';

import { useDispatch, useSelector } from 'react-redux';
import './habitos.css';

export const Habitos = () => {

    const dispatch = useDispatch();
    const habitos = useSelector(state => state.habitos)
    const usuario = useSelector(state => state.auth)



    useEffect(() => {
        getHabitos(usuario._id).then(habitos => dispatch({ type: types.RETURN_HABITO, payload: habitos }));
    }, [usuario._id, dispatch])

    return (
        <div className="habitos">
            <Perfil />
            <HabitosHeader />

            {habitos.length === 0 ?
                <div className="no-habit">
                    <img src="https://i.ibb.co/xXQv4hV/box.png" alt="imagen-fondo" />
                    <h2>No hay habitos creados</h2>
                </div>
                :
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {habitos.map((habito) =>
                        <Habito habito={habito} key={habito._id} />)}
                </div>
            }
        </div>
    )
}
