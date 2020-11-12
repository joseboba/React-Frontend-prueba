import { types } from '../types/types';
const initState = {
    allCars: [],
    findCars: [],
    selected: null
 }

export const carReducer = ( state = initState, action ) => {

    switch (action.type) {

        case types.getCars:
            return {
                ...state,
                allCars: action.payload
            }

        case types.saveCar:
            return {
                ...state,
                allCars: [
                    ...state.allCars,
                    action.payload
                ]
            }
    
        case types.selectedCar:
            return{
                ...state,
                selected: action.payload
            }

        case types.cleanSelect:
            return{
                ...state,
                selected: null
            }
        
        case types.updateCar:
            return{
                ...state,
                allCars: state.allCars.map(
                    c => (c.id === action.payload.id) ? action.payload : c
                )
            }

        case types.deleteCar: 
            return{
                ...state,
                allCars: state.allCars.filter(
                    c => c.id !== action.payload.id
                )
            }

        case types.found:
            return{
                ...state,
                findCars: action.payload
            }

        default:
            return state;
    }

} 