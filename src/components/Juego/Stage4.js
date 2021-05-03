import React, { useEffect, useState } from 'react'
import { trinomioCuadrado } from '../../services/trinomioCuadrado';
import { Factorizar } from './Factorizar';
import { Factorizar1 } from './Factorizar1';
import { ModalStage4 } from './ModalStage4';
import './stage4.css';

export const Stage4 = ({ setActive }) => {

    const [formulas, setFormulas] = useState([]);
    const [formulas1, setFormulas1] = useState([]);

    //Resultados 
    const [resultados, setResultados] = useState([]);

    const unicos = () => {
        const array = [];
        while ([...new Set(array)].length !== 5) {
            array.push(trinomioCuadrado());
        }
        return [...new Set(array)];
    }

    useEffect(() => {

        const array = unicos();
        setFormulas(array.map(value => value.split('+')));

        const array1 = unicos();
        setFormulas1(array1.map(value => value.split('+')));

        setActive(true);
    }, [setActive])

    useEffect(() => {
        if(resultados.length  === 10){
            setActive(false);
        }
    }, [ resultados, setActive ])

    return (
        <div>
            <div className="d-flex mb-5 justify-content-end">
                <h4 className="text-white mb-0 cursor"  data-bs-toggle="modal" data-bs-target="#modalStage4"><i className="fas fa-question-circle"></i></h4>
            </div>

            <div className="row">
                
                <div className="col-md-6">
                    <h5 className="text-white text-center mb-5">Factoriza</h5>
                    {formulas.map((formula, index) => <Factorizar formula={formula} setResultados={ setResultados } key={index} />)}
                </div>

                <div className="col-md-6">
                    <h5 className="text-white text-center mb-5">Factoriza</h5>
                    {formulas1.map((formula, index) => <Factorizar1 formula={formula} setResultados={ setResultados } key={index} />)}
                </div>
            </div>

            <ModalStage4 />
        </div>
    )
}
