import { createStore, combineReducers } from 'redux';
import { habitoReducer } from '../reducers/habitoReducer';
import { authReducer } from '../reducers/authReducer';
import { misionReducer } from '../reducers/misionReducer';

const reducers = combineReducers({
    habitos: habitoReducer,
    misiones: misionReducer,
    auth: authReducer
})


export const store = createStore( 
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);