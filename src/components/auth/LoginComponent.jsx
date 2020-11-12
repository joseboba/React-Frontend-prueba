import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useForm } from '../../hooks/useForm'
import { startLoginWithEmail } from '../../actions/authActions'
import '../../styles/components/auth/Login.css'

export const LoginComponent = () => {

    const [ formValues, handleInputChange ] = useForm({
        emailOrUsername: 'jebobadilla18',
        password: '123456',
    })
    const { emailOrUsername, password } = formValues;
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if( emailOrUsername.length > 4 && emailOrUsername !== '' ){
            if(password.length >= 6 && password !== ''){
                dispatch( startLoginWithEmail( emailOrUsername, password ) )
            }else{
                Swal.fire('Error', 'Faltan datos para el inicio de sesion', 'error');
            }
        }else{
            Swal.fire('Error', 'Faltan datos para el inicio de sesion', 'error');
        }
    }

    return (
        <>
            <div className="row justify-content-center align-content-center vh-100">
                    <form className="col-9 container" onSubmit={ handleSubmit }>

                        <div className="form-group">
                            <label> Email o Username </label>
                            <input  
                                type="text"
                                className="form-control" 
                                name="emailOrUsername"
                                autoComplete="off"
                                value={ emailOrUsername }
                                onChange={ handleInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <label> Password </label>
                            <input  
                                type="password"
                                className="form-control" 
                                name="password"
                                autoComplete="off"
                                value={ password }
                                onChange={ handleInputChange }
                            />
                        </div>


                        <div className="form-group">
                            <button className="btn btn-primary btn-login btn-block" type="submit"> Iniciar Sesión </button>
                            <Link className="btn btn-danger btn-login btn-block" to="/auth/register"> Crear Cuenta </Link>
                        </div>
                        
                       

                    </form>
               </div>
        </>
    )
}


