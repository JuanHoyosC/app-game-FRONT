import { useState } from 'react'
import { alertaWarning, alertaError } from '../services/alertas';
import { URL_BACKEND } from '../URL_BACKEND';

export const useRegistro = (form, handleReset) => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const [status, mensaje] = verificar();
        if(!status){
            alertaWarning(mensaje);
            setLoading(false);
            return ;
        }
        
        fetch(`${ URL_BACKEND }/register`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(form) })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                if(!data.continuar){ alertaWarning(data.mensaje); return ;}
                handleReset();
            })
            .catch(() => { 
                setLoading(false);
                alertaError('Hubo un error');
            })
    }


    const verificar = () => {
       const { correo, username, password, repetirPass, nombre, apellidos, foto } = form;
       if(correo.length < 5 ) return [false, 'El correo es invalido' ];
       if(username.length < 5) return [false, 'El usuario debe tener minimo 5 caracteres'];
       if(password < 6 ) return [false, 'La contraseña es muy corta'];
       if(password !== repetirPass) return [false, 'Las contraseña no coinciden'];
       if(nombre.length < 2) return [false, 'El nombre es muy corto'];
       if(apellidos.length < 1) return [false, 'Apellidos son muy corto'];
       if(foto.length < 1) return [false, 'No has ingresado una foto'];

       return [true, 'Registro exitoso'];
    }

    return [handleSubmit, loading];

}
