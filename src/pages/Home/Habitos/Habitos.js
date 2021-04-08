import React, { useContext } from 'react'
import { AuthContext } from '../../../auth/AuthContext';
import { Habito } from '../../../components/Habitos/Habito';
import { HabitosHeader } from '../../../components/Habitos/HabitosHeader';
import { Perfil } from '../../../components/Perfil/Perfil';
import './habitos.css';

export const Habitos = () => {
    const { dispatchHabitos, habitos } = useContext(AuthContext)
    return (
        <div className="habitos">
            <Perfil />
            <HabitosHeader dispatch={dispatchHabitos} />
            <div className="accordion accordion-flush" id="accordionFlushExample">
                {habitos.map(({ titulo, descripcion, _id }) =>
                    <Habito titulo={titulo} descripcion={descripcion} dispatch={dispatchHabitos} id={ _id } key={ _id } />)}
            </div>
        </div>
    )
}
