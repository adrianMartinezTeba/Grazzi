import React from 'react'
import './RegisterStep2.scss'
const RegisterStep2 = () => {
  return (
    <div className='registerStep2' >
      <h3 className='registerStep2__heading'>Personaliza tu cuenta</h3>
      <form className='registerStep2__form' >
        <div className='form__div--nameContainer'>
          <input placeholder='Escriba su nombre' className='input nameInput' type="text" name="" id="" />
        </div>
        <div className='form__div--birthContainer'>
        <input className='input birthInput' type="date" name="" id="" />
        </div>
        <div className='form__div--postalCodeContainer'>
        <input  placeholder='Código postal' className='input postalCodeInput'  type="tel" name="" id="" />
        </div>
        <div className='form__div--addressContainer'>
        <input placeholder='Escriba su dirección' className='input addressInput' type="text" name="" id="" />
        </div>
        <div className='form__div--buttonContainer'>
          <button className='button' onClick={() => navigate('/register/secondStep')}>Guardar</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterStep2
