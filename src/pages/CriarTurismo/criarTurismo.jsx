import React, { useState } from 'react';
import './criarTurismo.css';
import { useNavigate, useLocation } from 'react-router-dom';

const CriarTurismo = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const navigate= useNavigate();

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, description, location, category });
  };

  return (
    <>
         <button onClick={() => navigate('/painel')} className="botao-voltar">
        ← Voltar
      </button>
<div className="pagina-container">
  <div className="barra-superior">
  </div>

  <div className="container-formulario">
    <form onSubmit={handleSubmit}>
      <h2 className="titulo-formulario">Adicionar</h2>
<div className='linha-superior'>
  <div className="linha-superior">
  <div className="upload-imagem">
    <input type="file" onChange={handleImageChange} />
    {image && <img src={image} alt="Pré-visualização" />}
  </div>

  <div className="grupo-campo">
    <label>Categoria</label>
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="">Selecione uma categoria</option>
      <option value="restaurantes">Restaurantes</option>
      <option value="hotéis">Hotéis</option>
      <option value="turismo">Turismo</option>
      <option value="eventos">Eventos</option>
    </select>
  </div>
</div>
</div>
      <div className="grupo-campo">
        <label>Nome</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="grupo-campo">
        <label>Descrição</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div className="grupo-campo">
        <label>Localização</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
    </form>
    <button className="botao-enviar" type="submit">Adicionar</button>
  </div>
</div>
</>
  );
};

export default CriarTurismo;

