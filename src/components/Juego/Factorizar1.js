import React, { useEffect, useState } from 'react'

export const Factorizar1 = ({ formula, setResultados }) => {

    const [state, setState] = useState({ a: 0, b: 0, c: 0 });
    const [active, setActive] = useState({ aActive: false, bActive: false, cActive: false });
    const { a, b, c } = state;
    const { aActive, bActive, cActive } = active;

    const handleInputChange = ({ target }) => {
        setState(state => ({ ...state, [target.name]: target.value }));
    }

    useEffect(() => {

        console.log(formula, a, b, c)

        if (Number(a) === Number(formula[0])) setActive(a => ({ ...a, aActive: true }));

        if (Number(b) === Number(formula[1])) setActive(a => ({ ...a, bActive: true }));

        if (Number(c) === Number(formula[2])) setActive(a => ({ ...a, cActive: true }));

        

    }, [a, b, c, formula])

    useEffect(() => {
        if(aActive && bActive && cActive){
            setResultados(resultado => [...resultado, 1]);
        }
    }, [aActive, bActive, cActive, setResultados])


    return (
        <div className="text-white mb-3 contendor-formula">
            <span className="pe-2">
                ( {Math.sqrt(formula[0])}X + {Math.sqrt(formula[2])} )<sup>2</sup>
            </span>

            <span>=</span>
            <span className="ms-2">
                <input type="number" min="1" pattern="^[0-9]+" disabled={aActive}
                    className={`form-control ${aActive ? 'activeInput' : 'input'}`} name="a" value={a} onChange={handleInputChange} />X<sup>2</sup>
                    + <input type="number" min="1" pattern="^[0-9]+" disabled={bActive}
                    className={`form-control ${bActive ? 'activeInput' : 'input'}`} name="b" value={b} onChange={handleInputChange} />X +    
                     <input type="number" min="1" pattern="^[0-9]+" disabled={cActive}
                    className={`form-control ${cActive ? 'activeInput' : 'input'}`} name="c" value={c} onChange={handleInputChange} />
                    </span>
            {
                aActive && bActive && cActive && <span className="ps-2 check"><i className="fas fa-check"></i></span>
            }
        </div>
    )
}
