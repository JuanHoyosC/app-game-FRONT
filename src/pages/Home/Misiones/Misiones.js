import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MisionesCard } from '../../../components/Misiones/MisionesCard';
import { Perfil } from '../../../components/Perfil/Perfil';
import { getMisiones } from '../../../services/getMisiones';
import { separarMisiones } from '../../../services/separarMisiones';
import { types } from '../../../types/types';
import './misiones.css';

export const Misiones = () => {

    const usuario = useSelector(state => state.auth)
    const tipoMisiones = useSelector(state => state.misiones)
    const dispatch = useDispatch();

    useEffect(() => {
        getMisiones(usuario.id_clase).then(misiones => dispatch({ type: types.RETURN_MISIONES, payload: separarMisiones(misiones, usuario, dispatch) }));
    }, [dispatch, usuario, usuario.id_clase])

    return (
        <div className="row">
            <Perfil />
            {tipoMisiones.map(({ titulo, misiones }, index) => <MisionesCard tituloMision={titulo} misiones={misiones} key={index} index={index} />)}
        </div>
    )
}
