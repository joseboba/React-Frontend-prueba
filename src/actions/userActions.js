import { fetchConToken } from "../service/fetch"
import Swal from "sweetalert2";
import { login } from "./authActions";
import { types } from "../types/types";

export const updateUser = ( user ) => {

    return async(dispatch, getState) =>{
        
        try {
            
            const { uid } = getState().auth.user;

            const resp = await fetchConToken(`user/${uid}`, user ,'PUT');
            const body = await resp.json();
            if(body.ok){
                Swal.fire('Actualizado', 'Datos Actualizados', 'success');
                dispatch(getUsuario());
            }else{
                Swal.fire('Error', body.msg, 'error')
            }

        } catch (error) {
            console.log(error)
        }
    }


} 

const getUsuario = () => {

    return async(dispatch, getState) => {

        const { uid } = getState().auth.user;
        
        const resp = await fetchConToken(`user/get/${uid}`);
        const body = await resp.json();
        const { email, username, name } = body.usuario;

        dispatch(login({uid ,email, username, name}))
        dispatch(updatedUser({uid, email, username, name}))

    }

}

const updatedUser = (usuario) => {

    console.log(usuario)
    return {
        type: types.updateUser,
        payload: usuario
    }

}

export const updatePassword = (old, update) => {

    return async(dispatch, getState)=>{

        const { uid } = getState().auth.user;

        try {
            
            const resp = await fetchConToken(`user/secret/${ uid }`, { old, update }, 'PUT');
            const body = await resp.json();
            console.log(body);


            if(body.ok){
                Swal.fire('Actualizado', 'Contraseña actualizada', "success")
            }else{
                Swal.fire('Error', body.msg, 'error')
            }

        } catch (error) {
            console.log(error)
        }

    }

}