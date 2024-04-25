import React, { useState, useEffect } from 'react';
import modaRapidaVsModaLentaSostenible from '../../../assets/imagenesHome/modaRapidaVsModaLentaSostenible.jpg';
import './Home.scss';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';

const Home = () => {
    const [showContainers, setShowContainers] = useState(false);

    useEffect(() => {
        // Simula un retraso antes de mostrar los contenedores
        const timer = setTimeout(() => {
            setShowContainers(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='home-container'>
            <NavBar />
            {showContainers && (
                <>
                    <div className='tono-carmin-container'>
                        <img src={modaRapidaVsModaLentaSostenible} alt="" className='tono-carmin' />
                    </div>
                    <div style={{ height: '10px' }}></div>
                    <div onClick={() => console.log('click')} className='tono-carmin-container'>
                        <img src={modaRapidaVsModaLentaSostenible} alt="" className='tono-carmin' />
                    </div>
                    <div style={{ height: '10px' }}></div>
                    <div className='tono-carmin-container'>
                        <img src={modaRapidaVsModaLentaSostenible} alt="" className='tono-carmin' />
                    </div>
                    <div style={{ height: '10px' }}></div>
                    <div className='tono-carmin-container'>
                        <img src={modaRapidaVsModaLentaSostenible} alt="" className='tono-carmin' />
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;
