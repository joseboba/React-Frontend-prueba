import Swal from "sweetalert2";
import { fetchConToken } from "../service/fetch"
import { types } from "../types/types";



export const getCars = () => {

    return async(dispatch) => {

        try {

            const resp = await fetchConToken('car/');
            const body = await resp.json();

            if(body.ok){
                dispatch(findAllCars(body.registros))
            }else{
                Swal.fire('Error', body.msg, 'error')
            }
            
        } catch (error) {
            console.log(error)
        }


    }

}


const findAllCars = (cars) =>{

    return {

        type: types.getCars,
        payload: cars

    }

}

export const startSaveCar = ( car ) => {

    return async(dispatch) => {

        try {
            
            const resp = await fetchConToken('car/', car, 'POST');
            const body = await resp.json();

            if(body.ok){
                Swal.fire('Guardado', 'Se ha registrado el carro', 'success');
                dispatch(saveCar(car))
            }else{
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error)
        }

    }

}

export const selectedCar = (car) => {

    return{

        type: types.selectedCar,
        payload: car

    }
}

export const cleanSelect = () => {

    return {
        type: types.cleanSelect
    }

}

const saveCar = (car) => {

    return{
        type: types.saveCar,
        payload: car
    }

}


export const updateCar = (car) => {

    return async(dispatch, getState) =>{
        
        const { id } = getState().cars.selected;
        const { marca, modelo, year, placa, estado } = car;

        try {
            
            const resp = await fetchConToken(`car/${id}`, car, 'PUT');
                const body = await resp.json();
    
                if(body.ok){
                    Swal.fire('Actualizado', body.msg, 'success');
                    dispatch(updated({ id, marca, modelo, year, placa, estado }))
                }else{
                    Swal.fire('Error', body.msg, 'error')
                }
    

        } catch (error) {
            console.log(error)
        }
    
    }

}

const updated = (car) => {

    return {
        type: types.updateCar,
        payload: car
    }

}

export const startDeleteCar = () =>{

    return async(dispatch, getState) => {

        const { id } = getState().cars.selected;

        try {
            
            const resp = await fetchConToken(`car/${id}`, {}, 'DELETE')
            const body = await resp.json();

            if(body.ok){
                Swal.fire('Eliminado', body.msg, 'success')
                dispatch(deleteCar(id));
                dispatch(cleanSelect());
            }else{
                Swal.fire('Error', body.msg, 'error')
            }

        } catch (error) {
            console.log(error)
        }

    }

}

const deleteCar = (id) => {

    return{
        type: types.deleteCar,
        payload: { 
            id 
        }
    }

}

export const searchCar = (placa) => {

    return async(dispatch) => {

        console.log(placa)
        const resp = await fetchConToken(`car/search/${placa}`, placa );
        const body = await resp.json();

        if(body.ok){
            dispatch(found(body.registros))
        }else{
            Swal.fire('Error', body.msg, 'error')
        }

    }

}

const found = (registros) => {
    return {
        type: types.found,
        payload: registros
    }
}