import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import { Login } from '../pages/Login/Login';
import { Registro } from '../pages/Registro/Registro';
import { App } from '../pages/App';

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={ Login }/>
                <Route exact path="/registro" component={ Registro }/>
                <Route path="/" component={ App } />
            </Switch>
        </BrowserRouter>
    )
}
