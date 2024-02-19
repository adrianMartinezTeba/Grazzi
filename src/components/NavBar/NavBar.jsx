import React, { useState, useEffect } from 'react'
import './NavBar.scss'
import LogoGrazziBlanco from '../../assets/logos/LogoGrazziBlanco.png'
import { Link, useLocation } from 'react-router-dom'
const NavBar = () => {
    const [navColor, setNavColor] = useState('transparent');
    const location = useLocation();
    useEffect(() => {
        // Actualizar el estado del color del NavBar según la ruta actual
        if (location.pathname === '/') {

            setNavColor('transparent');
        } else {
            setNavColor('colored');
        }
    }, [location.pathname]);
    return (
        <div className={`navbar-container ${navColor}`}>
            <div className='nav-leftContent'>    
                        <div>
                            <Link className='list-itemNB' to='/'>Novedades</Link>
                        </div>
                        <div>
                            <Link className='list-itemNB' to='/footer'>Mujer</Link>
                        </div>
                        <div>
                            <Link className='list-itemNB' to=''>Hombre</Link>
                        </div>
                        <div>
                            <Link className='list-itemNB' to=''>Accesorios</Link>
                        </div>
                        <div>
                            <Link className='list-itemNB' to=''>Colecciones</Link>
                        </div>
            </div>
            <div className='nav-logo'>
                <Link to='/'><img src={LogoGrazziBlanco} width={"50px"} height={"50px"} alt="Logo de grazzi" /></Link>
            </div>
            <div className='nav-rightContent'>
                <ul>
                    <div>
                        <Link className='list-itemNB' to=''>Buscador</Link>
                    </div>
                    <div>
                        <Link className='list-itemNB' to=''>Mi cuenta</Link></div>
                    <div>
                        <Link className='list-itemNB' to=''>Cesta</Link></div>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
