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

const NossoProposito: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      titulo: "Impacto Social",
      texto: "Nosso propósito é gerar valor positivo para pessoas e comunidades.",
      imagem: "/imagens/proposito1.jpg"
    },
    {
      id: 2,
      titulo: "Inovação Sustentável",
      texto: "Buscamos soluções tecnológicas que respeitam o meio ambiente.",
      imagem: "/imagens/proposito2.jpg"
    },
    {
      id: 3,
      titulo: "Crescimento Consciente",
      texto: "Fomentamos crescimento econômico aliado à responsabilidade social.",
      imagem: "/imagens/proposito3.jpg"
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
          <h1>Nosso Propósito</h1>
          <p>Trabalhamos para criar soluções que transformem negócios e a sociedade positivamente.</p>
        </div>
        <div className="hero-image">
          <img src="/imagens/proposito-hero.jpg" alt="Nosso Propósito" />
        </div>
      </section>

      {/* Slides */}
      <section className="slider-section">
        <h2>Principais Pilares</h2>
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

      <Footer />
    </div>
  );
};

export default NossoProposito;
