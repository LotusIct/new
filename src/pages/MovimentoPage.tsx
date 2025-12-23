import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { movimentoData } from "../data/movimentoData";
import "./movimentoPage.css";
import Header from "../components/Header"; // importe seu Header
import Footer from "../components/Footer";

const MovimentoPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const page = movimentoData.find(p => p.id === id);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = page.bloco3.slides;

  useEffect(() => {
  const timer = setTimeout(() => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  }, 6000);

  return () => clearTimeout(timer);
}, [currentSlide, slides.length]);


  if (!page) return <p>Página não encontrada</p>;

  return (
    <div className="movimento-page">
    <Header />
      {/* BLOCO 1 */}
      <section className="bloco bloco-movimento-1">
        <h1>{page.bloco1.titulo}</h1>
      </section>

      {/* BLOCO 2 */}
      <section className="bloco bloco-movimento-2">
        <h2>{page.bloco2.titulo}</h2>
        <p className="subtitulo">{page.bloco2.subtitulo}</p>

        <ul>
          {page.bloco2.lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* BLOCO 3 - SLIDES */}
  <section className="bloco bloco-movimento-3">
  <div className="slider-movimento">
 <div className="slider-header">
    <h2>Saiba Mais</h2>
  </div>
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        className={`slide-movimento ${
          index === currentSlide ? "active" : ""
        }`}
        style={{ backgroundImage: `url(${slide.imagem})` }}
      >
        <div className="slide-overlay">
          <h3>{slide.titulo}</h3>
          <p>{slide.texto}</p>
        </div>
      </div>
    ))}

    {/* SETA ESQUERDA */}
    <button
      className="slider-arrow left"
      onClick={() =>
        setCurrentSlide(
          currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        )
      }
      aria-label="Slide anterior"
    >
      ‹
    </button>

    {/* SETA DIREITA */}
    <button
      className="slider-arrow right"
      onClick={() =>
        setCurrentSlide(
          currentSlide === slides.length - 1 ? 0 : currentSlide + 1
        )
      }
      aria-label="Próximo slide"
    >
      ›
    </button>

    {/* CONTROLES */}
    <div className="slider-controls">
      {slides.map((_, index) => (
        <button
          key={index}
          className={index === currentSlide ? "active" : ""}
          onClick={() => setCurrentSlide(index)}
          aria-label={`Ir para slide ${index + 1}`}
        />
      ))}
    </div>

  </div>
</section>



      {/* BLOCO 4 */}
      <section className="bloco bloco-movimento-4">
        <div className="bloco-4-texto">
          <h2>{page.bloco4.titulo}</h2>
          <p>{page.bloco4.texto}</p>
        </div>

        <div className="bloco-movimento-4-imagem">
          <img src={page.bloco4.imagem} alt={page.bloco4.titulo} />
        </div>
      </section>
 <Footer />
    </div>
  );
};

export default MovimentoPage;
