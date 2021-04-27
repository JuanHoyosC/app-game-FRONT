import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ReactSortable } from "react-sortablejs";
import { trinomioCuadrado } from '../../services/trinomioCuadrado';
import { Ficha } from './Ficha';
import { Sortable } from './Sortable';
import './stage2.css';


export const Stage2 = ({ setActive }) => {

    const [trinomio, setTrinomio] = useState([0, 0, 0]);
    const [size, setSize] = useState({ w: 0, h: 0 });
    const sizeResult = useRef()
    const sizeSortable = useRef();

    //Creados
    const [fichas, setFichas] = useState([]);

    //Resultado
    const [resultado, setResultado] = useState([]);

    useEffect(() => {

        let resultado = trinomioCuadrado().split('+');

        let fichas = [...Array(Number(resultado[0])).fill({ clase: 'cuadrado m-2', value: resultado[0] })];

        fichas = [...fichas, ...Array(Number(resultado[1])).fill({ clase: 'rectangulo m-2', value: resultado[1] })];
        fichas = [...fichas, ...Array(Number(resultado[2])).fill({ clase: 'cuadrito m-2', value: resultado[2] })];

        setFichas(fichas);

        setTrinomio(resultado);
        setActive( true );

    }, [setActive])


    useLayoutEffect(() => {
        if (trinomio[0] === 0) return;
        const ladoA = Math.sqrt(trinomio[0]);
        const ladoB = Math.sqrt(trinomio[2]);
        sizeResult.current.style = `width: ${ladoA * 100 + ladoB * 50 + 2}px; min-height: ${ladoA * 100 + ladoB * 50 + 2}px`;
    }, [trinomio])

    useLayoutEffect(() => {
        let h = document.querySelector('.sortable-result').offsetHeight;
        if (h >= sizeResult.current.offsetWidth * 2) h = sizeResult.current.offsetWidth;
        setSize({ w: sizeResult.current.offsetWidth, h });

    }, [resultado])

    useEffect(() => {
        if (size.w === size.h && fichas.length === 0 && resultado.length !== 0) {
            setActive( false );
        }
    }, [resultado, size.w, size.h, fichas, setActive])

    return (
        <div className="stage2">
            <div className="d-flex mb-5 justify-content-between">
                <h5 className="text-white mb-0">Ordan las fichas para crear un cuadrado perfecto</h5>
                <h5 className="text-white mb-0"><i className="fas fa-question-circle"></i></h5>
            </div>

            <div className="formula mb-3">
                <h4 className="text-white text-center">{trinomio[0]}x <sup>2</sup> + {trinomio[1]}x + {trinomio[2]}</h4>
            </div>

            <div className="fichas mb-5">
                <Sortable group="fichas" list={fichas} setList={setFichas} />
            </div>

            <h5 className="text-white text-center">
                Arrastra todas las fichas y forma un cuadrado igual a {size.w - 2}X{size.w - 2}
            </h5>

            <div ref={sizeResult} className="mx-auto">
                <div className="text-center text-white mb-1">{size.w - 2}X{size.h - 2}</div>

                <ReactSortable className="container-result sortable-result mb-3"
                    style={{ minHeight: `${size.w}px` }}
                    list={resultado} setList={setResultado}
                    ref={sizeSortable}
                    group="fichas"
                    animation={200}
                    delayOnTouchStart={true}
                    multiDrag
                    swap
                    delay={2}>
                    {resultado.map((value, i) => <Ficha value={value} setLista={setResultado} index={i} key={i} />)}
                </ReactSortable>
            </div>


        </div>
    )
}
