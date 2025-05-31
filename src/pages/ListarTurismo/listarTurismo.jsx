import React, { useState } from 'react';
import './listarTurismo.css';
import { useNavigate } from 'react-router-dom';

const ListarTurismo = () => {
  const navigate = useNavigate();

  const categorias = ["Tudo", "Restaurantes", "Hotéis", "Turismo", "Eventos"];
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Tudo");
  const [locais, setLocais] = useState([
    { nome: "Tempero da Tia", categoria: "Restaurantes" },
    { nome: "Pousada São Mateus", categoria: "Hotéis" },
    { nome: "Cachoeira", categoria: "Turismo" },
    { nome: "Festa Junina", categoria: "Eventos" },
  ]);

  const locaisFiltrados = 
    categoriaSelecionada === 'Tudo'
      ? locais
      : locais.filter((local) => local.categoria === categoriaSelecionada);

  const handleExcluir = (index) => {
    if (window.confirm("Tem certeza que deseja excluir este item?")) {
      const novaLista = [...locais];
      novaLista.splice(index, 1);
      setLocais(novaLista);
    }
  };

  return (
    <>
      <button onClick={() => navigate("/painel")} className="botao-voltar">
        ← Voltar
      </button>
      <div className="listar-container">
        <div className="conteudo-listar">
          <div className="filtros">
            {categorias.map((cat, index) => (
              <button
                key={index}
                className={categoriaSelecionada === cat ? "botao-selecionado" : ""}
                onClick={() => setCategoriaSelecionada(cat)}
              >
                {cat}
              </button>
            ))}
            <button className="botao-excluir">&#128465;</button>
            <button className="botao-adicionar">＋</button>
          </div>

          <div className="lista">
            {locaisFiltrados.map((local, index) => (
              <div key={index} className="item">
                <div className="item-listar">
                  <p className="titulo-listar">{local.nome}</p>
                  <p className="categoria">{local.categoria}</p>
                </div>
                <div className="item-acoes">
                  <button 
                    className="excluir" 
                    onClick={() => handleExcluir(locais.indexOf(local))}>
                    Excluir
                  </button>
                  <a href="#" className="editar">Editar</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListarTurismo;
