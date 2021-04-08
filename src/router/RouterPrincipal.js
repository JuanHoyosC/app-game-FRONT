import React, { useEffect, useReducer } from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import { Login } from '../pages/Login/Login';
import { Registro } from '../pages/Registro/Registro';
import { App } from '../pages/App';
import { AuthContext } from '../auth/AuthContext';
import { authReducer } from '../auth/authReducer';
import { PrivateRoutes } from './PrivateRoutes';
import jwt_decode from "jwt-decode"
import { habitoReducer } from '../reducers/habitoReducer';
import { useGetHabitos } from '../hooks/useGetHabitos';

const init = () => {
    const token = localStorage.getItem('appToken');
    if(token){
        const decoded = jwt_decode(token);
        return ({ logged: true, user: { ...decoded.token }});
    }

    return ({ logged: false });
}

export const RouterPrincipal = () => {

    const [habitos, dispatchHabitos] = useReducer(habitoReducer, []);

    //UseReducer habitos
    const [user, dispatch] = useReducer(authReducer, {}, init)
    const [habitosInit] = useGetHabitos(user.user._id);

    useEffect(() => {
        dispatchHabitos({ type: '', payload: habitosInit });
    }, [habitosInit, dispatchHabitos])

    return (

        <BrowserRouter>
            <AuthContext.Provider value={{ user, dispatch, dispatchHabitos, habitos }}>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/registro" component={Registro} />
                    <PrivateRoutes path="/" isAuthenticated={ user.logged } component={ App } />
                </Switch>
            </AuthContext.Provider>
        </BrowserRouter>
    )
}
