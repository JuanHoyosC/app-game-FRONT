import { URL_BACKEND } from "../URL_BACKEND";
import { alertas } from "./alertas";


export const getItems = async () => {

    const token = localStorage.getItem('appToken');
    const res = await  fetch(`${ URL_BACKEND }/items`, {headers: {'access-token': token}});
    const data = await res.json();
    if (!data.continuar) alertas(data.mensaje);
    return data.items

}
