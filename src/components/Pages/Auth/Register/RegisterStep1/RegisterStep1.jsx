import React, { useEffect, useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import './RegisterStep1.scss'; // Importa tu archivo CSS
import PhoneInput from 'react-phone-number-input/min';
import es from 'react-phone-number-input/locale/es';
import { Link } from 'react-router-dom';
// import 'react-phone-number-input/style.css'
const RegisterStep1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [country, setCountry] = useState('ES');
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    console.log(email, password, mobileNumber, es, country);
  }, [email, password, mobileNumber]);

  return (
    <div className='registerStep1'>
      <h3 className='registerStep1__heading'>Crear cuenta</h3>
      <form className='registerStep1__form'>
        <div className='form__div--emailContainer'>
          <input
            onChange={handleEmailChange}
            className='input emailInput'
            type="email"
            name="email"
            id='email'
            placeholder='E-mail'
          />
        </div>
        <div className="form__div--passwordContainer">
          <input
            onChange={handlePasswordChange}
            className='input passwordInput'
            type={showPassword ? "text" : "password"}
            name="password"
            id=""
            placeholder='Contraseña'
          />
          <span
            className='passwordIcon'
            onClick={togglePasswordVisibility}
          >{showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}</span>
        </div>
        <div className='form__div--mobileContainer'>
          {/* <CustomSelectCountry
            labels={es}
            value={country}
            onChange={setCountry}
          /> */}
          <PhoneInput
            labels={es}
            international
            placeholder="Número de teléfono"
            defaultCountry='ES'
            country={country}
            value={mobileNumber}
            onChange={setMobileNumber} />
        </div>
        <div className="form__div--spamContainer">
          <input
            className='input checkbox'
            type="checkbox"
            name="remember"
            id="remember"
          />
          <label className='input checkbox--label' htmlFor="remember">Recibir promociones, novedades y contenido personalizados</label>
        </div>
        <div className='form__div--buttonContainer'>
          <button className='button' onClick={() => navigate('/register/secondStep')}>Crear cuenta</button>
        </div>
        <div className='form__div--linkLogin'>
          <p>¿Ya tienes una cuenta?<Link to="/login">Iniciar sesión</Link></p>
        </div>
        <div className='form__div--policy'>
          <p>Al crear una cuenta y suscribirte,confirmas que has leído la <Link to="/policy">política de privacidad</Link> y aceptas las <Link to="/terms">condiciones de venta.</Link></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterStep1;