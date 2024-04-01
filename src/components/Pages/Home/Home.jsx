import React from 'react'
import modaRapidaVsModaLentaSostenible from '../../../assets/imagenesHome/modaRapidaVsModaLentaSostenible.jpg'
import './Home.scss'
import NavBar from '../../NavBar/NavBar'
const Home = () => {
  return (
    <div className='home-container'>
      <NavBar/>
      <div className='tono-carmin-container'>
        <img src={modaRapidaVsModaLentaSostenible} alt="" className='tono-carmin' />
      </div>
      <div style={{height: '10px'}}></div>
      <div onClick={() => console.log('click')} className='tono-carmin-container'>
        <img src={modaRapidaVsModaLentaSostenible} alt="" className='tono-carmin' />
      </div>
      <div style={{height: '10px'}}></div>
      <div className='tono-carmin-container'>
        <img src={modaRapidaVsModaLentaSostenible} alt="" className='tono-carmin' />
      </div>
      <div style={{height: '10px'}}></div>
      <div className='tono-carmin-container'>
        <img src={modaRapidaVsModaLentaSostenible} alt="" className='tono-carmin' />
      </div>
      <div style={{height: '10px'}}></div>
    </div>
  )
}

export default Home
