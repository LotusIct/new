import React from "react";
import { motion } from "framer-motion";
import "./IA.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import introImg from "../assets/iafato.png"; // imagem da seção introdutória

const IA: React.FC = () => {
  return (
    <>
      <Header />

      {/* Seção 1: Introdução full width */}
      <motion.section
        className="ia-intro-section bg-light"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="ia-intro-content">
          <div className="ia-intro-text">
            <h1>NewAI – Inteligência Artificial que Potencializa Negócios</h1>
            <p>
              A NewAI transforma dados complexos em insights estratégicos. Combinando
              aprendizado de máquina, análise preditiva e automação inteligente, ela
              permite decisões rápidas e precisas.
            </p>
          </div>

          <motion.img
            src={introImg}
            alt="IA ilustrativa"
            className="ia-intro-img"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.section>

      {/* Seção 2: Funcionalidades */}
      <motion.section
        className="ia-section bg-dark"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Funcionalidades Principais</h2>
        <div className="ia-section-content">
          <div className="ia-section-text">
            <ul>
              <li><strong>Análise de Dados:</strong> interpreta grandes volumes de informações em tempo real.</li>
              <li><strong>Automação Inteligente:</strong> executa tarefas repetitivas com eficiência.</li>
              <li><strong>Previsões Precisas:</strong> utiliza machine learning para antecipar resultados.</li>
              <li><strong>Integração Simplificada:</strong> conecta-se facilmente aos sistemas da empresa.</li>
              <li><strong>Monitoramento Contínuo:</strong> mantém seu negócio atualizado em tempo real.</li>
            </ul>
          </div>
          <motion.img
            src={introImg}
            alt="Funcionalidades IA"
            className="ia-section-img"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.section>

      {/* Seção 3: Benefícios */}
      <motion.section
        className="ia-section bg-light"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Benefícios</h2>
        <div className="ia-section-content">
          <div className="ia-section-text">
            <p>
              Com a NewAI, empresas aumentam produtividade, reduzem erros e tomam decisões mais assertivas.
              Nossos algoritmos aprendem continuamente, aprimorando resultados.
            </p>
            <p>
              Além disso, a IA permite personalização em grande escala, gerando experiências únicas
              para cada cliente e aumentando o engajamento com sua marca.
            </p>
          </div>
          <motion.img
            src={introImg}
            alt="Benefícios IA"
            className="ia-section-img"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.section>

      {/* Seção 4: Aplicações */}
      <motion.section
        className="ia-section bg-dark"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Exemplos de Aplicação</h2>
        <div className="ia-section-content">
          <div className="ia-section-text">
            <ul>
              <li>Antecipação de tendências de vendas com análise preditiva.</li>
              <li>Automatização de relatórios complexos e repetitivos.</li>
              <li>Recomendações personalizadas para cada cliente.</li>
              <li>Otimização de processos internos e fluxos de trabalho.</li>
              <li>Monitoramento inteligente de métricas e KPIs.</li>
            </ul>
          </div>
          <motion.img
            src={introImg}
            alt="Aplicações IA"
            className="ia-section-img"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="ia-cta-section bg-light"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>Pronto para transformar seu negócio com inteligência artificial?</p>
        <a href="/contato" className="ia-cta-btn">Fale Conosco</a>
      </motion.section>

      <Footer />
    </>
  );
};

export default IA;
