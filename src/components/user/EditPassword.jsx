import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { updatePassword } from '../../actions/userActions';
import { useForm } from '../../hooks/useForm'

export const EditPassword = () => {

    const dispatch = useDispatch();
    const [ formValues, handleInputChange ] = useForm({ oldPassword: '', newPassword: '', newPassword2: '' });
    const{ oldPassword,  newPassword, newPassword2} = formValues;


    const handleSumbit = (e) =>{
        e.preventDefault();

        if( newPassword.length >= 6 && oldPassword.length >= 6 && newPassword2.length >= 6 ){
            if(newPassword === newPassword2){
                dispatch(updatePassword(oldPassword, newPassword))
            }else{
                Swal.fire('Error', 'Las nuevas contraseñas no coinciden', 'error')
            }
        }else{
            Swal.fire('Error', 'Contraseña muy corta', 'error')
        }


    }

    return (
        <>

           <div className="row justify-content-center align-content-center vh-100">
                <form className="col-9 container" onSubmit={ handleSumbit }>

                    <div className="form-group">
                        <label> Contraseña Actual </label>
                        <input  
                            type="password"
                            className="form-control" 
                            name="oldPassword"
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ oldPassword }
                            placeholder="Ingresa la contraseña actual"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label> Nueva contraseña </label>
                        <input  
                            type="password"
                            className="form-control" 
                            name="newPassword"
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ newPassword }
                            placeholder="Nueva contraseña"
                        />
                    </div>

                    <div className="form-group">
                        <label> Confirme la contraseña </label>
                        <input  
                            type="password"
                            className="form-control" 
                            name="newPassword2"
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ newPassword2 }
                            placeholder="Confirma tu nueva contraeña"
                        />
                    </div>

                
                    <button className="btn btn-primary btn-block" type="submit"> Actualizar </button>
                    <Link className="btn btn-danger btn-block" to="/user"> Regresar </Link>
                

                </form>



           </div>

        </>
    )
}
