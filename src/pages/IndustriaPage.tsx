import React, { useState, useRef } from "react";

import "./IndustriaPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


interface Subtopic {
  titulo: string;
  texto: string;
}

interface IndustriaPageProps {
  titulo: string;
  tema: string;
  headerImage?: string;
  fraseImpactante: string;
  fraseComplementar: string;
  blocos: { titulo: string; texto: string; imagem?: string }[];
  topicos?: { titulo: string; texto: string; slides?: Subtopic[] }[];
  contato?: { titulo: string; texto: string; imagem?: string };
  botaoContato?: boolean;
}

const IndustriaPage: React.FC<IndustriaPageProps> = ({
  titulo,
  tema,
  headerImage,
  fraseImpactante,
  fraseComplementar,
  blocos,
  topicos,
  contato,
  botaoContato
}) => {
  const [topicoAtivo, setTopicoAtivo] = useState<number | null>(0);

  const navigate = useNavigate();

  const subRef = useRef<HTMLDivElement | null>(null);

const scrollSub = (dir: number) => {
  if (subRef.current) {
    const width = subRef.current.clientWidth;
    subRef.current.scrollBy({
      left: dir * (width * 0.8),
      behavior: "smooth"
    });
  }
};
  return (
    <>
      <Header />

      <main className="industria-page">

        {/* HEADER */}
        <header
          className="industria-header"
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="header-content">
            <span className="subtitulo-industrias">{titulo}</span>
            <div className="divider"></div>

            <h1 className="titulo-saude">{tema}</h1>

            <p className="texto-impacto">{fraseImpactante}</p>
            <p className="texto-complementar">{fraseComplementar}</p>
          </div>
        </header>



        {/* BLOCOS PADRÕES */}
        {blocos.map((bloco, i) => (
  <section
    key={i}
    className={`industria-block ${i % 2 === 0 ? "left" : "right"}`}
  >
    <div className={`bloco-industria ${i % 2 === 1 ? "reverse" : ""}`}>
      <div className="block-text">
        <h3>{bloco.titulo}</h3>
        <p>{bloco.texto}</p>
      </div>

      {bloco.imagem && (
        <div className="block-image">
          <img src={bloco.imagem} alt={bloco.titulo} />
        </div>
      )}
    </div>
  </section>
))}




        {/* TÓPICOS – CARROSSEL PRINCIPAL */}
        {topicos && (
          <section className="industria-topicos">
            <h3>Em foco</h3>

           <div className="carrosel-topics">
           <div className="topicos-carousel">
              {topicos.map((t, i) => (
                <div
                key={i}
                className={`topico-card ${topicoAtivo === i ? "active" : ""}`}
                onClick={() => setTopicoAtivo(i === topicoAtivo ? null : i)}
              >
                <h4>{t.titulo}</h4>
              </div>

              ))}
            </div>
           </div>


            {/* SUB-CARROSSEL APÓS CLICK */}
            {topicoAtivo !== null && topicos[topicoAtivo].slides && (
  <div className="subcarousel-container active">

    {/* SETAS */}
    <div className="subcarousel-arrows">
      <div className="sub-arrow" onClick={() => scrollSub(-1)}>‹</div>
      <div className="sub-arrow" onClick={() => scrollSub(1)}>›</div>
    </div>

    <div className="subcarousel" ref={subRef}>
      {topicos[topicoAtivo].slides!.map((slide, i) => (
        <div
          key={i}
          className="subcarousel-card"
          style={{
            backgroundImage: `url(${slide.imagem})`
          }}
        >
          <h4>{slide.titulo}</h4>
          <p>{slide.texto}</p>
        </div>
      ))}
    </div>
  </div>
)}


          </section>
        )}



        {/* CONTATO */}
        {contato && (
  <section className="industria-contato-bloco">
    <div className="contato-texto">
      <h3>{contato.titulo}</h3>
      <p>{contato.texto}</p>

      <button
        className="contato-btn"
        onClick={() => navigate(contato.link)}
      >
        {contato.botaoTexto}
      </button>
    </div>
  </section>
)}


        {botaoContato && (
          <section className="industria-contato">
            <button>Fale Conosco</button>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default IndustriaPage;
