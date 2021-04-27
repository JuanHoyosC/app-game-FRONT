import { alertaSure, alertaWait, alertaWarning } from "../services/alertas";
import { types } from '../types/types';
import { URL_BACKEND } from "../URL_BACKEND";

export const useHabitos = (form = {}, id = '', dispatch, handleReset) => {

    const token = localStorage.getItem('appToken');


    //Crea un nuevo habito
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const { titulo, descripcion }  = form

        if(titulo.length < 3){
            alertaWarning('Ingresa un titulo más largo');
            return ;
        }

        if(descripcion.length < 5){
            alertaWarning('Ingresa una descripción más larga');
            return ;
        }

        //Envia el habito al backend
        const res = await fetch(`${URL_BACKEND}/addhabit`, { method: 'POST', headers: { 'content-type': 'application/json', 'access-token': token }, body: JSON.stringify({ ...form, id_usuario: id }) })
        const data = await res.json();

        //Recibe el resultado de data del backend
        if (!data.continuar) { alertaWarning(data.mensaje); return; };

        //Actualiza los habitos en la vista
        handleReset();
        dispatch({ type: types.ADD_HABITO, payload: data.habito });
    }

    //Elimina el habito enviando el id
    const handleDelete = async () => {

        const result = await alertaSure('Estás seguro de eliminar el habito');
        if (!result.isConfirmed) return;

        const res = await fetch(`${URL_BACKEND}/deletehabit/${id}`, { headers: { 'access-token': token } });
        const data = await res.json()
        if (!data.continuar) { alertaWarning(data.mensaje); return; }

        //Actualiza los habitos en la vista
        dispatch({ type: types.DELETE_HABITO, payload: id });

    }

    //Funcion que se encarga de cumplir con un habito
    const handleSuccess = async (usuario, habito) => {

        const verificar = await verificarHabito(habito._id);

        if (!verificar.continuar) {
            alertaWait(verificar.mensaje);
            return;
        }


        const res = await fetch(`${URL_BACKEND}/upattribute`, { method: 'POST', headers: { 'content-type': 'application/json', 'access-token': token }, body: JSON.stringify({ _id: usuario._id, dificultad: habito.dificultad }) })
        const data = await res.json();
        if (!data.continuar) return;

        //Se encarga de actualizar los puntos del usuario en la vista
        dispatch({ type: types.RETURN_EQUAL_AUTH, payload: data.estudiante });
    }

    //Funcion que se encarga de ver si no se cumplio con un habito
    const handleDown = async (usuario, habito) => {
        const verificar = await verificarHabito(habito._id);
        if (!verificar.continuar) {
            alertaWait(verificar.mensaje);
            return;
        }

        const res = await fetch(`${URL_BACKEND}/downattribute`, { method: 'POST', headers: { 'content-type': 'application/json', 'access-token': token }, body: JSON.stringify({ _id: usuario._id, dificultad: habito.dificultad }) })
        const data = await res.json();
        if (!data.continuar) return;

        //Se encarga de actualizar los puntos del usuario en la vista
        dispatch({ type: types.RETURN_EQUAL_AUTH, payload: data.estudiante });
    }

    //Funcion que verifica si el usuario ya ha cumplido con su habito, diario, mensual, etc
    const verificarHabito = async (_id) => {
        const res = await fetch(`${URL_BACKEND}/verifytime/${_id}`, { headers: { 'access-token': token } });
        const data = await res.json();
        return data;
    }

    return { handleSubmit, handleDelete, handleSuccess, handleDown }
}
