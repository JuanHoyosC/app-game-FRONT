import React from 'react'
import './notFound.css';

import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className="page-not-found d-flex flex-direction-column justify-content-center">
            <h3 className="mb-3 text-center">Página no encontrada</h3>
                <img src="https://i.ibb.co/Pm7vvyH/109db84f5da26db72c60783324a90bdd.png" className="not-found" alt="not-found" />
                <Link to="/" className="btn btn-inicio mt-3">Inicio</Link>
        </div>
    )
}
