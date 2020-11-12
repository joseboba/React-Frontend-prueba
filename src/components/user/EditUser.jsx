import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { updateUser } from '../../actions/userActions'
import { useForm } from '../../hooks/useForm'
import '../../styles/components/user/EditUser.css'

export const EditUser = () => {

    
    const { name: Nombre, email: Correo, username: Usuario } = useSelector( state => state.auth.user)

    const [formValues, handleInputChange] = useForm({ name: '', email: '', username: ''})
    const { name , email , username } = formValues;

    const dispatch = useDispatch()


    const handleSumbit = (e) => {
        e.preventDefault();
        if(name === '' && email === '' && username === ''){
            Swal.fire('Error', 'Los campos estan vacios', 'error')
        }else{
            dispatch(updateUser(formValues));
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
                            placeholder={ Nombre }
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
                            placeholder={ Correo }
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
                            placeholder={ Usuario }
                        />
                    </div>

                <div>
                    <button className="btn btn-primary btn-block" type="submit"> Actualizar </button>
                    <Link className="btn btn-danger btn-block" to="/user/password" > Actualizar Contraseña </Link>
                </div>

                </form>



           </div>

        </>
    )
}
