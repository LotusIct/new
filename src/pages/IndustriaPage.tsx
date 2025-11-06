import React from "react";
import "./IndustriaPage.css";

interface IndustriaPageProps {
  titulo: string;
  tema: string;
  fraseImpactante: string;
  fraseComplementar: string;
  blocos: {
    titulo: string;
    texto: string;
    imagem?: string;
  }[];
  topicos?: { titulo: string; texto: string }[];
  citacao?: string;
  botaoContato?: boolean;
}

const IndustriaPage: React.FC<IndustriaPageProps> = ({
  titulo,
  tema,
  fraseImpactante,
  fraseComplementar,
  blocos,
  topicos,
  citacao,
  botaoContato,
}) => {
  return (
    <section className="industria-page">
      {/* Título comum */}
      <header className="industria-header">
        <h1>{titulo}</h1>
        <div className="industria-divider"></div>
      </header>

      {/* Bloco 1 - hero */}
      <section
        className="industria-hero"
        style={{ backgroundImage: `url(${blocos[0].imagem})` }}
      >
        <div className="hero-text">
          <h2>{tema}</h2>
          <p className="impactante">{fraseImpactante}</p>
          <p className="complementar">{fraseComplementar}</p>
        </div>
      </section>

      {/* Blocos seguintes */}
      {blocos.slice(1).map((bloco, i) => (
        <section
          key={i}
          className={`industria-block ${i % 2 === 0 ? "left" : "right"}`}
        >
          <div className="block-text">
            <h3>{bloco.titulo}</h3>
            <p>{bloco.texto}</p>
          </div>
          {bloco.imagem && (
            <div className="block-image">
              <img src={bloco.imagem} alt={bloco.titulo} />
            </div>
          )}
        </section>
      ))}

      {/* Bloco 4 - tópicos em foco */}
      {topicos && (
        <section className="industria-topicos">
          <h3>Em foco</h3>
          <div className="topicos-grid">
            {topicos.map((t, i) => (
              <div key={i} className="topico-card">
                <h4>{t.titulo}</h4>
                <p>{t.texto}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bloco citação */}
      {citacao && (
        <section className="industria-citacao">
          <blockquote>{citacao}</blockquote>
        </section>
      )}

      {/* Botão contato */}
      {botaoContato && (
        <section className="industria-contato">
          <button>Fale Conosco</button>
        </section>
      )}
    </section>
  );
};

export default IndustriaPage;
