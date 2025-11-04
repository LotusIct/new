import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/ia");
  };

  return (
    <section className="ia-intro-section">
      <div className="ia-intro-container">
        {/* Texto à esquerda (centralizado em telas menores) */}
        <div className="ia-intro-left">
          <h2 className="ia-title">MirAI <p  className="complementar">- onde o agora encontra o futuro</p></h2>
          <p className="ia-description">
          MIRAI combina criatividade e tecnologia, transformando ideias em criações reais. Uma inteligência artificial que conecta imaginação e ação.

          </p>
          <button className="learn-more" onClick={handleLearnMore}>
            Descubra o Futuro
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
