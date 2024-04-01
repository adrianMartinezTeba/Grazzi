import React, { useEffect, useState } from 'react';
import './Proximamente.scss';
import logoBlanco from '../../../assets/logos/LogoGrazziBlanco.png';
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

const Proximamente = () => {
    const [showLogo, setShowLogo] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showSecondText, setShowSecondText] = useState(false);
    const [showInstagram, setShowInstagram] = useState(false);
    const [showHr, setShowHr] = useState(false); // Nuevo estado para el <hr>
    const titleText = '¡Estamos creando algo increíble para ti!';
    const secondText = 'No te pierdas nuestras novedades y síguenos en redes sociales';

    useEffect(() => {
        const logoTimer = setTimeout(() => {
            setShowLogo(true);
        }, 1000);

        const titleTimer = setTimeout(() => {
            setShowTitle(true);
        }, 2000);

        const secondTextTimer = setTimeout(() => {
            setShowSecondText(true);
        }, 5000);

        const instagramTimer = setTimeout(() => {
            setShowInstagram(true);
        }, 6000);

        const hrTimer = setTimeout(() => { // Nuevo temporizador para el <hr>
            setShowHr(true);
        }, 1000); // Tiempo ajustado para que aparezca junto al logo

        return () => {
            clearTimeout(logoTimer);
            clearTimeout(titleTimer);
            clearTimeout(secondTextTimer);
            clearTimeout(instagramTimer);
            clearTimeout(hrTimer);
        };
    }, []);

    return (
        <div className='proximamente-container'>
            <hr className={`proximamente-hr1 ${showHr ? 'show' : ''}`} /> {/* <hr> con nueva clase y estado */}
            <div className='proximamente-main-container'>
                <img className={`proximamente-logo ${showLogo ? 'show' : ''}`} src={logoBlanco} alt="Logo de la empresa" />
                <h3 className={`proximamente-title ${showTitle ? 'show' : ''}`}>
                    {titleText.split('').map((char, index) => (
                        <span key={index} className={`${showTitle ? 'show' : ''}`}>
                            {char}
                        </span>
                    ))}
                </h3>
                <h3 className={`proximamente-secondText ${showSecondText ? 'show' : ''}`}>
                    {secondText.split('').map((char, index) => (
                        <span key={index} className={`${showSecondText ? 'show' : ''}`}>
                            {char}
                        </span>
                    ))}
                </h3>
                <div className='proximamente-redes'>
                    <a href="https://www.instagram.com/grazzi.es/?igsh=MWcxNnkwbjhiNGl6Mg%3D%3D&utm_source=qr" target='_blank'>
                        <CiInstagram className={`proximamente-icon ${showInstagram ? 'show' : ''}`} />
                    </a>
                    <a href="https://www.facebook.com/people/Grazzi/61558214060852/" target='_blank'>
                        <CiFacebook className={`proximamente-icon ${showInstagram ? 'show' : ''}`} />
                    </a>
                    <a href="https://www.tiktok.com/@grazzi.es?_t=8lAHVt7K53Y&_r=1" target='_blank'>
                        <FaTiktok className={`proximamente-icon ${showInstagram ? 'show' : ''}`} />
                    </a>
                </div>
            </div>
            <hr className={`proximamente-hr2 ${showHr ? 'show' : ''}`} /> {/* <hr> adicional */}
        </div>
    );
}

export default Proximamente;
