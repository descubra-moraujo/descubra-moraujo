import React, { useState } from 'react';
import './header.css';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="header-container">
      <div className="header">
        <div className="esquerda">
          <img src="/menu.png" alt="menu" className="menu-icon" onClick={toggleMenu} />{menuOpen && (
            <div className="menu-animation">
              <a href="#turismo">Turismo</a>
              <a href="#restaurantes">Restaurantes</a>
              <a href="#hoteis">Hotéis</a>
              <a href="#eventos">Eventos</a>
            </div>
          )}
        </div>

        <div className="centro">
          <img src="/logo.png" alt="logo-descubramoraujo" className="logo" />
        </div>

        <div className="direita">
          <img src="/logo-prefeitura.png" alt="logo-prefeitura" className="logo-prefeitura" />
        </div>
      </div>
    </div>
  );
};

export default Header;