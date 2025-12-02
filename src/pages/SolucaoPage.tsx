import { useParams } from "react-router-dom";
import { solucoesData } from "../data/solucoesData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bloco4 from "../components/Bloco4"; 
import Bloco5 from "../components/Bloco5";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import "./SolucaoPage.css";

// Tipagem dos destaques do Bloco4
interface Destaque {
  titulo: string;
  descricao: string;
}

// Tipagem simplificada do SolucaoData
interface Solucao {
  id: string;
  hero: {
    backgroundImage: string;
    title: string;
    titulo: string;
    subtitulo: string;
  };
  bloco2: { titulo: string; conteudos: string[] };
  bloco3: { titulo: string; texto: string; imagens: string[] };
  bloco4: { titulo: string; lista: Destaque[] };
 bloco5: {
  esquerda: {
    titulo: string;
    conteudo: string[];
  };
  direita: {
    titulo: string;
    descricao: string;
    conteudo: {
      titulo: string;
      texto: string;
      imagem?: string;
    }[];
  };
};

  bloco6: { titulo: string; texto: string };
  bloco7: { titulo: string; texto: string; pdf: string; imagem: string };
  bloco8: { titulo: string; texto: string; pdf: string; imagem: string };
  final: {
    esquerda: { titulo: string; botao: string };
    direita: { titulo: string; botoes: string[] };
  };
}

// Tipagem dos itens do Bloco5 (direita)
interface ItemBloco5 {
  titulo: string;
  subtitulo: string;
  imagem: string;
  texto: string;
}

export default function SolucaoPage() {
  const { id } = useParams<{ id: string }>();
  const solucao = solucoesData.find((s) => s.id === id);

  if (!solucao) return <h2>Solução não encontrada</h2>;

  // Transformando strings em objetos compatíveis com Bloco5
 const itensBloco5 = solucao.bloco5.direita.conteudo;


  // Componente interno para cada destaque
  function DestaqueItem({ titulo, descricao }: Destaque) {
    const [open, setOpen] = useState(false);

    return (
      <div className="destaque-item" onClick={() => setOpen(!open)}>
        <div className="destaque-header">
          <h4>{titulo}</h4>
          <ChevronDown className={open ? "open" : ""} />
        </div>

        {open && <p className="destaque-desc">{descricao}</p>}
      </div>
    );
  }

  return (
    <>
      <Header />

      <section className="solucao-page">
        {/* BLOCO 1 */}
        <div
          className="solucao-hero"
          style={{
            backgroundImage: `url(${solucao.hero.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
            position: "relative",
          }}
        >
          <div className="hero-overlay">
            <h2 className="hero-title-small">{solucao.hero.title}</h2>
            <div className="hero-line"></div>
            <h1 className="hero-title">{solucao.hero.titulo}</h1>
            <p className="hero-subtitulo">{solucao.hero.subtitulo}</p>
          </div>
        </div>

        {/* BLOCO 2 */}
        <div className="bloco-2">
          <h2>{solucao.bloco2.titulo}</h2>
          {solucao.bloco2.conteudos.map((txt, i) => (
            <p key={i}>{txt}</p>
          ))}
        </div>

        {/* BLOCO 3 */}
        <div className="bloco-3">
          <h2>{solucao.bloco3.titulo}</h2>
          <p>{solucao.bloco3.texto}</p>
          <div className="bloco-3-img-wrapper">
            <div className="row">
              {solucao.bloco3.imagens.slice(0, 2).map((img, i) => (
                <img key={i} src={img} alt={`imagem ${i + 1}`} className="img-lado" />
              ))}
            </div>
            <div className="row">
              <img src={solucao.bloco3.imagens[2]} alt="imagem 3" className="img-baixo" />
            </div>
          </div>
        </div>

        {/* BLOCO 4 */}
        <div className="bloco4destaque">
          <h2 className="bloco4title">{solucao.bloco4.titulo}</h2>
          <Bloco4 lista={solucao.bloco4.lista} />
        </div>

        {/* BLOCO 5 */}
        <div className="bloco-5">
          {/* LADO ESQUERDO */}
          <div className="bloco5-esq">
            <h2>{solucao.bloco5.esquerda.titulo}</h2>
           {solucao.bloco5.esquerda.conteudo.map((c, i) => (
    <p key={i} className="conteudo-com-seta">{c}</p>
  ))}

          </div>

          {/* LADO DIREITO — CÍRCULO */}
              <div className="bloco-6">
          <h2>{solucao.bloco6.titulo}</h2>
          <p>{solucao.bloco6.texto}</p>
        </div>
         
        </div>

        {/* BLOCO 6 */}
      <Bloco5
  titulo={solucao.bloco5.direita.titulo}
  descricao={solucao.bloco5.direita.descricao}
  itens={itensBloco5}
/>

   <div className="bloco-7-8-container">
     <h2 className="bloco-7-8-titulo">Recursos e Documentação</h2>
  {/* BLOCO 7 */}
  <div className="bloco-7">
    <div className="bloco7-text">
     
       <div className="bloco7-img">
      <img src={solucao.bloco7.imagem} alt="" />
    </div>
     <h2>{solucao.bloco7.titulo}</h2>
      <p>{solucao.bloco7.texto}</p>
     <a className="btn-pdf btn-arrow" href={solucao.bloco7.pdf} download>
  Saiba Mais
  <span className="arrow">→</span>
</a>
    </div>

  </div>

  {/* BLOCO 8 */}
  <div className="bloco-8">
    <div className="bloco7-text">
     
       <div className="bloco7-img">
      <img src={solucao.bloco8.imagem} alt="" />
    </div>
     <h2>{solucao.bloco8.titulo}</h2>
      <p>{solucao.bloco8.texto}</p>
     <a className="btn-pdf btn-arrow" href={solucao.bloco8.pdf} download>
  Saiba Mais
  <span className="arrow">→</span>
</a>
    </div>
    
  </div>
</div>


        {/* BLOCO FINAL */}
  <div className="solucao-final">
  <div className="final-left">
    <h3>{solucao.final.esquerda.titulo}</h3>
    <a href="/contato" className="cta-btn primary-cta btn-arrow">
      {solucao.final.esquerda.botao} <span className="arrow">→</span>
    </a>
  </div>

  <div className="final-right">
    <h3>{solucao.final.direita.titulo}</h3>
    <div className="link-btn-group-vertical">
      {solucao.final.direita.botoes.map((b, i) => (
        <a key={i} href="#" className="link-btn secondary-link btn-arrow">
          {b} <span className="arrow">→</span>
        </a>
      ))}
    </div>
  </div>
</div>


      </section>

      <Footer />
    </>
  );
}
