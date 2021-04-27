import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch } from "react-router-dom";
import { Login } from '../pages/Login/Login';
import { Registro } from '../pages/Registro/Registro';
import { App } from '../pages/App';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { getUser } from '../services/getUser';
import { useDispatch, useSelector } from 'react-redux';
import './routerPrincipal.css'

export const RouterPrincipal = () => {
    const [checking, setChecking] = useState(true);
    const dispatch = useDispatch();
    const usuario = useSelector(state => state.auth);

    useEffect(() => {
        getUser( dispatch ).then(() => setChecking(false))
            .catch(() => setChecking(false));
    }, [ dispatch ])

    if (checking) {
        return (
            <div className="loading-page">
                <img src="https://i.ibb.co/Cw6yJ8N/dribbble-1.gif" alt="imagen-loading" className="imagen-loading"/>
            </div>
        );
    }


    return (

        <BrowserRouter>
                    <Switch>
                        <PublicRoutes exact path="/login" isAuthenticated={usuario.logged} component={Login} />
                        <PublicRoutes exact path="/registro" isAuthenticated={usuario.logged} component={Registro} />
                        <PrivateRoutes path="/" isAuthenticated={usuario.logged} component={App} />
                    </Switch>
        </BrowserRouter>
    )
}
