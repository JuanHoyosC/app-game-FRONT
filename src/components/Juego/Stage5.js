import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export const Stage5 = () => {

    const usuario = useSelector(state => state.auth);

    const handleClick = () => {
        localStorage.setItem('stage', '1');
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="stage5 p-5 mb-3 me-3">
                <h5 className="text-white text-center mb-4">Felicidades has completado todos los escenarios</h5>
                <div className="text-center"><i className="fas fa-trophy fa-2x"></i></div>
                <small className="me-4 d-flex align-items-center text-white"><img src="https://i.ibb.co/chR5njb/Heart.png" className="img-coin" alt="img-coin" />+ { 4 + usuario.nivel * 5 } de vida</small>
                <small className="me-4 d-flex align-items-center text-white"><img src="https://i.ibb.co/Rb7g1GR/Lightning.png" className="img-coin" alt="img-coin" />+ { 4 + usuario.nivel * 5 } de experiencia</small>
                <small className="me-4 d-flex align-items-center text-white"><img src="https://i.ibb.co/GWvsX5Q/Diamond-2.png" className="img-coin" alt="img-coin" />+ {2 * 4 + usuario.nivel} de diamante</small>
                <div className="mt-4 d-flex justify-content-center">
                    <Link to="/juego" className="btn btn-jugarAgain" onClick={ handleClick }>Jugar de nuevo</Link>
                </div>
            </div>
        </div>
    )
}
