import React from 'react'
import emailValidator from 'email-validator';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { startRegister } from '../../actions/authActions';

export const RegisterComponent = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        username: '',
        password: '',
        password2: ''
    })

    const { name, email, username, password, password2 } = formValues;
    const dispatch = useDispatch()

    const handleSumbit = (e) => {
        e.preventDefault();
        
        if( emailValidator.validate(email) && email.length > 0 && name.length >= 4 && username.length >= 5 ){
            if(password.length >= 6 && ( password === password2 )){
                dispatch(startRegister(name, email, username, password))
            }else{
                Swal.fire('Error', 'Las contraseñas no coinciden', 'error')
            }
        }else{
            Swal.fire('Error', 'Faltan datos o estan incorrectos');
        }


    }

    return (
        <>

           <div className="row justify-content-center align-content-center vh-100">
                <form className="col-9 container" onSubmit={ handleSumbit }>

                    <div className="form-group">
                        <label> Name </label>
                        <input  
                            type="text"
                            className="form-control" 
                            name="name"
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ name }
                        />
                    </div>
                    
                    <div className="form-group">
                        <label> Email </label>
                        <input  
                            type="text"
                            className="form-control" 
                            name="email"
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ email }
                        />
                    </div>

                    <div className="form-group">
                        <label> Username </label>
                        <input  
                            type="text"
                            className="form-control" 
                            name="username"
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ username }
                        />
                    </div>

                    <div className="form-group">
                        <label> Password </label>
                        <input  
                            type="password"
                            className="form-control" 
                            name="password"
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ password }
                        />
                    </div>

                    <div className="form-group">
                        <label> Confirm your password </label>
                        <input  
                            type="password"
                            className="form-control" 
                            name="password2"
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ password2 }
                        />
                    </div>



                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit"> Crear Cuenta </button>
                        <Link className="btn btn-danger btn-block" to="/auth/login"> Iniciar Sesión </Link>
                    </div>

                </form>
           </div>

        </>
    )
}
