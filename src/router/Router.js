import React from 'react'

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Login }  from '../pages/Login';
import { Registro }  from '../pages/Registro';
import { Home }  from '../pages/Home/Home';

export const Router = () => {
    return (
        <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={ Login  } />
                    <Route exact path="/registro" component={ Registro  } />
                    <Route exact path="/" component={ Home  } />
                    <Redirect to="/" />
                </Switch>
        </BrowserRouter>
    )
}
