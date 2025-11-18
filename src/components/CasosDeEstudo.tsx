import { useState } from "react";
import { motion } from "framer-motion";
import "./CasosDeEstudo.css";
import { FaArrowRight } from "react-icons/fa";
import cu1 from "../assets/cun1.jpg";
import cu2 from "../assets/cun2.jpg";
import cu3 from "../assets/cun3.jpg";
import cu4 from "../assets/cun4.jpg";
import cu5 from "../assets/cun5.jpg";
import { useNavigate } from "react-router-dom";

interface Caso {
  id: string;
  title: string;
  problema: string;
  resultado: string;
  img: string;
}

const casos: Caso[] = [
  {
    id: "otimizacao-logistica-ia",
    title: "Otimização Logística com IA Preditiva",
    problema:
      "Rotas ineficientes e altos custos operacionais prejudicavam a entrega de produtos em tempo hábil.",
    resultado:
      "Redução de 32% no tempo de entrega e economia de 25% em combustível, com menor impacto ambiental.",
    img: cu1,
  },
  {
    id: "gestao-armazem-inteligente",
    title: "Sistema de Gestão de Armazém Inteligente",
    problema:
      "A empresa enfrentava falhas no controle de estoque e retrabalho em processos manuais.",
    resultado:
      "Precisão de 98% na contagem de estoque e aumento de 40% na produtividade operacional.",
    img: cu2,
  },
  {
    id: "analise-preditiva-vendas",
    title: "Plataforma de Análise Preditiva de Vendas",
    problema:
      "A equipe comercial não conseguia prever a demanda e ajustar o estoque de forma estratégica.",
    resultado:
      "Acurácia de 87% nas previsões e aumento de 20% na margem de lucro trimestral.",
    img: cu3,
  },
  {
    id: "automacao-processos-logisticos",
    title: "Automação de Processos Logísticos",
    problema:
      "A gestão manual de pedidos e transportes causava atrasos e inconsistências nos relatórios.",
    resultado:
      "Redução de 50% no tempo de processamento de pedidos e aumento da satisfação dos clientes.",
    img: cu4,
  },
  {
    id: "monitoramento-tempo-real",
    title: "Infraestrutura de Dados e Monitoramento em Tempo Real",
    problema:
      "A ausência de uma base de dados consolidada dificultava decisões estratégicas e análises de desempenho.",
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
const navigate = useNavigate();

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
  {/* Só mostra as setas no desktop */}

  <div
    className="casos-carousel"
    style={{
      transform:
        window.innerWidth > 968
          ? `translateX(-${index * (30 + 2)}%)`
          : "none",
    }}
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
          <p><strong>Resultado:</strong> {caso.resultado}</p>

          <button
  className="casos-read-more"
  onClick={() => navigate(`/casos/${caso.id}`)}
>
  Saiba mais <FaArrowRight style={{ marginLeft: "20px" }} />
</button>


        </div>
      </motion.div>
    ))}
  </div>
</div>

</section>
  );
}