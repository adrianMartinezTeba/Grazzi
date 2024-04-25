import React from 'react'
import './WomenNavBar.scss'
import navBarWVestidos from '../../../../assets/imgNavBar/navBarMVestidos.jpg'
import navBarMTops from '../../../../assets/imgNavBar/navBarMTops.jpg'
import navBarMJeans from '../../../../assets/imgNavBar/navBarMJeans.jpg'
import { Link } from 'react-router-dom'
const WomenNavBar = () => {
  return (
    <div className='womenNavBar-container'>
      <div className='womenNavBar-firstPart'>
        <div className='womenNavBar-text'>
          <h4>ROPA MUJER</h4>
          <Link className='navBarLink-subMenuWomen'  to="/women/dresses" >Vestidos</Link>
          <Link className='navBarLink-subMenuWomen'  to="/women/tops" >Tops</Link>
          <Link className='navBarLink-subMenuWomen'  to="/women/jeans" >Jeans</Link>
        </div>
        <div className='womenNavBar-text'>
          <h4>ROPA UNISEX</h4>
          <Link className='navBarLink-subMenuWomen'  to='/unisex/shirts'>Camisetas</Link>
          <Link className='navBarLink-subMenuWomen'  to='/unisex/hoodies'>Sudaderas</Link>
        </div>
      </div>
      <div className='womenNavBar-secondPart'>
        <Link  to="/women/dresses" className='womenNavBar-card'>
          <h3 >VESTIDOS</h3>
          <img className='img-navBar' src={navBarWVestidos} alt="" />
        </Link>
        <Link to="/women/tops"  className='womenNavBar-card'>
          <h3>TOPS</h3>
          <img className='img-navBar' src={navBarMTops} alt="" />
        </Link>
        <Link to="/women/jeans"  className='womenNavBar-card'>
          <h3>JEANS</h3>
          <img className='img-navBar' src={navBarMJeans} alt="no sale" />
        </Link>
      </div>
    </div>
  )
}

export default WomenNavBar
