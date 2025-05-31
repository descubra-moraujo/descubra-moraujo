import React, { useEffect } from 'react';
import './clima.css';

function Clima() {
  useEffect(() => {
    const scriptId = 'weatherwidget-io-js';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://weatherwidget.io/js/widget.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className='clima-container'>
      <div className='clima'>
        <div className='retangulo-amarelo'>
          <div className='clima-texto'>
            <h2>Clima em Moraújo Agora</h2>
          </div>
        </div>
        <a
          className="weatherwidget-io"
          href="https://forecast7.com/pt/n3d47n40d68/moraujo/"
          data-label_1="MORAÚJO"
          data-label_2="Clima Atual"
          data-theme="original"
        >
          MORAÚJO WEATHER
        </a>
      </div>
    </div>
  );
}

export default Clima;
