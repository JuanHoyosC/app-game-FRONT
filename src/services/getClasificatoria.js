import { URL_BACKEND } from "../URL_BACKEND";
import { alertas } from "./alertas";


export const getClasificatoria = async (id_curso) => {

    const token = localStorage.getItem('appToken');
    const res = await  fetch(`${ URL_BACKEND }/get-students-class/${id_curso}`, {headers: {'access-token': token}});
    const data = await res.json();
    if (!data.continuar) alertas(data.mensaje);
    return data.estudiantes.sort((a, b) => b.nivel - a.nivel)

}
