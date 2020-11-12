import { types } from "../types/types";
const initstate = { userUpdate: null }

export const userReducer = ( state = initstate, action ) => {

    switch (action.type) {
        case types.updateUser:
            return{
                ...state,
                userUpdate: action.payload,
            }
            
    
        default:
            return state;
    }



}