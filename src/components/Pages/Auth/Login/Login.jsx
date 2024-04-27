import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { IoEyeOutline,IoEyeOffOutline  } from "react-icons/io5";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [keepLogged, setKeepLogged] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
const login = () => {
  console.log(email, password, keepLogged);
  if(keepLogged){
    localStorage.setItem('token','token');
  }
}
const handleEmailChange = (event) => {
  setEmail(event.target.value);
}
const handlePasswordChange = (event) => {
  setPassword(event.target.value);
}
useEffect(() => {
  console.log(email, password, keepLogged);
},[email, password, keepLogged])
  return (
    <div className='login__container'>
      <h3 className='login__title'>Iniciar sesión</h3>
      <form  className='login__form'>
        <div className='login__form__emailContainer'>
          <input
            onChange={handleEmailChange}
            className='login__formEmail'
            type="email"
            name="email"
            id='email'
            placeholder='E-mail'
          />
        </div>
        <div className="login__form__passwordContainer">
          <input
            onChange={handlePasswordChange}
            className='login__formPassword'
            type={showPassword ? "text" : "password"}
            name="password"
            id=""
            placeholder='Contraseña'
          />
          <span
          className='login__passwordIcon'
            onClick={togglePasswordVisibility}
          >{showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}</span>
        </div>
        <div className='login__form__checkboxContainer'> 
          <input
            onChange={() => setKeepLogged(!keepLogged)}
            className='login__formCheckbox'
            type="checkbox"
            name="remember"
            id="remember"
          />
          <label className='login__formCheckboxLabel' htmlFor="remember">Mantener la sesión iniciada</label>
        </div>
        <div className='login__form__buttonContainer'>
          <button onClick={login} className='login__formLoginButton'>Iniciar sesión</button>
          <div className='login__formLinkRegister'>
            <Link  to="/register">Crear cuenta</Link>
          </div>
          <div className='login__formLinkForgotPassword'>
            <Link to="/forgotPassword">¿Has olvidado tu contraseña?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
