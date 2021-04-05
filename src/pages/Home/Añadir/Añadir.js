import React from 'react'
import { AñadirHabito } from '../../../components/Habitos/AñadirHabito';
import { Perfil } from '../../../components/Perfil/Perfil';

export const Añadir = () => {
    return (
        <div className="row">
            <Perfil />
            <AñadirHabito />
        </div>
    )
}
