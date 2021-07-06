/*
Se crea un componente que mantendrá el estado de autenticación del usuaurio.
se va a envolver (WRAP) a toda la aplicación a través del archivo _app.js y así la aplicación entera sabrá si el usuario está logueado o no.
*/
import React, {useEffect, useContext} from 'react';
import firebase from '../firebase';
import {Context} from '../context';

const FirebaseAuthState = ({children}) => {
    const { dispatch } = useContext(Context);
    useEffect(() =>{
        return firebase.auth().onIdTokenChanged(async (user) =>{
            if(!user){
                dispatch({
                    type: "LOGOUT",
                });
            }else{
                // dispatch({ type: "LOGIN", payload: user, // });
                const {token} = await user.getIdTokenResult();
                console.log("TOKEN", token);
                /** Enviamos este token al backend
                 * El backend checará si el token es válido (utilizando firebase admin tool)
                 * Si es verificado tu tendrá la misma información de usuario en el backend*
                 * Entonces tu decidiraś ya sea guardar el usuario en tu base de datos o actualizar el usuario existente
                 * y entonces enviaras la información del usuario de regreso al cliente*/
            }
        });
    }, []);
    return <>{children}</>
};
export default FirebaseAuthState;