import firebase from "../firebase";
import {useState} from 'react';
import { useRouter } from "next/router";
import LoginRegisterForm from "../components/LoginRegisterForm"
import { toast } from 'react-toastify';

const Login = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPass, setLoginPass] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPass, setRegisterPass] = useState('')
    const router = useRouter();
    //Funcion para registro
    const register = async () => { 
        // console.log(registerEmail, registerPass)
        await firebase.auth().createUserWithEmailAndPassword(registerEmail, registerPass)
        .then((user) => {
            console.log("REGISTER", user);
            toast('El registro fue exitoso')
        })
        .catch((err) =>{
            console.log(err)
            toast(err.message)
        })
    }
    //Funcion para el login
    const login = async () => {    
        // console.log(loginEmail, loginPass)
        await firebase.auth().signInWithEmailAndPassword(loginEmail, loginPass)
        .then((user) =>{
            console.log('LOGIN', user)
            toast('Bienvenido')

        })
        .catch((err) =>{
            console.log(err)
            toast(err.message)
        })
    }

    return(
        <div className="container">
            <h2 className="text-center pt-4 display-4 mb-4">Login/Registro</h2>
            <div className="row">
                <LoginRegisterForm email={loginEmail} setEmail={setLoginEmail} pass={loginPass} setPass={setLoginPass} handleSubmit={login} buttonName="Login" />
                <LoginRegisterForm email={registerEmail} setEmail={setRegisterEmail} pass={registerPass} setPass={setRegisterPass} handleSubmit={register} buttonName="Registro" />
            </div>
        </div>
    )
}
export default Login;