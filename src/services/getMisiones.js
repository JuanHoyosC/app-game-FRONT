import { URL_BACKEND } from "../URL_BACKEND";
import { alertas } from "./alertas";


export const getMisiones = async (id_curso) => {

    const token = localStorage.getItem('appToken');
    const res = await  fetch(`${ URL_BACKEND }/get-tasks/${id_curso}`, {headers: {'access-token': token}});
    const data = await res.json();
    if (!data.continuar) alertas(data.mensaje);
    return data.tareas

}
