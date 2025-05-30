import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
<div className="retangulo-branco"></div>
<footer className='footer-container'>
  <div className='footer'>

    <div className='footer-esquerda'>
      <img src='./brasao-prefeitura.png' alt='logo prefeitura' className='brasao-esquerda' />
      <a href="/admin" className='link-area'>Área Administrativa</a>
    </div>

    <div className='footer-centro'>
      <div className="gmail">      <h6>prefeituramoraujo@mail.com</h6></div>
      <div className='redes-sociais'>
        <a href='https://wa.me/seunumerodetelefone' target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <i className="bi bi-whatsapp"></i>
        </a>
        <a href='https://instagram.com/seuperfil' target="_blank" rel="noreferrer" aria-label="Instagram">
          <i className="bi bi-instagram"></i>
        </a>
        <a href='https://youtube.com/seucanal' target="_blank" rel="noreferrer" aria-label="YouTube">
          <i className="bi bi-youtube"></i>
        </a>
        <a href='https://facebook.com/suapagina' target="_blank" rel="noreferrer" aria-label="Facebook">
          <i className="bi bi-facebook"></i>
        </a>
      </div>
    </div>

    <div className='footer-direita'>
      <div className="infor">
        <h5>
        Av. Pref. Raimundo Benício, 535 - Moraújo, CE, 62480-000<br />
        Segunda a Sábado: 08:00h às 17:00h<br />
        Domingo: Fechado
      </h5>
        </div>
    </div>

  </div>
</footer>
</>
  );
};

export default Footer;
