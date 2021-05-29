import moment from 'moment';
import { types } from '../types/types';
import { URL_BACKEND } from '../URL_BACKEND';
import { alertaDefeat, alertaError, alertaWarning } from './alertas';
import { getPuntaje } from './getPuntaje';
import { numDificultad } from './numDificultad';


export const separarMisiones = (misiones = [], usuario, dispatch) => {
    const tipoMisiones = [{ titulo: 'Misiones comenzadas', misiones: [] },
    { titulo: 'Misiones en proceso', misiones: [] },
    { titulo: 'Misiones terminadas', misiones: [] },
    { titulo: 'Misiones no terminadas', misiones: [] }];

    misiones.forEach(async (mision) => {
        const findS = mision.estudiantes.some(estudiante => estudiante._id === usuario._id && estudiante.nombre === usuario.nombre && usuario.apellidos === estudiante.apellidos);



        if (!findS) {
            if (moment().isAfter(mision.fecha_fin) && !moment(new Date()).isSame(mision.fecha_fin, 'day', 'month') ) {
                tipoMisiones[3].misiones.push(mision);
                await down(usuario, mision, getPuntaje( mision.puntaje ), dispatch);
            }

            tipoMisiones[0].misiones.push(mision);
        }

        if (findS) {
            //Busca si el estudiante ya esta subscrito y en que proceso esta para separarlo
            const estudiante = mision.estudiantes.find(estudiante => estudiante._id = usuario._id && estudiante.nombre === usuario.nombre && usuario.apellidos === estudiante.apellidos);
            
            if (estudiante.progreso === 'proceso') {
                if (moment().isAfter(mision.fecha_fin) && !moment(new Date()).isSame(mision.fecha_fin, 'day', 'month') ) {
                    tipoMisiones[3].misiones.push(mision);
                    await down(usuario, mision, getPuntaje( mision.puntaje ), dispatch);
                }else{ 
                    tipoMisiones[1].misiones.push(mision);
                }
            }


            if (estudiante.progreso === 'terminada') {
       
                tipoMisiones[2].misiones.push(mision);
                
            }

            if (estudiante.progreso === 'No terminada') {
                tipoMisiones[3].misiones.push(mision);
            }
        }
    })

    return tipoMisiones;
}


const down = async (usuario, mision, dificultad, dispatch) => {
    const token = localStorage.getItem('appToken');
    const estudiante = {
        nombre: usuario.nombre,
        apellidos: usuario.apellidos,
        progreso: 'No terminada',
        _id: usuario._id
    }

    const res = await fetch(`${URL_BACKEND}/upload-task-student-finish`, { method: 'POST', headers: { 'content-type': 'application/json', 'access-token': token }, body: JSON.stringify({ estudiante, id_tarea: mision._id }) })
    const data = await res.json();
    if (!data.continuar) { alertaWarning(data.mensaje); return; };

    const res1 = await fetch(`${URL_BACKEND}/downattribute`, { method: 'POST', headers: { 'content-type': 'application/json', 'access-token': token }, body: JSON.stringify({_id: usuario._id, dificultad}) })
    const data1 = await res1.json();
    if (!data1.continuar) { alertaError('Hubo un error'); return; }

    alertaDefeat('No has cumplido la misión, la proxima vez sabemos que puedes lograrlo!!', usuario.nivel, numDificultad(dificultad));

    //Se encarga de actualizar los puntos del usuario en la vista
    dispatch({ type: types.RETURN_EQUAL_AUTH, payload: data1.estudiante });
}