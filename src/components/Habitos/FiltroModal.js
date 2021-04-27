import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FiltroItem } from './FiltroItem';
import './filtro.css';
import { types } from '../../types/types';
import { getHabitos } from '../../services/getHabitos';


export const FiltroModal = () => {

    const dispatch = useDispatch();
    
    //Obtiene los datos del usuario
    const usuario = useSelector(state => state.auth)

    const [filter, setFilter] = useState({ titulo: '', frecuencia: 'Fecha' });
    const filtros = ['Fecha', 'Dificultad', 'Hoy'];

    const hanleInputChange = ({ target }) => {
        setFilter(data =>  ({...data, [target.name]: target.value }))
    }

    const handleFiltrar = async ( e ) => {
        e.preventDefault();
        await handleTodos( e );
        if(filter.titulo.length > 0) dispatch({type: types.TITULO_HABITO, payload: filter.titulo});
        if(filter.titulo === '' && filter.frecuencia === 'Dificultad') dispatch({type: types.ORDENAR_DIFICULTAD_HABITO});
        if(filter.titulo === '' && filter.frecuencia === 'Hoy') dispatch({ type: types.ORDENAR_HOY_HABITO });
        setFilter(data => ({...data, titulo: ''}));
    }

    const handleTodos = async ( e ) => {
        e.preventDefault();
        const habitos = await getHabitos(usuario._id);
        dispatch({type: types.RETURN_HABITO, payload: habitos});
    }

    return (
        <div className="modal modal-filtro fade" id="modalFiltro" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <form className="modal-body pb-0 modal-filtro-body">
                        <h6 className="text-center text-white mb-3">Filtro</h6>
                        <div className="d-flex mb-3 justify-content-center">
                            {filtros.map((filtro, index) => <FiltroItem index={index} setFilter={ setFilter }key={index} value={filtro} />)}
                        </div>
                        <hr />
                        <div className="mb-3">
                            <input type="text" className="form-control titulo-filter" value={ filter.titulo }
                                placeholder="Titulo del habito" name="titulo" onChange={ hanleInputChange } autoComplete="off"/>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <button className="btn reiniciar-btn" onClick={ handleTodos } data-bs-toggle="modal" data-bs-target="#modalFiltro">Todos</button>
                            <button className="btn hecho-btn" onClick={ handleFiltrar }  data-bs-toggle="modal" data-bs-target="#modalFiltro">Hecho</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
