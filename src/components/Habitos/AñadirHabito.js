import React from 'react';
import './añadirHabito.css';
import { DificultadItem } from './DificultadItem';
import { FrecuenciaItem } from './FrecuenciaItem';

export const AñadirHabito = () => {
    const dificultades = ['Sencillo', 'Facil', 'Mediano', 'Dificil'];
    const frecuencias = ['Diario', 'Dia por medio', 'Semanal', 'Mensual'];

    return (
        <form className="form-habito mb-5">
            <div className="d-flex justify-content-end mb-3">
                <button className="btn text-white btn-crear">Crear</button>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Titulo" />
            </div>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Description"></textarea>
            </div>
            
            <label className="text-white">Dificultad</label>
            <div className="row mb-3 mx-0">
                {dificultades.map((dificultad, index) => <DificultadItem index={ index } key={ index } dificultad={ dificultad }/>)}
            </div>

            <label className="text-white">Frecuencia</label>
            <div className="d-flex justify-content-between">
                { frecuencias.map((frecuencia, index) => <FrecuenciaItem  frecuencia={ frecuencia } index={ index } key={ index + 1}/>) }
            </div>
        </form>
    )
}
