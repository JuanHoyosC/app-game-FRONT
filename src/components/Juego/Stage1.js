import React, { useEffect, useLayoutEffect, useState } from 'react'
import { trinomioCuadrado } from '../../services/trinomioCuadrado';
import { ModalStage1 } from './ModalStage1';
import { Sortable } from './Sortable';


import './stage1.css';

export const Stage1 = ({ setActive }) => {

    const [trinomio, setTrinomio] = useState([0, 0, 0]);

    //Creados
    const [x2, setX2] = useState([]);
    const [x, setX] = useState([]);
    const [num, setNum] = useState([]);

    //Resultados
    const [cuadrados, setCuadrados] = useState([]);
    const [rectangulos, setRectangulos] = useState([]);
    const [cuadritos, setCuadritos] = useState([]);


    useEffect(() => {
        let resultado = trinomioCuadrado().split('+');
        setTrinomio(resultado);
        setActive( true );

        setX2(Array(Number(resultado[0])).fill({ clase: 'cuadrado m-2', value: resultado[0] }));
        setX(Array(Number(resultado[1])).fill({ clase: 'rectangulo m-2', value: resultado[1] }));
        setNum(Array(Number(resultado[2])).fill({ clase: 'cuadrito m-2', value: resultado[2] }));
    }, [setActive])


    useLayoutEffect(() => {
        if (x2.length === 0 && x.length === 0 && num.length === 0) {
            setActive( false );
        }
    }, [x2, x, num, setActive])


    return (
        <div className="stage1">
            <div className="d-flex flex-wrap justify-content-end align-items-center mb-5">
                <h4 className="text-white mb-0 cursor" data-bs-toggle="modal" data-bs-target="#modalStage1"><i className="fas fa-question-circle"></i></h4>
            </div>

            <div className="fichas d-flex mb-3">
                <Sortable group="cuadrados" list={x2} setList={setX2} clase="cuadrado m-2" />
                <Sortable group="rectangulos" list={x} setList={setX} clase="rectangulo m-2" />
                <Sortable group="cuadritos" list={num} setList={setNum} clase="cuadrito m-2" />
            </div>

            <div className="row mb-3">
                <div className="col-md-4">
                    <p className="text-center text-white">{trinomio[0]}x<sup>2</sup></p>
                    <div className="contenedor-xx">
                        <Sortable group="cuadrados" list={cuadrados} setList={setCuadrados} clase="cuadrado" />
                    </div>
                </div>

                <div className="col-md-4">
                    <p className="text-center text-white">{trinomio[1]}x</p>
                    <div className="contenedor-x">
                        <Sortable group="rectangulos" list={rectangulos} setList={setRectangulos} clase="rectangulo" />
                    </div>
                </div>

                <div className="col-md-4">
                    <p className="text-center text-white">{trinomio[2]}</p>
                    <div className="contenedor-num">
                        <Sortable group="cuadritos" list={cuadritos} setList={setCuadritos} clase="cuadrito" />
                    </div>
                </div>
            </div>

            <ModalStage1 />
        </div>
    )
}
