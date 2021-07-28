import React from 'react';


const LoginRegisterForm = ({email, setEmail, pass, setPass, buttonName, handleSubmit}) => {
    return(
        // const loginRegisterForm = (buttonName) => (
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
                <button onClick={handleSubmit} className="btn btn-primary mt-4">
                    {buttonName}
                </button>
            </div>
        </div>
        // )
    );
}
export default LoginRegisterForm;