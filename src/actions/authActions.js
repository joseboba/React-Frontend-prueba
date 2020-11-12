import Swal from 'sweetalert2'
import emailValidator from 'email-validator'
import { types } from '../types/types'
import { fetchConToken, fetchSinToken } from '../service/fetch' 

export const startLoginWithEmail = ( emailOrUsername, password  ) => {
    
    return async(dispatch) => {

        try {
            if(emailValidator.validate(emailOrUsername)){
                const mail = emailOrUsername;
                const resp = await fetchSinToken( 'user/auth', { email: mail, password }, 'POST' );
                const body = await resp.json();
                const { id, name, email, username } = body.usuario;
                console.log(body.usuario)
    
                if(body.ok){
                    localStorage.setItem('token', body.token);
                    localStorage.setItem('token-init-date', new Date().getTime());
                    dispatch(login({ uid: id, name, email, username }))
                }else{
                    Swal.fire('Error', body.msg, 'error');
                }
    
            }else{
    
                const user = emailOrUsername;
                const resp = await fetchSinToken( 'user/auth', { username: user, password }, 'POST' );
                const body = await resp.json();
                
                const { id, name, email, username } = body.usuario;
                console.log(body.usuario)

                if(body.ok){
                    localStorage.setItem('token', body.token);
                    localStorage.setItem('token-init-date', new Date().getTime());
                    dispatch(login({ uid: id, name, email, username }))
                }else{
                    Swal.fire('Error', body.msg, 'error');
                }
    
            }
        } catch (error) {
            console.log(error)
        }

    }


}

export const startRegister = ( nombre, correo, usuario, password ) => {

    return async(dispatch) => {

        try {
         
            const resp = await fetchSinToken( 'user/', { name: nombre, email: correo, username: usuario, password  }, 'POST');
            const body = await resp.json();
            const { id, name, email, username } = body.usuario; 
            
            if(body.ok){
                localStorage.setItem('token', body.token);
                localStorage.setItem('token-init-date', new Date().getTime());
                dispatch(login({ uid: id, name, email, username }))
            }else{
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error)
        }
    }

}

export const renewToken = () => {

    return async(dispatch) => {

        const resp = await fetchConToken('user/renew');
        const body = await resp.json();


        const { id, name, email, username } = body.usuario;

        if(body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({ uid: id, name, email, username }))
        }

    }

}

export const login = ( user ) => {
    return{
        type: types.authLogin,
        payload: user
    }
}

export const logout = () => {
    return {
        type: types.authLogout
    }
}