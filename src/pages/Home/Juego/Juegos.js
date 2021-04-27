import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Stage1 } from '../../../components/Juego/Stage1'
import { Stage2 } from '../../../components/Juego/Stage2'
import { Stage3 } from '../../../components/Juego/Stage3'
import { Stage4 } from '../../../components/Juego/Stage4';
import { Stage5 } from '../../../components/Juego/Stage5';
import { upAtributo } from '../../../services/upAtributo';

import './juego.css';

const getStage = () => {
    const stage = localStorage.getItem('stage');
    return Number(stage) || 1;
}

export const Juegos = () => {

    const [stage, setStage] = useState(getStage());
    const [active, setActive] = useState(true);
    const dispatch = useDispatch()
    const { _id } = useSelector(state => state.auth);

    const handleClick = () => {
        if(stage === 4) upAtributo(_id, 'Díficil', dispatch).then()
        localStorage.setItem('stage', `${ stage + 1 }`);
        setStage(stage + 1);
    }

    return (
        <div className="container">
            { stage === 1 && <Stage1 setActive={ setActive }  /> }
            { stage === 2 && <Stage2 setActive={ setActive } /> }
            { stage === 3 && <Stage3 setActive={ setActive } /> }
            { stage === 4 && <Stage4 setActive={ setActive } /> }
            { stage === 5 && <Stage5 />}

            { stage !== 5 &&
                <div className="d-flex justify-content-end mb-3">
                    <button className="btn text-white siguiente"
                        onClick={handleClick} disabled={active}>Siguiente</button>
                </div>
            }
        </div>
    )
}
