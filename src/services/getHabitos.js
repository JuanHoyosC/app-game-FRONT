import { URL_BACKEND } from "../URL_BACKEND";
import { alertas } from "./alertas";


export const getHabitos  = async ( id ) => {
    const token = localStorage.getItem('appToken');
    const res = await  fetch(`${ URL_BACKEND }/gethabits/${id}`, {headers: {'access-token': token}});
    const data = await res.json();
    if (!data.continuar) alertas(data.mensaje);
    return data.habitos
}

