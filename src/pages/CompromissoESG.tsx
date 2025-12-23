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

const CompromissoESG: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      titulo: "Meio Ambiente",
      texto: "Priorizamos práticas sustentáveis para reduzir impactos ambientais.",
      imagem: "/imagens/esg1.jpg"
    },
    {
      id: 2,
      titulo: "Responsabilidade Social",
      texto: "Investimos em projetos que beneficiam comunidades locais e globais.",
      imagem: "/imagens/esg2.jpg"
    },
    {
      id: 3,
      titulo: "Governança Ética",
      texto: "Mantemos transparência e integridade em todas as operações.",
      imagem: "/imagens/esg3.jpg"
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
          <h1>Compromisso ESG</h1>
          <p>Nosso compromisso com o meio ambiente, responsabilidade social e governança ética guia nossas ações diárias.</p>
        </div>
        <div className="hero-image">
          <img src="/imagens/esg-hero.jpg" alt="Compromisso ESG" />
        </div>
      </section>

      {/* Slides */}
      <section className="slider-section">
        <h2>Destaques ESG</h2>
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

export default CompromissoESG;
