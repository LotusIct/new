import { useParams } from "react-router-dom";
import { casosData } from "../data/casosData";
import "./CasePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Lightbulb, Target, Zap, Rocket } from 'lucide-react';

export default function CasePage() {
  const { id } = useParams();
  const caso = casosData.find((c) => c.id === id);

  if (!caso) return <h2>Estudo não encontrado</h2>;
const getIcon = (index) => {
    const icons = [Target, Lightbulb, Zap, Rocket];
    const IconComponent = icons[index % icons.length]; // Repete se tiver muitos itens
    return <IconComponent size={32} strokeWidth={1.5} />;
  };
  return (
    <>
      <Header />

      <section className="case-page">

        {/* ------------------------------ */}
        {/* 🧱 BLOCO 1 — HERO COMPLETO      */}
        {/* ------------------------------ */}
        <div
          className="case-hero"
          style={{ backgroundImage: `url(${caso.hero.background})` }}
        >
          <div className="case-hero-overlay">
             <h2 className="case-hero-titles">{caso.hero.title}</h2>
             <div className="case-hero-line"></div>
            <h1 className="case-hero-title">{caso.hero.titulo}</h1>

            

            <div className="case-hero-info">
              <div>
                <h3>Problema</h3>
                <p>{caso.hero.problema}</p>
              </div>

              <div>
                <h3>Solução</h3>
                <p>{caso.hero.solucao}</p>
              </div>

              <div>
                <h3>Resultado</h3>
                <p>{caso.hero.resultado}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------ */}
        {/* 🧱 BLOCO 2 — INDÚSTRIA + SOLUÇÃO */}
        {/* ------------------------------ */}
        <div className="case-block-2">
          <div className="case-block-2-item">
            <h3>Indústria</h3>
            <p>{caso.contexto.industria}</p>
          </div>

          <div className="case-block-2-item">
            <h3>Solução Aplicada</h3>
            <p>{caso.contexto.tipoSolucao}</p>
          </div>
        </div>

        {/* ------------------------------ */}
        {/* 🧱 BLOCO 3 — TEXTOS PRINCIPAIS   */}
        {/* ------------------------------ */}
      <div className="case-text-section">
      {caso.conteudo.map((sec, i) => (
        <div key={i} className="case-text-block">
          
          {/* Container do Ícone para dar destaque */}
          <div className="icon-container">
            {/* Se o ícone vier no objeto sec, use sec.icon, senão use a função */}
            {sec.icon ? <sec.icon size={32} /> : getIcon(i)}
          </div>

          <div className="text-content">
            <h2>{sec.titulo}</h2>
            <p>{sec.texto}</p>
          </div>
          
        </div>
      ))}
    </div>

        {/* ------------------------------ */}
        {/* 🧱 BLOCO 4 — LISTA DE DESTAQUES  */}
        {/* ------------------------------ */}
       <div className="case-highlights-section">
  {/* Título da Seção para dar contexto */}
  <h2 className="section-title">Destaques do Projeto</h2>
  
  <div className="case-cards">
    {caso.destaques.map((d, i) => (
      <div key={i} className="case-card">
        {/* Opcional: Se quiser um ícone decorativo aqui ficaria ótimo */}
        <div className="card-accent"></div> 
        <h3>{d}</h3>
        {/* Se 'd' for um objeto com descrição, renderize o p aqui. 
            Se for só string, o h3 basta. */}
      </div>
    ))}
  </div>
</div>

        {/* ------------------------------ */}
        {/* 🧱 BLOCO 5 — BOTÕES DE NAVEGAÇÃO */}
        {/* ------------------------------ */}
        <div className="case-section-buttons">
          <h3>Explorar Seções</h3>

          <div className="case-btn-group">
            {caso.navegacao.map((sec) => (
              <a key={sec.id} href={`#${sec.id}`} className="case-btn">
                {sec.label}
              </a>
            ))}
          </div>
        </div>

        {/* Renderiza cada seção de navegação */}
    {caso.navegacao.map((sec) => (
  <div id={sec.id} key={sec.id} className="case-nav-section">
    
    <div className="nav-text-content">
      <h2>{sec.titulo}</h2>
      <p>{sec.texto}</p>
    </div>

    <div className="nav-image-wrapper">
      <img src={sec.img} alt={sec.titulo} loading="lazy" />
    </div>

  </div>
))}

        {/* ------------------------------ */}
        {/* 🧱 BLOCO 6 — FINAL EM 2 COLUNAS */}
        {/* ------------------------------ */}
      <div className="case-final-section">
  <div className="casos-contatos">
    
    {/* Coluna Esquerda: O Grande Convite */}
    <div className="case-final-left">
      <h3>{caso.final.esquerda.titulo}</h3>
      {/* Adicionei uma verificação para texto opcional, caso tenha no objeto */}
      {caso.final.esquerda.texto && <p>{caso.final.esquerda.texto}</p>}
      
      <a href="/contato" className="case-btn primary-cta">
        {caso.final.esquerda.botao}
      </a>
    </div>

    {/* Coluna Direita: Navegação Secundária */}
    <div className="case-final-right">
      <h3>{caso.final.direita.titulo}</h3>

      <div className="case-btn-group-vertical">
        {caso.final.direita.botoes.map((b, i) => (
          <a key={i} href="#" className="case-btn secondary-link">
            {b}
          </a>
        ))}
      </div>
    </div>
    
  </div>
</div>
      </section>

      <Footer />
    </>
  );
}
