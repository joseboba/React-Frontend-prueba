import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {  updateCar } from '../../actions/carActions';
import { estadoOp } from '../../assets/options/options';
import { useForm } from '../../hooks/useForm'

export const EditCar = () => {

    const dispatch = useDispatch()

    const { selected } = useSelector(state => state.cars)
    const { marca: Marca, modelo: Mo, year: Y, placa: P, estado: E} = selected;

    const [ formValues, handleInputChange ] = useForm({marca: Marca, modelo: Mo, year: Y, placa: P, estado: E});
    const { marca, modelo, year, placa, estado} = formValues;


    const handleSumbit = (e) => {
        e.preventDefault();
        if(placa.length <= 4 || marca.length <= 2 || year.length <= 3 || estado.length <= 3 || modelo.length <= 0 ){
            Swal.fire('Error', 'No puedes dejar campos vacios', 'error')
        }

        dispatch(updateCar(formValues))

    }


    return (
        <>

           <div className="row justify-content-center align-content-center vh-100">
                <form className="col-9 container" onSubmit={ handleSumbit }>

                    <div className="form-group">
                        <label> Marca </label>
                        <input  
                            type="text"
                            className="form-control" 
                            name="marca"
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ marca }
                            

                        />
                    </div>
                    
                    <div className="form-group">
                        <label> Modelo </label>
                        <input  
                            type="text"
                            className="form-control" 
                            name="modelo"
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ modelo }
                            
                        />
                    </div>

                    <div className="form-group">
                        <label> Año </label>
                        <input  
                            type="text"
                            className="form-control" 
                            name="year"
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ year }
                        />
                    </div>

                    <div className="form-group">
                        <label> Placa </label>
                        <input  
                            type="text"
                            className="form-control" 
                            name="placa"
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ placa }
                            placeholder={`${P} - (Si la deseas cambiar tienes que escribir)`}
                        />
                    </div>

                    <div className="form-group">
                        <select className="btn btn-info dropdown-toggle btn-block" placeholder={ E } name="estado" value={estado} onChange={handleInputChange}>
                            { estadoOp.map( op => (
                                    <option className="dropdown-item letra" key={ op }> { op } </option> 
                            ))}
                        </select>
                    </div>


                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit"> Guardar Carro </button>
                    </div>


                    <div className="form-group">
                        <Link  className="btn btn-danger btn-block" to="/"> Regresar </Link>
                    </div>
                </form>
           </div>

        </>
    )
}
