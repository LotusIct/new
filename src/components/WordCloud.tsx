import React, { useState } from "react";
import "./WordCloud.css";

type WordItem = {
  id: number;
  word: string;
  left: string; // ex: "10%" (posição relativa)
  top: string;  // ex: "40%"
  description: string;
};

const WORDS: WordItem[] = [
  { id: 1, word: "Inovação", left: "15%",  top: "10%", description: "Criamos soluções novas que trazem vantagem competitiva." },
  { id: 2, word: "Dados",     left: "55%", top: "6%",  description: "Extraímos insights acionáveis a partir dos seus dados." },
  { id: 3, word: "Nuvem",     left: "88%", top: "25%", description: "Arquiteturas escaláveis e seguras na nuvem pública e privada." },
  { id: 4, word: "Automação", left: "80%", top: "42%", description: "Automatizamos processos para reduzir custo e erro humano." },
  { id: 5, word: "Design",    left: "55%", top: "30%", description: "UX/UI que transforma a experiência do usuário." },
  { id: 6, word: "Segurança", left: "12%", top: "35%", description: "Práticas e ferramentas para proteger seus ativos digitais." },
  { id: 7, word: "Integração",left: "35%", top: "20%", description: "APIs e integrações que conectam todos os seus sistemas." },
  { id: 8, word: "Escala",    left: "60%", top: "60%", description: "Projetos pensados para crescer sem perda de performance." },
  { id: 9, word: "Treinamento",left: "85%", top: "8%",  description: "Capacitação para equipes internalizarem as soluções." },
  { id:10, word: "Sustentável",left: "25%",  top: "53%", description: "Foco em processos com menor impacto ambiental e custos." },
];

export default function WordCloud(): React.ReactElement {
  // índice do item ativo por clique/touch (null = nenhum)
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleActive = (id: number) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  const handleKey = (e: React.KeyboardEvent, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleActive(id);
    } else if (e.key === "Escape") {
      setActiveId(null);
    }
  };

  return (
    <section className="wc-section" aria-label="Nuvem de palavras">
      <div className="wc-inner">
        <h2 className="wc-title">Ecossistema de Inovação</h2>
        <p className="wc-sub">
         Descubra os pilares que impulsionam nossas soluções e transformam ideias em resultados.
        </p>

        <div className="wc-canvas" role="list" aria-hidden={false}>
          {WORDS.map(item => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-pressed={activeId === item.id}
              className={`wc-word ${activeId === item.id ? "active" : ""}`}
              style={{ left: item.left, top: item.top }}
              onClick={() => toggleActive(item.id)}
              onKeyDown={(e) => handleKey(e, item.id)}
            >
              <span className="wc-word-label">{item.word}</span>

              <div className="wc-tooltip" role="dialog" aria-hidden={activeId === item.id ? "false" : "true"}>
                <div className="wc-tooltip-title">{item.word}</div>
                <div className="wc-tooltip-text">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
