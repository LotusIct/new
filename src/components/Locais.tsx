import React, { useState } from "react";
import "./Locais.css";

interface Pais {
  nome: string;
  emoji: string;
  descricao: string;
  fundo: string;
}

const paises: Pais[] = [
  { nome: "Itália", emoji: "🇮🇹", descricao: "Precisão e tradição artesanal — o ponto de partida da nossa essência criativa.", fundo: "linear-gradient(135deg, #ffffff7c 0%, #cd212aa2 50%, #008c46a9 100%)" },
  { nome: "Espanha", emoji: "🇪🇸", descricao: "Energia e ousadia no design — onde a inovação ganhou forma.", fundo: "linear-gradient(135deg, #AA151B, #F1BF00)" },
  { nome: "Portugal", emoji: "🇵🇹", descricao: "Tradição e modernidade lado a lado — harmonia entre arte e tecnologia.", fundo: "linear-gradient(135deg, #007c00ff, #FF0000)" },
  { nome: "Brasil", emoji: "🇧🇷", descricao: "Nosso lar, conectando criatividade e tecnologia para impulsionar o futuro.", fundo: "linear-gradient(135deg, #FFCC29 0%, #002776 50%, #009C3B 100%)" },
];

export default function Locais() {
  const fundoPadrao = "#ffffff"; 
  const [paisAtivo, setPaisAtivo] = useState<Pais | null>(null);

  return (
    <section className="locais-section interativo" style={{ background: paisAtivo ? paisAtivo.fundo : fundoPadrao, transition: "background 0.5s ease" }}>
      <div className="overlays"></div>
      <div className="locais-content flex-container">
        <div className="locais-left" style={{ color: paisAtivo ? "black" : "var(--complementary1)" }}>
          <h2 className="locais-title" style={{ color: paisAtivo ? "white" : "var(--primary)" }}>Nossa Presença Global</h2>
          <p className="locais-intro" style={{ color: paisAtivo ? "white" : "var(--accent1)" }}>
            Nossa jornada começou na <strong>Itália</strong>, berço da arte e do cuidado artesanal. 
            Passamos pela <strong>Espanha</strong> e <strong>Portugal</strong>, harmonizando tradição e tecnologia.
          </p>
          <p className="locais-intro" style={{ color: paisAtivo ? "white" : "var(--accent2)" }}>
            Hoje, retornamos ao <strong>Brasil</strong>, unindo criatividade, design e soluções inteligentes.
          </p>
        </div>

        <div className="locais-right">
          <div className="descricao-pais" style={{ color: paisAtivo ? "white" : "black" }}>
            <p className="locais-intro ativo-pais">
              {paisAtivo ? `"${paisAtivo.descricao}"` : `"Descubra como a criatividade e a inovação conectam o mundo."`}
            </p>
          </div>

          <div className="paises-lista">
            {paises.map((pais) => (
              <div key={pais.nome} className={`pais-item ${paisAtivo?.nome === pais.nome ? "ativo" : ""}`} 
                   style={{ color: paisAtivo ? "white" : "black" }}
                   onMouseEnter={() => setPaisAtivo(pais)}
                   onMouseLeave={() => setPaisAtivo(null)}>
                <span className="emoji" style={{ color: paisAtivo ? "white" : "#BCAAF3" }}>{pais.emoji}</span>
                <span className="nome" style={{ color: paisAtivo ? "white" : "#BCAAF3" }}>{pais.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
