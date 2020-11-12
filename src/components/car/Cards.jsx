import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectedCar, startDeleteCar } from '../../actions/carActions';
import '../../styles/components/car/Car.css'

export const Cards = ( car ) => {

    const carObj =  JSON.parse(JSON.stringify(car))
    const { marca, modelo, year, placa: Placa } = carObj;

    const dispatch = useDispatch();
    const { allCars } = useSelector(state => state.cars);

    const handleClick = () => {
        const select = allCars.filter( a => a.placa === Placa );
        const selected = select[0]
        const { id, marca, year, placa, modelo, estado } = selected;

        dispatch(selectedCar({id,  marca, year, placa, modelo, estado }))
    }

    const handleDelete = () => {

        const select = allCars.filter( a => a.placa === Placa );
        const selected = select[0]
        const { id } = selected;
        dispatch(selectedCar({ id }))
        dispatch(startDeleteCar())

    }


    return (
            <div className="card text-white bg-dark mb-3 tarjeta" >
                <div className="card-header"><h3> { marca } </h3></div>
                <div className="card-body">
                    <h4 className="card-title"> { modelo } </h4>
                    <p className="card-text"> Año - { year }  </p>
                    <p className="card-text"> Placa - { Placa }  </p>
                </div>

                <div className="form-group">
                    <Link  className="link-no" to="/car/update"> 
                        <button className="btn btn-outline-primary btn-block" onClick={ handleClick }> Editar </button> 
                    </Link>
                </div>
                <div className="form-group">
                    <button className="btn btn-outline-danger btn-block" onClick={ handleDelete }> Eliminar </button>
                </div>
            </div>
    )
}
