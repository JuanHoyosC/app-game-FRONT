import { types } from "../types/types";

export const misionReducer = (state = [], action) => {
    switch (action.type){
        case types.RETURN_MISIONES: 
            return action.payload;

        case types.AGREGAR_ESTUDIANTE:
            const index = state[0].misiones.findIndex(mision => mision._id === action.payload._id);
            state[0].misiones[index].estudiantes = [...state[0].misiones[index].estudiantes, action.payload.estudiante];
            state[1].misiones = [...state[1].misiones, state[0].misiones[index] ];
            state[0].misiones = state[0].misiones.filter((m, i) => i !== index);
            return [...state];

        case types.TERMINAR_MISION:
            const i = state[1].misiones.findIndex(mision => mision._id === action.payload._id);
            state[1].misiones[i].estudiantes = state[1].misiones[i].estudiantes.map(e => e._id === action.payload.id_estudiante ? action.payload.estudiante : e);
            state[2].misiones = [...state[2].misiones, state[1].misiones[i] ];
            state[1].misiones = state[1].misiones.filter((m, index) => index !== i);
            return [...state];


        default: 
            return state;
    }
}

