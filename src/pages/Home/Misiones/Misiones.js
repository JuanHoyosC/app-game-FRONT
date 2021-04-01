import React from 'react'
import { MisionesCard } from '../../../components/Misiones/MisionesCard';
import './misiones.css';

export const Misiones = () => {
    const tipoMisiones = [{titulo:'Misiones comenzadas', misiones: [{titulo: 'Comenzar el backend', descripcion: 'Hola esta es una descricion'}, {titulo: 'segunda mision', descripcion: 'Hola esta es una descricion'}]}, 
                             {titulo: 'Misiones en proceso', misiones: [{titulo: 'Comenzar el frontend', descripcion: 'Hola esta es una descricion'}]},
                             {titulo: 'Misiones terminadas', misiones: [{titulo: 'Base de datos', descripcion: 'Hola esta es una descricion'}]}, 
                             {titulo: 'Misiones no terminadas', misiones: [{titulo: 'Despliegue', descripcion: 'Hola esta es una descricion'}]}];
    return (
        <div className="row">
            { tipoMisiones.map(({ titulo, misiones }, index) => <MisionesCard tituloMision={ titulo } misiones={ misiones } key={ index } index={ index }/>) }
        </div>
    )
}
