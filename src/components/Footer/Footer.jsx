import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaTiktok, FaFacebook, FaPinterest } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import './Footer.scss';
const Footer = () => {
  const goNavBar = () => {
    console.log('goNavBar');
    window.scrollTo(0, 0);
  };
  return (
    <div className='footer-container'>
      <hr className='footer-hr1'/>
      <div className='footer-text'>
        <div className='footer-textList1'>
          <h2>AYUDA</h2>
          <p>Preguntas frecuentes</p>
          <p>Mi cuenta</p>
          <p>Mis compras</p>
          <p>Pago</p>
          <p>Envío</p>
          <p>Cambios y devoluciones</p>
          <p>Seguimiento del pedido</p>
        </div>
        <div className='footer-textList2'>
          <h2>MARCA</h2>
          <p>¿Quiénes somos?</p>
          <p>Tiendas y horarios</p>
          <p>Contacto</p>
          <p>Atención al cliente</p>
        </div>
        <div className='footer-textList3'>
          <h2>POLÍTICAS</h2>
          <p>Términos y condiciones de uso</p>
          <p>Política de privacidad</p>
          <p>Política de cookies</p>
          <p>Aviso legal</p>
        </div>
        <div className='footer-textList4'>
          <h2>SÍGUENOS EN REDES</h2>
          <p>Instagram</p>
          <p>TikTok</p>
          <p>Facebook</p>
          <p>Pinterest</p>
        </div>
      </div>
      <div  className='footer-arrowUp'>
        <IoIosArrowUp onClick={goNavBar}  className='arrow' />
      </div>
      <div className='footer-icons'>
        <FaInstagram className='footerIcon' />
        <FaTiktok className='footerIcon' />
        <FaFacebook className='footerIcon' />
        <FaPinterest className='footerIcon' />
      </div>
      <hr className='footer-hr2' />
      <div className='footer-lastText'>
        <p>2024 © Grazzi. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default Footer;
