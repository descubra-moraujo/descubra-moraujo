import React from 'react';
import './DetalhesTurismo.css';
import { useNavigate } from 'react-router-dom';

const DetalhesTurismo = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)} className="botao-voltar">
        &lt; Voltar
      </button>
      <div className="detalhes-container">
        <div className="detalhes-content">
          {/* COLUNA ESQUERDA */}
          <div className="coluna-esquerda">
            <img src="/item-fake.png" alt="Tempero da tia" className="image" />
            <div className="social-links">
  <a href="#"><i className="bi bi-facebook"></i></a>
  <a href="#"><i className="bi bi-instagram"></i></a>
  <a href="#"><i className="bi bi-youtube"></i></a>
  <a href="#"><i className="bi bi-whatsapp"></i></a>
</div>

            <h3>Tempero da tia</h3>
            <p>
              Sabor caseiro, acolhimento de verdade! No Tempero da Tia,<br /> você encontra pratos típicos preparados com carinho, ingredientes<br></br> frescos e aquele gostinho que lembra a comida da roça.<br></br> Venha se sentir em casa!
            </p>
          </div>

          {/* COLUNA DIREITA */}
          <div className="coluna-direita">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.520582820879!2d-40.684139126008276!3d-3.465942941891307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7eb1cd3f1984127%3A0xe19da683c48c4be4!2sDelicias%20Do%20Xandy!5e0!3m2!1spt-BR!2sbr!4v1748549935354!5m2!1spt-BR!2sbr"
  width="100%"
  height="350"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Mapa Delicias do Xandy"
/>


            <p>R. Vinte e Sete de Novembro, 251 - Moraújo, CE</p>
            <p>CEP:62480-000</p>
            <p>Site: <a href="https://www.odoffee.com.br/">www.odoffee.com.br</a></p>
            <p>Telefone: (14) 99859-7269</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalhesTurismo;
