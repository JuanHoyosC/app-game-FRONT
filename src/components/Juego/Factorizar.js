import React, { useEffect, useState } from 'react'

export const Factorizar = ({ formula, setResultados }) => {

    const [state, setState] = useState({ a: 0, b: 0 });
    const [active, setActive] = useState({ aActive: false, bActive: false });
    const { a, b } = state;
    const { aActive, bActive } = active;

    const handleInputChange = ({ target }) => {
        setState(state => ({ ...state, [target.name]: target.value }));
    }

    useEffect(() => {

        if (Number(a) === Math.sqrt(formula[0])) setActive(a => ({ ...a, aActive: true }));

        if (Number(b) === Math.sqrt(formula[2])) setActive(a => ({ ...a, bActive: true }));

    }, [a, b, formula])

    useEffect(() => {
        if(aActive && bActive){
            setResultados(resultado => [...resultado, 1]);
        }
    }, [aActive, bActive, setResultados])



    return (
        <div className="text-white mb-3 contendor-formula">
            <span className="me-2">
                {formula[0]}X<sup>2</sup> + {formula[1]}X + {formula[2]}
            </span>

            <span>=</span>
            <span className="ms-2">
                (<input type="number" min="1" pattern="^[0-9]+" disabled={aActive}
                    className={`form-control ${aActive ? 'activeInput' : 'input'}`} name="a" value={a} onChange={handleInputChange} />X
                    + <input type="number" min="1" pattern="^[0-9]+" disabled={bActive}
                    className={`form-control ${bActive ? 'activeInput' : 'input'}`} name="b" value={b} onChange={handleInputChange} />)<sup>2</sup>
            </span>
            {
                aActive && bActive && <span className="ms-2 check"><i className="fas fa-check"></i></span>
            }
        </div>
    )
}
