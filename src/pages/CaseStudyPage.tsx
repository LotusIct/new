import { useParams } from "react-router-dom";
import { casosData } from "../data/casosData";
import "./CasePage.css";

export default function CasePage() {
  const { id } = useParams();
  const caso = casosData.find((c) => c.id === id);

  if (!caso) return <h2>Estudo não encontrado</h2>;

  const page = caso.page;

  return (
    <section className="case-page">

      {/* HERO */}
      <div className="case-hero" style={{ backgroundImage: `url(${caso.img})` }}>
        <div className="case-hero-overlay">
          <h1>{page.titulo}</h1>
          <p>{page.descricao}</p>
        </div>
      </div>

      {/* TEXTO PRINCIPAL */}
      <div className="case-text-section">
        <h2>{page.secaoTexto.titulo}</h2>
        <p>{page.secaoTexto.texto}</p>
      </div>

      {/* CARDS */}
      <div className="case-cards">
        {page.cards.map((card) => (
          <div key={card.id} className="case-card">
            <h3>{card.titulo}</h3>
            <p>{card.texto}</p>
          </div>
        ))}
      </div>

      {/* CONTATO + SAIBA MAIS */}
      <div className="case-final-section">
        <div className="case-final-left">
          <h3>{page.contato.titulo}</h3>
          <p>{page.contato.texto}</p>
        </div>

        <div className="case-final-right">
          <h3>{page.saibaMais.titulo}</h3>
          {page.saibaMais.botoes.map((b, i) => (
            <a key={i} href={b.link} className="case-btn">
              {b.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
