import React from 'react'

import './registro.css';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const Registro = () => {

    const [form, hanleInputChange] = useForm({correo: '',  usuario: '', password: '', repetirPass: ''}); 
    const { correo, usuario, password, repetirPass } = form;

    return (
        <div className="registro-body">
            <form className="form-registro p-5 px-3" autocomplete="off">
                <h5 className="text-ingresar mb-3 text-white text-center">Registrarse</h5>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" value={ correo } name="correo" 
                        id="correo" placeholder="name@example.com" onChange={ hanleInputChange }/>
                    <label for="correo"><i class="fas fa-envelope me-2"></i> Correo electronico</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" value={ usuario } name="usuario" 
                        id="usuario" placeholder="name@example.com" onChange={ hanleInputChange }/>
                    <label for="usuario"><i class="fas fa-gamepad me-2"></i>Usuario</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" value={ password } name="password"
                        id="password" placeholder="Password" onChange={ hanleInputChange } />
                    <label for="password"> <i class="fas me-2 fa-lock"></i>Contraseña</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" value={ repetirPass } name="repetirPass"
                        id="repetirPass" placeholder="Password" onChange={ hanleInputChange } />
                    <label for="repetirPass"> <i class="fas me-2 fa-lock"></i>Repetir Contraseña</label>
                </div>

                <button className="btn mb-5 w-100 btn-ingresar d-block mx-auto">Registrarse</button>

                <p className="mb-0 nuevaCuenta">¿Tienes una cuenta? <Link className="registrate-aqui" to="/login">Ingresa aqui</Link></p>
            </form>
        </div>
    )
}
