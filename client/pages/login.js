import firebase from "../firebase";
import {useState} from 'react';
import { useRouter } from "next/router";
import LoginRegisterForm from "../components/LoginRegisterForm"
import { toast } from 'react-toastify';
import {Button} from 'antd';
import {GoogleOutlined} from '@ant-design/icons'; 

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

    //Funcion para Google Login
    const googleLogin = async () =>{
        await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((user) =>{
            console.log('LOGIN', user)
            toast('Bienvenido')

        })
        .catch((err) =>{
            console.log(err)
            toast(err.message)
        })
    };

    return(
        <div className="container">
            <h2 className="text-center pt-4 display-4 mb-4">Login/Registro</h2>
            <Button onClick={googleLogin} className="mb-3 col-xl-3 offset-md-0" type="danger" shape="round" icon={<GoogleOutlined/>} size="large" block>Login with Google</Button>

            <div className="row">
                <LoginRegisterForm email={loginEmail} setEmail={setLoginEmail} pass={loginPass} setPass={setLoginPass} handleSubmit={login} buttonName="Login" />
                <LoginRegisterForm email={registerEmail} setEmail={setRegisterEmail} pass={registerPass} setPass={setRegisterPass} handleSubmit={register} buttonName="Registro" />
            </div>
        </div>
    )
}
export default Login;