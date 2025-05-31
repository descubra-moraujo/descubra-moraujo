import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './turismoUser.css';

const TurismoUser = () => {
  const [items, setItems] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Tudo');
  const navigate = useNavigate();
  const location = useLocation(); 

  const categoriaIcones = {
    Tudo: 'bi-grid',
    Restaurantes: 'bi-shop',
    Hotéis: 'bi-building',
    Turismo: 'bi-map',
    Eventos: 'bi-calendar-event',
  };
  useEffect(() => {
    if (location.state?.categoria) {
      setCategoriaSelecionada(location.state.categoria);
    }
  }, [location.state]);

  useEffect(() => {
    const fakeData = [
      { id: 1, nome: 'Delicias do Xandy', categoria: 'Restaurantes', imagem: '/item-fake.png' },
      { id: 2, nome: 'Pousada São Mateus', categoria: 'Hotéis', imagem: '/item-fake1.png' },
      { id: 3, nome: 'Cachoeira', categoria: 'Turismo', imagem: '/item-fake2.jpg' },
      { id: 4, nome: 'Evento', categoria: 'Eventos', imagem: '/item-fake3.jpg' },
    ];
    setItems(fakeData);
  }, []);

  const categorias = ['Tudo', 'Restaurantes', 'Hotéis', 'Turismo', 'Eventos'];

  const itensFiltrados =
    categoriaSelecionada === 'Tudo'
      ? items
      : items.filter((item) => item.categoria === categoriaSelecionada);

  return (
    <>
      <button onClick={() => navigate("/")} className="botao-voltar">
        ← Voltar
      </button>
      <div className="turismo-container">
        <h1>Tudo o que você precisa para conhecer Moraújo</h1>
        <div className="retangulo-cinza">
          <div className="tabs">
            {categorias.map((cat) => (
              <button
                key={cat}
                className={`tab ${categoriaSelecionada === cat ? 'active' : ''}`}
                onClick={() => setCategoriaSelecionada(cat)}
              >
                <i className={`bi ${categoriaIcones[cat]}`}></i>
                <span className="tab-text">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="cards-container">
          {itensFiltrados.map((item) => (
            <div
              className="card"
              key={item.id}
              onClick={() => navigate(`/detalhes`)}
            >
              <img src={item.imagem} alt={item.nome} className="card-image" />
              <div className="card-title">{item.nome}</div>
              <div className="category">{item.categoria}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TurismoUser;
