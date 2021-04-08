import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { useHabitos } from '../../hooks/useHabitos';
import './añadirHabito.css';
import { DificultadItem } from './DificultadItem';
import { FrecuenciaItem } from './FrecuenciaItem';

export const AñadirHabito = () => {
    const { user, dispatchHabitos } = useContext(AuthContext)
    const { user:usuario } = user;

    const [ form, handleInputChange ] = useForm({titulo: '', descripcion: '', dificultad: 'Sencillo', frecuencia: 'Diario'});
    const { titulo, descripcion }  = form
    const [ handleSubmit ] = useHabitos( form, usuario._id, dispatchHabitos );

    //Dificultades y frecuencias por defecto
    const dificultades = ['Sencillo', 'Facil', 'Mediano', 'Dificil'];
    const frecuencias = ['Diario', 'Dia por medio', 'Semanal', 'Mensual'];

    
    return (
        <form className="form-habito mb-5" onSubmit={ handleSubmit } autoComplete="off">
            <div className="d-flex justify-content-end mb-3">
                <button className="btn text-white btn-crear" type="submit">Crear</button>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Titulo" name="titulo" 
                   onChange={ handleInputChange } value={ titulo }/>
            </div>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Description" name="descripcion" 
                   onChange={ handleInputChange } value={ descripcion }></textarea>
            </div>
            
            <label className="text-white">Dificultad</label>
            <div className="row mb-3 mx-0">
                {dificultades.map((dificultad, index) => <DificultadItem index={ index } value={ dificultad }change={ handleInputChange } key={ index } dificultad={ dificultad }/>)}
            </div>

            <label className="text-white">Frecuencia</label>
            <div className="d-flex justify-content-between">
                { frecuencias.map((frecuencia, index) => <FrecuenciaItem  frecuencia={ frecuencia } index={ index } key={ index + 1}  change={ handleInputChange } value={ frecuencia } />) }
            </div>
        </form>
    )
}
