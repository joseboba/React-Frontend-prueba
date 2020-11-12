import React from 'react'
import { useSelector } from 'react-redux';
import { Cards } from './Cards';

export const FindCars = () => {

    const { findCars } = useSelector(state => state.cars)

    return (
        <div>
            {
                findCars.map( 
                    c => (
                        <Cards  key={ c.placa } { ...c } />
                    )
                )
            }
        </div>
    )
}
