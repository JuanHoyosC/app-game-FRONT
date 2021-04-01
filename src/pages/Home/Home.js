import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import './home.css';

import { NavBar } from '../../components/shared/NavBar/NavBar';
import { Habitos } from './Habitos/Habitos';
import { Misiones } from './Misiones/Misiones';
import { Tienda } from './Tienda/Tienda';
import { Todo } from './Todo/Todo';
import { Footer } from '../../components/shared/Footer/Footer';
import { Añadir } from './Añadir/Añadir';

export const Home = () => {
    return (
        <div className="bg-home">
            <BrowserRouter>
                <div>
                    <NavBar />
                    <div className="container-fluid mt-4 home">
                        <Switch>
                            <Route exact path="/misiones" component={Misiones} />
                            <Route exact path="/habitos" component={Habitos} />
                            <Route exact path="/tienda" component={Tienda} />
                            <Route exact path="/agregar" component={Añadir} />
                            <Redirect to="/habitos" />
                        </Switch>
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
