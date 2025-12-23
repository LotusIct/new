import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./page.css";

interface Slide {
  id: number;
  titulo: string;
  texto: string;
  imagem: string;
}

const NossaHistoria: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      titulo: "Início da jornada",
      texto: "Fundada em 2005, nossa empresa começou com o objetivo de transformar a tecnologia em soluções acessíveis.",
      imagem: "/imagens/historia1.jpg"
    },
    {
      id: 2,
      titulo: "Crescimento e inovação",
      texto: "Ao longo dos anos, crescemos mantendo o foco em inovação e qualidade em nossos serviços.",
      imagem: "/imagens/historia2.jpg"
    },
    {
      id: 3,
      titulo: "Impacto global",
      texto: "Hoje impactamos clientes e comunidades ao redor do mundo com projetos sustentáveis e inovadores.",
      imagem: "/imagens/historia3.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="page">
      <Header />

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>Nossa História</h1>
          <p>Desde 2005, nossa empresa vem crescendo com inovação, qualidade e impacto positivo no mundo.</p>
        </div>
        <div className="hero-image">
          <img src="/imagens/historia-hero.jpg" alt="Nossa História" />
        </div>
      </section>

      {/* Slides */}
      <section className="slider-section">
        <h2>Momentos Importantes</h2>
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.imagem})` }}
            >
              <div className="slide-overlay">
                <h3>{slide.titulo}</h3>
                <p>{slide.texto}</p>
              </div>
            </div>
          ))}

          <button className="slider-arrow left" onClick={() =>
            setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
          }>‹</button>
          <button className="slider-arrow right" onClick={() =>
            setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)
          }>›</button>

          <div className="slider-controls">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={idx === currentSlide ? "active" : ""}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="cards-section">
        <div className="card">
          <h3>Missão</h3>
          <p>Transformar o mundo através de soluções tecnológicas inovadoras.</p>
        </div>
        <div className="card">
          <h3>Valores</h3>
          <p>Integridade, Inovação, Colaboração, Sustentabilidade e Excelência.</p>
        </div>
        <div className="card">
          <h3>Visão</h3>
          <p>Ser referência global em inovação e responsabilidade social.</p>
        </div>
      </section>

      {/* Seção extra */}
      <section className="hero reverse">
        <div className="hero-text">
          <h2>Nosso impacto</h2>
          <p>Com projetos que envolvem tecnologia e sustentabilidade, transformamos vidas e fortalecemos comunidades.</p>
        </div>
        <div className="hero-image">
          <img src="/imagens/historia-impacto.jpg" alt="Impacto Global" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NossaHistoria;
