import React, { useState } from 'react';
import './Painel.css';
import { useNavigate } from 'react-router-dom';

const Painel = () => {
  const categorias = ["Tudo", "Restaurantes", "Hotéis", "Turismo", "Eventos"];
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Tudo");
const navigate= useNavigate();
const [menuAberto, setMenuAberto] = useState(true);

  const menuItems = [
    { label: 'Início', rota: '/painel', icone: 'bi-house-door' },
    { label: 'Adicionar', rota: '/adicionar', icone: 'bi-plus-circle'  },
    { label: 'Listar', rota: '/listar', icone: 'bi-card-list' },
  ];
  const locais = [
    { nome: "Delicias do Xandy", categoria: "Restaurantes", imagem: '/item-fake.png'  },
    { nome: "Pousada São Mateus", categoria: "Hotéis", imagem: '/item-fake1.png'  },
    { nome: "Cachoeira", categoria: "Turismo", imagem: '/item-fake2.jpg'  },
    { nome: "Festa Junina", categoria: "Eventos", imagem: '/item-fake3.jpg'  },
  ];

  const locaisFiltrados =
    categoriaSelecionada === 'Tudo'
      ? locais
      : locais.filter((local) => local.categoria === categoriaSelecionada);

  return (
    <div className="painel-container">
      <button className="toggle-button" onClick={() => setMenuAberto(!menuAberto)}>
        {menuAberto ? '✕' : '☰'}
      </button>

      {menuAberto && (
      <aside className="painel-sidebar">
        <div className="admin-h2"><h2>Admin</h2></div>
        <ul className="painel-menu">
        {menuItems.map((item, index) => (
          <li
  key={index}
  className="painel-menu-item"
  onClick={() => navigate(item.rota)}
>
  <i className={`bi ${item.icone}`}></i>
  <span className="menu-text">{item.label}</span>
</li>

        ))}
      </ul>
      </aside>
      )}

      <main className="painel-main">
        <h1>Área Administrativa</h1>

        <div className="painel-categorias">
          {categorias.map((cat, index) => (
            <button
              key={index}
              className={`categoria-button ${categoriaSelecionada === cat ? 'active' : ''}`}
              onClick={() => setCategoriaSelecionada(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="painel-cards">
          {locaisFiltrados.map((local, index) => (
            <div key={index} className="local-card">
                 <img src={local.imagem} alt={local.nome} className="painel-img" />
              <div className="painel-title">{local.nome}</div>
              <div className="category-painel">{local.categoria}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Painel;
