import React from 'react'
import './NewsNavBar.scss'
import navBarNNovedades from '../../../../assets/imgNavBar/navBarNNovedades.jpg'
import navBarNJeans from '../../../../assets/imgNavBar/navBarNJeans.jpg'
import navBarNVestidos from '../../../../assets/imgNavBar/navBarNVestidos.jpg'
import navBarNPolos from '../../../../assets/imgNavBar/navBarNPolos.jpg'
const NewsNavBar = () => {
  return (
    <div className='newsNavBar-container'>
      <div className='newsNavBar-card'>
        <h3>NOVEDADES</h3>
        <img className='img-navBar' src={navBarNNovedades} alt="" />
      </div>
      <div className='newsNavBar-card'>
        <h3>NUEVOS VESTIDOS</h3>
        <img className='img-navBar'  src={navBarNVestidos} alt="" />
      </div>
      <div className='newsNavBar-card'>
        <h3>NUEVOS POLOS</h3>
        <img  className='img-navBar'  src={navBarNPolos} alt="" />
      </div>
      <div className='newsNavBar-card'>
        <h3>NUEVOS JEANS</h3>
        <img className='img-navBar'  src={navBarNJeans} alt="" />
      </div>
    </div>
  )
}

export default NewsNavBar
