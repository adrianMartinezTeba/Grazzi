import React from 'react'
import modaRapidaVsModaLentaSostenible from '../../assets/imagenesHome/modaRapidaVsModaLentaSostenible.jpg'
import './Home.scss'
const Home = () => {
  return (
    <div className='home-container'>
      <div className='tono-carmin-container'>
        <img src={modaRapidaVsModaLentaSostenible} alt="" className='tono-carmin' />
      </div>
    </div>
  )
}

export default Home
