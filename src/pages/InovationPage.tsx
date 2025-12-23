// src/pages/NovaPage.tsx

import React from "react";
import "./inovationPage.css";
import novaPageData from "../data/inovationData";
import * as Icons from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NovaPage() {
  const { bloco1, bloco2, bloco3, bloco4, bloco5 } = novaPageData;

  return (
    <div className="nova-page">
    <Header />
      {/* BLOCO 1 */}
      <section className="bloco1">
        <video className="bloco1-video" src={bloco1.video} autoPlay muted loop />
        <div className="bloco1-texto">
          <h1>{bloco1.titulo}</h1>
          <p>{bloco1.texto}</p>
        </div>
      </section>

      {/* BLOCO 2 */}
      <section className="bloco2">
        <div className="bloco2-textos">
          <h2>{bloco2.titulo}</h2>
          <p>{bloco2.texto}</p>
        </div>
        <video className="bloco2-video" src={bloco2.video} autoPlay muted loop />
      </section>

      {/* BLOCO 3 */}
      <section className="bloco3">
        <h2>{bloco3.titulo}</h2>
        <div className="bloco3-itens">
          {bloco3.itens.map((item, index) => {
            const IconComponent = (Icons as any)[item.icon];

            return (
              <div key={index} className="bloco3-item">
                {IconComponent && <IconComponent size={42} />}
                <p>{item.texto}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* BLOCO 4 */}
      <section className="bloco4">
        <img className="bloco4-img" src={bloco4.imagem} alt="interface" />
        <div className="bloco4-textos">
          <h3>{bloco4.subtitulo}</h3>
          <h2>{bloco4.titulo}</h2>
          <p>{bloco4.texto}</p>
        </div>
        
      </section>

      {/* BLOCO 5 */}
      <section className="bloco5">
        <div className="bloco5-citacao">
          <blockquote>{bloco5.citacao}</blockquote>
        </div>
        <img className="bloco5-img" src={bloco5.imagem} alt="team" />
      </section>
<Footer />
    </div>
  );
}
