import { types } from "../types/types";
import { URL_BACKEND } from "../URL_BACKEND";
import jwt_decode from "jwt-decode"

export const getUser = async (dispatch) => {
    //Obtiene el token registrado en el localStorage
    const token = localStorage.getItem('appToken');
    if (!token || token.length < 3) { localStorage.removeItem('appToken'); return; }

    //Lo decodifica
    const decoded = jwt_decode(token);
    if(!decoded) { dispatch({ type: types.LOGOUT }); return; }

    //Busca si existe un usuario con ese id
    const res = await fetch(`${URL_BACKEND}/getuser/${decoded.token._id}`, { headers: { 'access-token': token } })
    const data = await res.json();

    //retorna el usuario si existe, si no lo devulvel al login
    if (!data.continuar) { dispatch({ type: types.LOGOUT }); return; }
    dispatch({ type: types.LOGIN, payload: data.estudiante });
}