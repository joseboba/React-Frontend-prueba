import React from 'react'
import { estadoOp } from '../../assets/options/options'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import '../../styles/components/car/Car.css'
import { startSaveCar } from '../../actions/carActions';
import Swal from 'sweetalert2';

export const CreateCar = () => {
   
    const initValues = {
        marca: '',
        modelo: '',
        year: '',
        placa: '',
        estado: ''
    }
    const [formValues, handleInputChange, resetValues] = useForm(initValues)

    const { marca, modelo, year, placa, estado } = formValues;
    const dispatch = useDispatch()

    const handleSumbit = (e) => {
        e.preventDefault();
        
        if(marca.length >= 5 && modelo.length >= 2 && year.length >=4 && placa.length >= 5 && estado !== ''){
            dispatch(startSaveCar(formValues));
            resetValues();
        }else{
            Swal.fire('Error', 'Los datos no estan correctos', 'error')
        }

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
                        />
                    </div>

                    <div className="form-group">
                        <select className="btn btn-info dropdown-toggle btn-block"  name="estado" value={estado} onChange={handleInputChange}>
                            { estadoOp.map( op => (
                                    <option className="dropdown-item letra" key={ op }> { op } </option> 
                            ))}
                        </select>
                    </div>


                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit"> Guardar Carro </button>
                    </div>

                </form>
           </div>

        </>
    )
}
