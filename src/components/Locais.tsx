import React, { useState } from "react";
import "./Locais.css";

const paises = [
{
  nome: "Itália",
  emoji: "🇮🇹",
  descricao: "Precisão e tradição artesanal — o ponto de partida da nossa essência criativa.",
  fundo: "linear-gradient(135deg, #ffffffff  0%, #CD212A 50%, #008C45 100%)" // verde, branco e vermelho
},

  {
    nome: "Espanha",
    emoji: "🇪🇸",
    descricao: "Energia e ousadia no design — onde a inovação ganhou forma.",
    fundo: "linear-gradient(135deg, #AA151B, #F1BF00)" // vermelho e amarelo
  },
  {
    nome: "Portugal",
    emoji: "🇵🇹",
    descricao: "Tradição e modernidade lado a lado — harmonia entre arte e tecnologia.",
    fundo: "linear-gradient(135deg, #007c00ff, #FF0000)" // verde e vermelho
  },
  {
    nome: "Brasil",
    emoji: "🇧🇷",
    descricao: "Nosso lar, conectando criatividade e tecnologia para impulsionar o futuro.",
    fundo: "linear-gradient(135deg, #FFCC29 0%, #002776 50%, #009C3B 100%)" // verde, amarelo e azul
  },
];

export default function Locais() {
  const fundoPadrao = "#ffffff"; // fundo branco padrão
  const [paisAtivo, setPaisAtivo] = useState(null);
  const [bgAtual, setBgAtual] = useState(fundoPadrao);

  return (
    <section 
      className="locais-section interativo"
      style={{ background: paisAtivo ? paisAtivo.fundo : fundoPadrao, transition: "background 0.5s ease" }}
    >
      <div className="overlays"></div>

      <div className="locais-content flex-container">
        {/* Coluna esquerda: textos fixos */}
        <div className="locais-left" style={{ color: paisAtivo ? "black" : "var(--complementary1)" }}>
  <h2 className="locais-title" style={{ color: paisAtivo ? "white" : "var(--primary)" }}>Nossa Presença Global</h2>
  <p className="locais-intro" style={{ color: paisAtivo ? "white" : "var(--accent1)" }}>
    Nossa jornada começou na <strong>Itália</strong>, berço da arte e do cuidado artesanal. 
    Passamos pela <strong>Espanha</strong>, onde a inovação ganhou movimento, e <strong>Portugal</strong>, harmonizando tradição e tecnologia.
  </p>
  <p className="locais-intro" style={{ color: paisAtivo ? "white" : "var(--accent2)" }}>
    Hoje, retornamos ao <strong>Brasil</strong> trazendo essa experiência internacional, 
    unindo criatividade, design e soluções inteligentes para transformar negócios locais em experiências globais.
  </p>
</div>

        {/* Coluna direita: lista interativa e descrição */}
        <div className="locais-right">
           <div
  className="descricao-pais"
  style={{
    color: paisAtivo ? "white" : "black"
  }}
>
  {paisAtivo 
    ? <p className="locais-intro ativo-pais"  style={{
    color: paisAtivo ? "white" : "#2B1B52"
  }}>"{paisAtivo.descricao}"</p>
    : <p className="locais-intro ativo-pais"  style={{
    color: paisAtivo ? "white" : "#2B1B52"
  }}>"Descubra como a criatividade e a inovação conectam o mundo."</p>}
</div>
          <div className="paises-lista">
            {paises.map((pais) => (
              <div
                key={pais.nome}
                className={`pais-item ${paisAtivo?.nome === pais.nome ? "ativo" : ""}`}  style={{
    color: paisAtivo ? "white" : "black"
  }}
                onMouseEnter={() => {
                  setPaisAtivo(pais);
                }}
                onMouseLeave={() => {
                  setPaisAtivo(null);
                }}
              >
                <span className="emoji"  style={{
    color: paisAtivo ? "white" : "#BCAAF3"
  }}>{pais.emoji}</span>
                <span className="nome"  style={{
    color: paisAtivo ? "white" : "#BCAAF3"
  }}>{pais.nome}</span>
              </div>
            ))}
          </div>

          {/* Descrição do país ativo */}
         
        </div>
      </div>
    </section>
  );
}
