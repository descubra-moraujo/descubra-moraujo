import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './principaisTurismo.css';

const slides = [
  {
    title: 'Igreja Nossa Senhora da Conceição',
    description:
      'Localizada no coração de Moraújo, no interior do Ceará, a Igreja Matriz de Nossa Senhora da Conceição é um dos principais atrativos históricos e culturais da cidade.',
    image: '/igreja.jpeg'
  },
  {
    title: 'Cachoeira das Porções',
    description:
      'Um verdadeiro tesouro escondido entre as serras de Moraújo, a Cachoeira das Porções encanta visitantes com suas quedas d’água e o som relaxante da natureza.',
    image: '/cachoeira.jpg'
  },
  {
    title: 'Várzea da Volta',
    description:
      'Os Banhos da Várzea da Volta são um convite ao descanso e ao contato com a tranquilidade do interior. Um dos destinos favoritos de quem busca lazer ao ar livre.',
    image: '/banhos.jpg'
  }
];

export default function PrincipaisTurismo() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="pagina-turismo">
      <div className="retangulo-verde1"></div>
      <div className="retangulo-amarelo1"></div>
      <div className="conteudo-centro">
        <div className="carousel-title">
          <h1>
            Principais Pontos <br /> Turísticos
          </h1>
          <div className="arrow" />
        </div>

        <div className="carousel-container">
          <button onClick={prevSlide} className="carousel-button left">
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-track">
            {slides.map((slide, index) => {
              const offset = index - current;
              return (
                <div
                  key={index}
                  className="carousel-slide"
                  style={{
                    transform: `
                      translateX(${offset * 8}rem)
                      rotate(${offset * -8}deg)
                      scale(${index === current ? 1 : 0.9})
                    `,
                    zIndex: index === current ? 2 : 1,
                    opacity: Math.abs(offset) > 2 ? 0 : 1,
                  }}
                >
                  <img src={slide.image} alt={slide.title} />
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              );
            })}
          </div>

          <button onClick={nextSlide} className="carousel-button right">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
