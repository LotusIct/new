import React from "react";
import { insightsData } from "../data/insightsData";
import "./insightsPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
const RelatoriosMercado: React.FC = () => {
  return (
     <>
          <Header />
    <div className="relatorios-page">

      {insightsData.blocos.map((bloco, index) => {
        if (bloco.tipo === "banner_video") {
          return (
            <section key={index} className="banner-video-bg">

              {/* Vídeo de fundo */}
              <video
                className="bg-video"
                src={bloco.video_url}
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Overlay escuro */}
              <div className="bg-overlay"></div>

              {/* Conteúdo */}
              <div className="banner-content-overlay">
                <h1>{bloco.titulo}</h1>
                <div className="line"></div>
                <h3>{bloco.subtitulo}</h3>
                <p>{bloco.texto}</p>
              </div>

            </section>
          );
        }

        if (bloco.tipo === "texto") {
          return (
            <section key={index} className="texto-bloco">
              <h2>{bloco.titulo}</h2>
              <div className="line-small"></div>
              <p>{bloco.texto}</p>
            </section>
          );
        }

        return null;
      })}

    </div>
    <Footer />
        </>
  );
};

export default RelatoriosMercado;
