import firebase from "../firebase";
import {useState} from 'react';
import { useRouter } from "next/router";
const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const router = useRouter();
    //Funcion para registro
    const register = () => {    }
    //Funcion para el login
    const login = () => {    }

    const loginRegisterForm = (buttonName) => (
        <div className="col-md-6">
                {/* Email */}
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} className="form-control"/>
                    <small>Nunca compartiremos tu email con terceros</small>
                </div>
                {/* Password */}
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={e => setPass(e.target.value)} value={pass} className="form-control"/>
                </div>
                {/* Botón */}
                <div> 
                    <button onClick={register} className="btn btn-primary mt-4">
                        {buttonName}
                    </button>
                </div>
            </div>
    )

    return(
        <div className="container">
            <h2 className="text-center pt-4 display-4 mb-4">Login/Registro</h2>
            <div className="row">
                {loginRegisterForm('Login')}
                {loginRegisterForm('Regístrate')}
            </div>
        </div>
    )
}
export default Login;