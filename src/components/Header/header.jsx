import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <img src="/menu.png" alt="menu" className="menu-icon" onClick={toggleMenu} />
          {menuOpen && (
            <div className="menu-animation">
              <Link to="/turismo" state={{ categoria: "Restaurantes" }}>Restaurantes</Link>
              <Link to="/turismo" state={{ categoria: "Hotéis" }}>Hotéis</Link>
              <Link to="/turismo" state={{ categoria: "Turismo" }}>Turismo</Link>
              <Link to="/turismo" state={{ categoria: "Eventos" }}>Eventos</Link>
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
