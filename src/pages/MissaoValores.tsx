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

const MissaoValoresVisao: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      titulo: "Missão",
      texto: "Entregar soluções inovadoras que transformem negócios e vidas.",
      imagem: "/imagens/mvv1.jpg"
    },
    {
      id: 2,
      titulo: "Valores",
      texto: "Integridade, colaboração, inovação, sustentabilidade e excelência.",
      imagem: "/imagens/mvv2.jpg"
    },
    {
      id: 3,
      titulo: "Visão",
      texto: "Ser referência global em tecnologia e impacto social positivo.",
      imagem: "/imagens/mvv3.jpg"
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
          <h1>Missão, Valores e Visão</h1>
          <p>Nosso compromisso é construir soluções que gerem impacto positivo no mundo e nos negócios.</p>
        </div>
        <div className="hero-image">
          <img src="/imagens/mvv-hero.jpg" alt="Missão, Valores e Visão" />
        </div>
      </section>

      {/* Slides */}
      <section className="slider-section">
        <h2>Destaques</h2>
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
          <p>Transformar negócios com inovação, tecnologia e impacto social.</p>
        </div>
        <div className="card">
          <h3>Valores</h3>
          <p>Integridade, inovação, colaboração, sustentabilidade e excelência.</p>
        </div>
        <div className="card">
          <h3>Visão</h3>
          <p>Ser referência global em tecnologia e responsabilidade social.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MissaoValoresVisao;
