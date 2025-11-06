import { useState } from "react";
import { motion } from "framer-motion";
import "./CasosDeEstudo.css";
import { FaArrowRight } from "react-icons/fa";
import cu1 from "../assets/cun1.jpg";
import cu2 from "../assets/cun2.jpg";
import cu3 from "../assets/cun3.jpg";
import cu4 from "../assets/cun4.jpg";
import cu5 from "../assets/cun5.jpg";

interface Caso {
  title: string;
  problema: string;
  solucao: string;
  resultado: string;
  img: string;
}

const casos: Caso[] = [
  {
    title: "Otimização Logística com IA Preditiva",
    problema:
      "Rotas ineficientes e altos custos operacionais prejudicavam a entrega de produtos em tempo hábil.",
    solucao:
      "Desenvolvemos um modelo de IA que analisa padrões históricos e condições em tempo real para prever gargalos e sugerir rotas otimizadas.",
    resultado:
      "Redução de 32% no tempo de entrega e economia de 25% em combustível, com menor impacto ambiental.",
    img: cu1,
  },
  {
    title: "Sistema de Gestão de Armazém Inteligente",
    problema:
      "A empresa enfrentava falhas no controle de estoque e retrabalho em processos manuais.",
    solucao:
      "Implementamos um sistema personalizado com rastreamento em tempo real, automação de inventário e dashboards interativos.",
    resultado:
      "Precisão de 98% na contagem de estoque e aumento de 40% na produtividade operacional.",
    img: cu2,
  },
  {
    title: "Plataforma de Análise Preditiva de Vendas",
    problema:
      "A equipe comercial não conseguia prever a demanda e ajustar o estoque de forma estratégica.",
    solucao:
      "Criamos uma plataforma que combina aprendizado de máquina e visualização de dados para prever vendas e recomendar ações comerciais.",
    resultado:
      "Acurácia de 87% nas previsões e aumento de 20% na margem de lucro trimestral.",
    img: cu3,
  },
  {
    title: "Automação de Processos Logísticos",
    problema:
      "A gestão manual de pedidos e transportes causava atrasos e inconsistências nos relatórios.",
    solucao:
      "Desenvolvemos uma API integrada com sistemas ERP e transportadoras, automatizando atualizações e notificações em tempo real.",
    resultado:
      "Redução de 50% no tempo de processamento de pedidos e aumento da satisfação dos clientes.",
    img: cu4,
  },
  {
    title: "Infraestrutura de Dados e Monitoramento em Tempo Real",
    problema:
      "A ausência de uma base de dados consolidada dificultava decisões estratégicas e análises de desempenho.",
    solucao:
      "Criamos uma infraestrutura robusta em nuvem, com pipelines de dados e painéis em tempo real para monitoramento de KPIs logísticos.",
    resultado:
      "Acesso imediato a insights críticos e ganho de agilidade nas tomadas de decisão corporativas.",
    img: cu5,
  },
];
export default function CasosDeEstudo() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(prev => (prev === 0 ? casos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex(prev => (prev === casos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="casos-section">
  <div className="casos-header">
    <div className="casos-arrows-header">
      <button className="casos-arrows" onClick={prevSlide}>‹</button>
      <button className="casos-arrows" onClick={nextSlide}>›</button>
    </div>
    <div className="casos-title">
      <h2 className="casos-section-title">Casos de Estudo</h2>
    </div>
  </div>

  <div className="casos-carousel-container">
    <div
      className="casos-carousel"
      style={{ transform: `translateX(-${index * (30 + 2)}%)` }}
    >
      {casos.map((caso, i) => (
        <motion.div
          key={i}
          className="casos-card"
          style={{ backgroundImage: `url(${caso.img})` }}
        >
          <div className="casos-card-overlays">
            <h3>{caso.title}</h3>
            <p><strong>Problema:</strong> {caso.problema}</p>
            <p><strong>Solução:</strong> {caso.solucao}</p>
            <p><strong>Resultado:</strong> {caso.resultado}</p>
            <button className="casos-read-more">Saiba mais <FaArrowRight style={{ marginLeft: "8px" }} /></button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}