import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../actions/carActions';
import { Cards } from './Cards';

export const AllCars = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCars());
    }, [dispatch])

    const { allCars } = useSelector(state => state.cars)


    return (
        <div>
            {
                allCars.map( 
                    c => (
                        <Cards  key={ c.placa } { ...c } />
                    )
                )
            }
        </div>
    )
}
