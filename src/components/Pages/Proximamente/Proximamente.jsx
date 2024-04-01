import React, { useEffect, useState } from 'react';
import './Proximamente.scss';
import logoCarmin from '../../../assets/logos/Logo_Grazzi_carmin.png';
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
            <hr className={`proximamente-hr ${showHr ? 'show' : ''}`} /> {/* <hr> con nueva clase y estado */}
            <img className={`proximamente-logo ${showLogo ? 'show' : ''}`} src={logoCarmin} alt="Logo de la empresa" />
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
                <a href="https://www.instagram.com/" target='_blank'>
                    <CiInstagram className={`proximamente-icon ${showInstagram ? 'show' : ''}`} />
                </a>
                <a href="https://www.facebook.com/" target='_blank'>
                    <CiFacebook className={`proximamente-icon ${showInstagram ? 'show' : ''}`} />
                </a>
                <a href="https://www.tiktok.com/" target='_blank'>
                    <FaTiktok className={`proximamente-icon ${showInstagram ? 'show' : ''}`} />
                </a>
            </div>
            <hr className={`proximamente-hr ${showHr ? 'show' : ''}`} /> {/* <hr> adicional */}
        </div>
    );
}

export default Proximamente;
