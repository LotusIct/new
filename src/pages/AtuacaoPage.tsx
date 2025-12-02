import React from "react";
import { useParams } from "react-router-dom";
import { atuacoes } from "../data/atuacaoData";
import "./AtuacaoPage.css";

export default function AtuacaoPage() {
  const { id } = useParams(); // pega o id da URL
  const atuacao = atuacoes.find((a) => a.id === id);

  if (!atuacao) return <p>Atuação não encontrada.</p>;

  return (
    <div className="atuacao-page">

      {/* BLOCO 1 - Hero */}
 <section
  className="bloco-1"
  style={{ backgroundImage: `url(${atuacao.bloco1.imagemFundo})` }}
>
  <div className="bloco-1-content">
    <h1 className="typing">{atuacao.bloco1.titulo}</h1>
    <hr />
  </div>
</section>


      {/* BLOCO 2 - Lista */}
      <section className="bloco-2">
        <h2>{atuacao.bloco2.titulo}</h2>
        <ul>
          {atuacao.bloco2.lista.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* BLOCO 3 - Texto */}
      <section className="bloco-3">
        <h2>{atuacao.bloco3.titulo}</h2>
        <p>{atuacao.bloco3.texto}</p>
      </section>

      {/* BLOCO 4 - Citação */}
      <section className="bloco-4">
        <blockquote>
          "{atuacao.bloco4.frase}"
          <footer>— {atuacao.bloco4.autor}, {atuacao.bloco4.cargo}</footer>
        </blockquote>
      </section>

      {/* BLOCO 5 - Texto */}
      <section className="bloco-5">
        <h2>{atuacao.bloco5.titulo}</h2>
        <p>{atuacao.bloco5.texto}</p>
      </section>

      {/* BLOCO 6 - Texto + Vídeo */}
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

      {/* BLOCO 7 - Competências */}
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

      {/* BLOCO 8 - Linha do tempo */}
      <section className="bloco-8">
        <h2>{atuacao.bloco8.titulo}</h2>
        <p>{atuacao.bloco8.texto}</p>
        <div className="bloco-8-pontos">
          {atuacao.bloco8.pontos.map((ponto, i) => (
            <div key={i} className="bloco-8-ponto">
              <h3>{ponto.titulo}</h3>
              <ul>
                {ponto.lista.map((li, idx) => (
                  <li key={idx}>{li}</li>
                ))}
              </ul>
              <a href={ponto.botaoDownload} download className="btn-download">
                {ponto.botaoTexto}
              </a>
              <img src={ponto.imagem} alt={ponto.titulo} />
              <p>{ponto.descricao}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
