import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useHabitos } from '../../hooks/useHabitos';
import { DificultadItem } from './DificultadItem';
import { FrecuenciaItem } from './FrecuenciaItem';
import './añadirHabito.css';

import { useDispatch, useSelector } from 'react-redux';

export const EditarHabito = (props) => {

    //Obtiene los datos del usuario
    const usuario = useSelector(state => state.auth)

    //HAce uso de un customHook de form
    const [form, handleInputChange, handleReset] = useForm(props);
    const { titulo, descripcion } = form

    const dispatch = useDispatch();
    const { handleEdit } = useHabitos(form, usuario._id, dispatch, handleReset, props._id);

    //Dificultades y frecuencias por defecto
    const dificultades = [{ img: 'https://i.ibb.co/87K71BW/imageonline-co-whitebackgroundremoved-3.png', dificultad: 'Sencillo' }, { img: 'https://i.ibb.co/zRLfV4Y/imageonline-co-whitebackgroundremoved.png', dificultad: 'Fácil' },
    { img: 'https://i.ibb.co/LkfTpgK/imageonline-co-whitebackgroundremoved-2.png', dificultad: 'Mediano' }, { img: 'https://i.ibb.co/CnqNByG/imageonline-co-whitebackgroundremoved-1.png', dificultad: 'Díficil' }];
    const frecuencias = ['Diario', 'Dos dias', 'Semanal', 'Mensual'];


    return (
        <form className="form-habito mb-5" onSubmit={handleEdit} autoComplete="off">
            <div className="d-flex justify-content-end mb-3">
                <button className="btn text-white btn-crear" type="submit" data-bs-toggle="modal" data-bs-target={`#modalEditarHabito${props.index}`}>Editar</button>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Titulo" name="titulo"
                    onChange={handleInputChange} value={titulo} />
            </div>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Description" name="descripcion"
                    onChange={handleInputChange} value={descripcion}></textarea>
            </div>

            <label className="text-white">Dificultad</label>
            <div className="row mb-3 mx-0">
                {dificultades.map(({ dificultad, img }, index) => <DificultadItem index={index} img={img} value={dificultad} change={handleInputChange} key={index} i={props.index} dificultad={dificultad} />)}
            </div>

            <label className="text-white">Frecuencia</label>
            <div className="d-flex justify-content-between">
                {frecuencias.map((frecuencia, index) => <FrecuenciaItem frecuencia={frecuencia} index={index} key={index + 1} change={handleInputChange} i={props.index} value={frecuencia} />)}
            </div>
        </form>
    )
}
