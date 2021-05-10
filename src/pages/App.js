import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import './app.css';

import { NavBar } from '../components/shared/NavBar/NavBar';
import { Habitos } from './Home/Habitos/Habitos';
import { Misiones } from './Home/Misiones/Misiones';
import { Tienda } from './Home/Tienda/Tienda';
import { Footer } from '../components/shared/Footer/Footer';
import { Añadir } from './Home/Añadir/Añadir';
import { Mensajes } from '../components/shared/Mensajes/Mensajes';
import { Clasificatoria } from './Home/Clasificatoria/Clasificatoria';
import { ModalCrear } from '../components/Habitos/ModalCrear';
import { NotFound } from '../pages/Home/NotFound/NotFound'
import { FiltroModal } from '../components/Habitos/FiltroModal';
import { Juegos } from './Home/Juego/Juegos';


export const App = () => {
    return (
        <>
            <div className="bg-home">
                <div>
                    <NavBar />
                    <div className="container-fluid mt-4 home">
                        <Switch>
                            <Route exact path="/misiones" component={Misiones} />
                            <Route exact path="/tienda" component={Tienda} />
                            <Route exact path="/agregar" component={Añadir} />
                            <Route exact path="/juego" component={Juegos} />
                            <Route exact path="/clasificatoria" component={Clasificatoria} />
                            <Route path="/notFound" component={NotFound} />
                            <Route exact path="/" component={Habitos} />
                            <Redirect to="/notFound" />
                        </Switch>
                    </div>
                </div>
                <ModalCrear />
                <FiltroModal />
                <Mensajes />
                <Footer />
            </div>
        </>
    )
}
