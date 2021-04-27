import { types } from "../types/types";

const { URL_BACKEND } = require("../URL_BACKEND");

export const upAtributo = async (_id, dificultad, dispatch) => {
    const token = localStorage.getItem('appToken');
    const res = await fetch(`${URL_BACKEND}/upattribute`, { method: 'POST', headers: { 'content-type': 'application/json', 'access-token': token }, body: JSON.stringify({ _id, dificultad }) })
    const data = await res.json();
    if (!data.continuar) return;
    dispatch({ type: types.LOGIN, payload: data.estudiante });
}