import React from 'react';
import { useNavigate } from 'react-router-dom';
import './historia.css';

const Historia = () => {
  const navigate = useNavigate();

  return (
    <div className='historia-container'>
      <div className='historia'>
        <div className='faixa-amarela'>
          <div className='texto'>
            <h2>Tudo o que Você Precisa para Conhecer Moraújo</h2>
            <div className='linha-verde'></div>
          </div>

          <div className='botoes-container'>
            <div className='botao-card' onClick={() => navigate('/turismo')}>
              <img src='restaurante.jpg' alt='Restaurantes' />
              <span>Restaurantes</span>
            </div>
            <div className='botao-card' onClick={() => navigate('/turismo')}>
              <img src='turismo.jpg' alt='Turismo' />
              <span>  Turismo</span>
            </div>
            <div className='botao-card' onClick={() => navigate('/turismo')}>
              <img src='hoteis.jpg' alt='Hotéis' />
              <span>Hotéis</span>
            </div>
            <div className='botao-card' onClick={() => navigate('/turismo')}>
              <img src='eventos.jpg' alt='Eventos' />
              <span>Eventos</span>
            </div>
          </div>
        </div>
        <div className="secao-branca">
          <div className='texto-historia'>
            <h1>Um Lugar com História e Tradição:<br></br> Bem-vindo a Moraújo!</h1>
          </div>
  
  <div className="conteudo">
    <div className="texto-esquerda">
      <p>
     Nascida no século XIX em torno de uma capela dedicada a Nossa Senhora da Conceição, Moraújo — antes conhecida como Pedrinhas — tornou-se distrito em 1951 e conquistou sua autonomia como município em 1957, sob a liderança de Vicente Benício de Vasconcelos.
Seu nome homenageia as famílias Moreira e Araújo, símbolos da história local. Hoje, Moraújo é conhecida por sua fé, cultura viva e o acolhimento caloroso de seu povo.
      </p>
    </div>
    <div className="retangulo-direita">
      <div className="triangulo amarelo1"></div>
      <div className="triangulo amarelo2"></div>
      <img
        src="/moraujo-historia.jpeg" alt="Imagem da cidade de moraújo" className="imagem-historia"/>
    </div>
  </div>
</div>

      </div>

    </div>
  );
};

export default Historia;

