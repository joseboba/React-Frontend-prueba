import React from 'react'
import { useDispatch } from 'react-redux';
import { searchCar } from '../../actions/carActions';
import { useForm } from '../../hooks/useForm';
import  '../../styles/components/search/Search.css'
import { FindCars } from '../car/FindCars';

export const Search = () => {

    const dispatch = useDispatch();
    const [ formValues, handleInputChange ] = useForm({placa: ''})
    const { placa } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchCar(placa));
    }

    return (
        <div>
            <form className="box-search" onSubmit={ handleSubmit }>
                 <input
                    className="form-control mr-sm-2"
                    name="placa"
                    value={ placa }
                    onChange={ handleInputChange }
                    type="text"
                    placeholder="Busqueda por placa"
                />
            </form>

            <FindCars />
        </div>
    )
}
