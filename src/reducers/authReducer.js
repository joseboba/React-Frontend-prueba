import { types } from "../types/types";
const initState = {
    login: false,
    user: {
        uid: null
    }
}



export const authReducer = ( state = initState, action ) => {

    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                user: action.payload,
                login: true
            }

        case types.authLogout: 
            return initState
        
    
        default:
            return state;
    }


}