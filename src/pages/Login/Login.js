import React from 'react'
import { Link } from 'react-router-dom';
import './login.css';
import { useForm } from '../../hooks/useForm';
export const Login = () => {

    const [form, hanleInputChange] = useForm({correo: '', password: ''}); 
    const { login, password } = form;

    return (
        <div className="login-body">
            <form className="form-login p-5 px-3" autocomplete="off">
                <h5 className="text-ingresar mb-3 text-white text-center">Ingresar</h5>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" value={ login } name="correo" 
                        id="correo" placeholder="name@example.com" onChange={ hanleInputChange }/>
                    <label for="correo"><i class="fas fa-envelope me-2"></i> Correo electronico</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" value={ password } name="password"
                        id="password" placeholder="Password" onChange={ hanleInputChange } />
                    <label for="password"> <i class="fas me-2 fa-lock"></i>Contraseña</label>
                </div>

                <button className="btn mb-5 w-100 btn-ingresar d-block mx-auto">Ingresar</button>

                <p className="mb-0 nuevaCuenta">¿No tienes una cuenta? <Link className="registrate-aqui" to="/registro">Registrate aqui</Link></p>
            </form>
        </div>
    )
}
