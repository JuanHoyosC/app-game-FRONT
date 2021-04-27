import { types } from "../types/types";
import { URL_BACKEND } from "../URL_BACKEND";
import { alertaWarning } from "./alertas";

export const addClass = async (_id, id_clase = '', dispatch) => {


    if(id_clase.trim().length === 0){
        alertaWarning('No has ingresado un curso');
        return ;
    }

    const token = localStorage.getItem('appToken');
    const res = await fetch(`${URL_BACKEND}/add-class-student`, { method: 'POST', headers: { 'content-type': 'application/json', 'access-token': token }, body: JSON.stringify({ _id, id_clase }) })
    const data = await res.json();
    if(!data.continuar) {
        alertaWarning(data.mensaje);
        return ;
    }


    dispatch({ type: types.RETURN_EQUAL_AUTH, payload: data.estudiante });


}
