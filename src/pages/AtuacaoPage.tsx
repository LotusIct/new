import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { atuacoes } from "../data/atuacaoData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./AtuacaoPage.css";

export default function AtuacaoPage() {
  const { id } = useParams(); 
  const atuacao = atuacoes.find((a) => a.id === id);

  if (!atuacao) return <p>Atuação não encontrada.</p>;

useEffect(() => {
  const carousel = document.querySelector(".carousel") as HTMLElement | null;
  const btnPrev = document.querySelector(".prev") as HTMLButtonElement | null;
  const btnNext = document.querySelector(".next") as HTMLButtonElement | null;

  if (!carousel || !btnPrev || !btnNext) return;

  const item = carousel.querySelector(".carousel-item") as HTMLElement | null;
  if (!item) return;

  const itemWidth = item.clientWidth + 30;

  btnNext.onclick = () => {
    carousel.scrollLeft += itemWidth;
  };

  btnPrev.onclick = () => {
    carousel.scrollLeft -= itemWidth;
  };
}, []);


  return (
    <>
         <Header />
    <div className="atuacao-page">

      {/* BLOCO 1 */}
      <section
        className="bloco-1"
        style={{ backgroundImage: `url(${atuacao.bloco1.imagemFundo})` }}
      >
        <div className="bloco-1-content">
          <h1 className="typing">{atuacao.bloco1.titulo}</h1>
          <hr />
        </div>
      </section>

      {/* BLOCO 2 */}
      <section className="bloco-2">
        <h2>{atuacao.bloco2.titulo}</h2>
        <ul>
          {atuacao.bloco2.lista.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* BLOCO 3 */}
      <section className="bloco-3">
        <h2>{atuacao.bloco3.titulo}</h2>
        <p>{atuacao.bloco3.texto}</p>
      </section>

      {/* BLOCO 4 */}
      <section className="bloco-4">
        <div className="bloco4-texto">
          <blockquote>
            "{atuacao.bloco4.frase}"
            <footer>— {atuacao.bloco4.autor}, {atuacao.bloco4.cargo}</footer>
          </blockquote>
        </div>

        <div
          className="bloco4-imagem"
          style={{ backgroundImage: `url(${atuacao.bloco4.imagem})` }}
        />
      </section>

      {/* BLOCO 5 */}
      <section className="bloco-5">
        <h2>{atuacao.bloco5.titulo}</h2>
        <p>{atuacao.bloco5.texto}</p>
      </section>

      {/* BLOCO 6 */}
      <section className="bloco-6">
        <div className="bloco-6-text">
          <h2>{atuacao.bloco6.titulo}</h2>
          <p>{atuacao.bloco6.texto}</p>
        </div>
        <div className="bloco-6-video">
          <iframe
            src={atuacao.bloco6.videoUrl}
            title="Vídeo"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </section>

      {/* BLOCO 7 */}
      <section className="bloco-7">
        <h2>{atuacao.bloco7.titulo}</h2>
        <div className="bloco-7-itens">
          {atuacao.bloco7.itens.map((item, i) => (
            <div key={i} className="bloco-7-item">
              <img src={item.icone} alt={item.texto} />
              <p>{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCO 8 - CARROSSEL */}
      <section className="bloco-8">
        <h2>{atuacao.bloco8.titulo}</h2>
        <p>{atuacao.bloco8.texto}</p>

        <div className="carousel-wrapper">
          <button className="carousel-btn prev">‹</button>

          <div className="carousel">
            {atuacao.bloco8.pontos.map((ponto, i) => (
              <div key={i} className="carousel-item">
                <h3>{ponto.titulo}</h3>
                <p>{ponto.descricao}</p>
                <ul>
                  {ponto.lista.map((li, idx) => (
                    <li key={idx}>{li}</li>
                  ))}
                </ul>
                
                <a
                  href={ponto.botaoDownload}
                  download
                  className="btn-download"
                >
                  {ponto.botaoTexto}
                </a>

                <img src={ponto.imagem} alt={ponto.titulo} />
                
              </div>
            ))}
          </div>

          <button className="carousel-btn next">›</button>
        </div>
      </section>
     
    </div>
    <Footer />
    </>
  );
}
