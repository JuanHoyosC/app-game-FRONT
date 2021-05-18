import { alertas } from '../services/alertas';
import { types } from '../types/types';
import moment from 'moment';
import { numDificultad } from '../services/numDificultad';

export const habitoReducer = (state = [], action) => {

    switch (action.type) {
        case types.ADD_HABITO:
            return [...state, action.payload]

        //Elimina los habitos
        case  types.DELETE_HABITO:
            return state.filter((habito) => (habito._id !== action.payload) );
        
        //Busca los habitos segun el titulo que se envio
        case types.TITULO_HABITO: 
            const find = state.filter(habito => habito.titulo.toLowerCase() === action.payload.toLowerCase());
            if(find.length === 0) alertas('No se encontro el habito');
            return find.length > 0 ? find : state;
        
        //Ordena de mayor dificultad a menor
        case types.ORDENAR_DIFICULTAD_HABITO: 
            return  [...state.sort((a, b) => numDificultad(b.dificultad) - numDificultad(a.dificultad))]
        
        //Filtra todos los habitos que sean para el momento
        case types.ORDENAR_HOY_HABITO: 
            const newState = state.filter(habito => moment(habito.proxima_fecha).isSame(moment(), 'day'))
            if(newState.length === 0) alertas('No tienes habitos para hoy');
            return newState.length === 0 ? state : newState;

        //Ordena de fechas más proximas a más lejanas    
        case types.ORDENAR_FECHA_HABITO: 
            return [...state.sort((a,b) => new Date(a.proxima_fecha) - new Date(b.proxima_fecha))];

        case types.UPDATE_HABITO: 
            return state.map((a) => a._id === action.payload._id ? action.payload.data : a)
        //Retorna el array que se envie
        case types.RETURN_HABITO:
            return action.payload;

        default:
            return state
    }
}
