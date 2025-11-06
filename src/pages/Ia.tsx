import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./IA.css";
import mirai from "../assets/mirai.png";
const floatingWords = [
  { word: "imaginação", desc: "Onde ideias nascem e se transformam." },
  { word: "consciência", desc: "A inteligência que aprende e evolui." },
  { word: "criação", desc: "O elo entre o humano e o digital." },
  { word: "dados", desc: "O combustível da inovação contínua." },
  { word: "futuro", desc: "O destino que começa agora." },
];

const MirAI: React.FC = () => {
  return (
    <>
      <Header />
<div className="background-words">
  <span>Inovação</span>
  <span>Tecnologia</span>
  <span>Conexões</span>
  <span>Transformação</span>
  <span>Inteligência</span>
  <span>Futuro</span>
  <span>Integração</span>
  <span>Estratégia</span>
  <span>Digital</span>
</div>

      {/* 🌌 HERO */}
      <section className="mirai-hero">
        <motion.div
          className="mirai-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mirai-title">MirAI</h1>
          <p className="mirai-subtitle">- onde o agora encontra o futuro</p>
          <motion.button
            className="mirai-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Descubra o Futuro
          </motion.button>
        </motion.div>

      </section>

      {/* 💡 SOBRE A MIRAI */}
      <motion.section
        className="mirai-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mirai-section-content">
          <div className="mirai-text">
            <h2>O que é a MirAI</h2>
            <p>
              A <strong>MIRAI</strong> é a fusão entre criatividade humana e inteligência
              artificial. Ela aprende, adapta e cria — transformando ideias em
              experiências vivas. Mais do que uma tecnologia, é uma extensão da
              imaginação.
            </p>
          </div>
          <motion.div
            className="mirai-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={mirai} alt="MirAI conceito" />

          </motion.div>
        </div>
      </motion.section>

      {/* ⚙️ BENEFÍCIOS */}
      <motion.section
        className="mirai-benefits"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Por que MirAI?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Aprendizado Contínuo</h3>
            <p>Melhora a cada interação, evoluindo com você.</p>
          </div>
          <div className="benefit-card">
            <h3>Automação Inteligente</h3>
            <p>Reduz tarefas repetitivas e potencializa resultados.</p>
          </div>
          <div className="benefit-card">
            <h3>Criação Imersiva</h3>
            <p>Gera ideias, imagens e experiências únicas.</p>
          </div>
          <div className="benefit-card">
            <h3>Personalização Real</h3>
            <p>Adapta-se ao estilo, linguagem e propósito de cada usuário.</p>
          </div>
        </div>
      </motion.section>

      {/* 🚀 APLICAÇÕES */}
      <motion.section
        className="mirai-applications"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Aplicações Reais</h2>
        <div className="app-grid">
          <div className="app-card">
            <h4>Design e Criação</h4>
            <p>De conceitos visuais a identidade completa de marca.</p>
          </div>
          <div className="app-card">
            <h4>Dados e Análise</h4>
            <p>Transforma grandes volumes de informação em decisões rápidas.</p>
          </div>
          <div className="app-card">
            <h4>Automação de Processos</h4>
            <p>Integra sistemas e simplifica fluxos complexos.</p>
          </div>
          <div className="app-card">
            <h4>Inovação Empresarial</h4>
            <p>Cria soluções digitais que antecipam o amanhã.</p>
          </div>
        </div>
      </motion.section>

      {/* CTA FINAL */}
      <motion.section
        className="mirai-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>O futuro começa quando você cria com MirAI.</h2>
        <a href="/contato" className="mirai-cta-btn">Fale Conosco</a>
      </motion.section>

      <Footer />
    </>
  );
};

export default MirAI;
