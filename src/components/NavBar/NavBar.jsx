import React, { useEffect, useState } from 'react';
import './NavBar.scss';
import LogoGrazziBlanco from '../../assets/logos/LogoGrazziBlanco.png';
import LogoGrazziCarmin from '../../assets/logos/Logo_Grazzi_carmin.png';
import { IoIosSearch } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';
import { PiHandbagThin } from 'react-icons/pi';
import { Link, useLocation  } from 'react-router-dom';
import NewsNavBar from './SubMenus/News/NewsNavBar';
import WomenNavBar from './SubMenus/Women/WomenNavBar';
import MenNavBar from './SubMenus/Men/MenNavBar';

const NavBar = () => {
    const [selectedPage, setSelectedPage] = useState(null);
    const [navColor, setNavColor] = useState(false)
    const location = useLocation();
    useEffect(() => {
        // Actualizar el estado del color del NavBar según la ruta actual
        if (location.pathname === '/') {
            setNavColor('transparent');
        } else {
            setNavColor('colored');
        }
    }, [location.pathname]);

    const handleHover = (page) => {
        setSelectedPage(page);
    };
    
    return (
        <div className={`navbar-container ${navColor}`} onMouseLeave={() => handleHover(null)} >
            <div className="navbar-containerFirstPart" >
                <div className='nav-leftContent'>
                    <div className='nav-firstPagesToSelect'>
                        <div onMouseEnter={() => handleHover('Novedades')} className={`list-itemNB ${navColor}`} to='/'>Novedades</div>
                        <div onMouseEnter={() => handleHover('Mujer')} className={`list-itemNB ${navColor}`} to='/women'>Mujer</div>
                        <div onMouseEnter={() => handleHover('Hombre')} className={`list-itemNB ${navColor}`} to=''>Hombre</div>
                    </div>
                    <div onMouseEnter={() => handleHover(null)} className='nav-secondPages'>
                        <Link className={`list-itemNB ${navColor}`} to='/accesories'>Accesorios</Link>
                        <Link className={`list-itemNB ${navColor}`} to=''>Colecciones</Link>
                    </div>
                </div>
                <div className='nav-logo'>
                    <Link to='/'><img src={navColor === 'colored' ? LogoGrazziCarmin : LogoGrazziBlanco} className='logo-grazziNB' alt="Logo de grazzi" /></Link>
                </div>
                <div className='nav-rightContent'>
                    <div>
                        <Link className={`list-itemNB ${navColor}`} to=''><IoIosSearch /></Link>
                    </div>
                    <div>
                        <Link className={`list-itemNB ${navColor}`} to=''><CiUser /></Link>
                    </div>
                    <div>
                        <Link className={`list-itemNB ${navColor}`} to=''><PiHandbagThin /></Link>
                    </div>
                </div>
            </div>
           {
            selectedPage ? (
                <div className="navBar-extraContent">
                    {selectedPage === 'Novedades' && <NewsNavBar />}
                    {selectedPage === 'Mujer' && <WomenNavBar />}
                    {selectedPage === 'Hombre' && <MenNavBar />}
                </div>
            ) : null
           }
        </div>
    );
};

export default NavBar;
