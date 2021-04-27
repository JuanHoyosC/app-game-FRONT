import { alertaError, alertaWarning } from '../services/alertas';
import { types } from '../types/types';
import { URL_BACKEND } from '../URL_BACKEND';
import { saveAs } from 'file-saver';
import { getPuntaje } from '../services/getPuntaje';

export const useMisiones = (usuario, id_tarea, dispatch) => {

    const token = localStorage.getItem('appToken');


    const getUsuario = () => {
        return {
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
            progreso: 'proceso',
            _id: usuario._id
        }
    }

    const handleProceso = async () => {
        const estudiante = getUsuario();

        const res = await fetch(`${URL_BACKEND}/add-student-task`, { method: 'POST', headers: { 'content-type': 'application/json', 'access-token': token }, body: JSON.stringify({ estudiante, id_tarea }) })
        const data = await res.json();
        if (!data.continuar) { alertaWarning(data.mensaje); return; };

        const payload = {
            _id: id_tarea,
            estudiante
        }

        dispatch({ type: types.AGREGAR_ESTUDIANTE, payload });
    }



    const descargarArchivo = async (nombre_archivo) => {
        await fetch(`${URL_BACKEND}/task-download`, {method: 'POST', headers: {'content-type': 'application/json', 'access-token': token }, body: JSON.stringify({id_tarea}) })
            .then( res => res.blob())
            .then(data => saveAs(data, nombre_archivo))
            .catch(error => alertaError('Hubo un error'));
    }

    const enviarArchivo = async (file, puntaje) => {
        let estudiante = getUsuario();
        if (file?.name) {
            const resto = await subirArchivo(file);
            estudiante = { ...estudiante, ...resto };
            estudiante.progreso = 'terminada';
        } else {
            estudiante.progreso = 'terminada';
        }

        //Actualiza las tareas terminadas en la base de datos
        const res = await fetch(`${URL_BACKEND}/upload-task-student`, { method: 'POST', headers: { 'content-type': 'application/json', 'access-token': token }, body: JSON.stringify({ estudiante, id_tarea }) })
        const data = await res.json();
        if (!data.continuar) { alertaWarning(data.mensaje); return; };

        //Actualiza las misiones en la vista
        const payload = {
            _id: id_tarea,
            estudiante,
            id_estudiante: usuario._id
        }
        dispatch({ type: types.TERMINAR_MISION, payload });
        await up( getPuntaje(puntaje) );

    }

    const up = async ( dificultad ) => {
        const res = await fetch(`${URL_BACKEND}/upattribute`, { method: 'POST', headers: { 'content-type': 'application/json', 'access-token': token }, body: JSON.stringify({ _id: usuario._id, dificultad }) })
        const data = await res.json();
        if (!data.continuar) return;

        //Se encarga de actualizar los puntos del usuario en la vista
        dispatch({ type: types.RETURN_EQUAL_AUTH, payload: data.estudiante });
    }

    const subirArchivo = async (fileA) => {
        let formData = new FormData();
        formData.append('', fileA);
        const res = await fetch(`${URL_BACKEND}/upload-task-file`, { method: 'POST', body: formData });
        const data = await res.json()
        return data;
    }



    return [handleProceso, descargarArchivo, enviarArchivo]
}
