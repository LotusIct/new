import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import IAImage from "../assets/iafato.png"; // imagem inicial

const About: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/ia"); // direciona para a página IA
  };

  return (
    <section className="ia-intro-section">
      <div className="ia-intro-container">
        <div className="ia-intro-left">
          <img src={IAImage} alt="IA Visual" className="ia-image" />
        </div>
        <div className="ia-intro-right">
          <h2 className="ia-title">NewAI</h2>
          <p className="ia-description">
            Nossa inteligência artificial transforma dados em decisões estratégicas,
            automatiza processos e cria soluções inteligentes para o seu negócio.
          </p>
          <button className="learn-more" onClick={handleLearnMore}>
            Saiba Mais →
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
