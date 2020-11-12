import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { carReducer } from "./carReducer";
import { userReducer } from "./userReducer";



export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    cars: carReducer
})