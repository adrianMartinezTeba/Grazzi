import React from 'react'
import './MenNavBar.scss'
import navBarMPolos from '../../../../assets/imgNavBar/navBarHPolos.jpg'
import navBarMJeans from '../../../../assets/imgNavBar/navBarHJeans.jpg'
import navBarMCamisetas from '../../../../assets/imgNavBar/navBarHCamisetas.jpg'
import { Link } from 'react-router-dom'
const MenNavBar = () => {
  return (
    <div className='menNavBar-container'>
      <div className='menNavBar-firstPart'>
        <div className='menNavBar-text'>
          <h4>ROPA HOMBRE</h4>
          <Link className='navBarLink-subMenuMen' to='/men/polos'>Polos</Link>
          <Link className='navBarLink-subMenuMen' to='/men/jeans'>Jeans</Link>
        </div>
        <div className='menNavBar-text'>
          <h4>ROPA UNISEX</h4>
          <Link className='navBarLink-subMenuMen' to='/unisex/shirts'>Camisetas</Link>
          <Link className='navBarLink-subMenuMen' to='/unisex/hoodies'>Sudaderas</Link>
        </div>
      </div>
      <div className='menNavBar-secondPart'>
        <Link to='/men/polos' className='menNavBar-card'>
          <h3>POLOS</h3>
          <img src={navBarMPolos} className='img-navBar' alt="" />
        </Link>
        <Link to='/men/jeans' className='menNavBar-card'>
          <h3>JEANS</h3>
          <img src={navBarMJeans} className='img-navBar' alt="" />
        </Link>
        <Link to='/unisex/shirts' className='menNavBar-card'>
          <h3>CAMISETAS</h3>
          <img src={navBarMCamisetas} className='img-navBar' alt="" />
          
        </Link>
      </div>
    </div>
  )
}

export default MenNavBar
