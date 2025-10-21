import React from "react";
import "./About.css";
import IAImage from "../assets/ia.png"; // substitua pelo seu arquivo

const About: React.FC = () => {
  return (
    <section className="ia-intro-section">
      <div className="ia-intro-container">
        {/* Lado esquerdo: imagem */}
        <div className="ia-intro-left">
          <img src={IAImage} alt="IA Visual" className="ia-image" />
        </div>

        {/* Lado direito: texto */}
        <div className="ia-intro-right">
          <h2 className="ia-title">NewAI</h2>
          <p className="ia-description">
            Nossa inteligência artificial transforma dados em decisões estratégicas,
            automatiza processos e cria soluções inteligentes para o seu negócio.
          </p>
          <a href="#" className="learn-more">Saiba Mais →</a>
        </div>
      </div>
    </section>
  );
};

export default About;
