import { useState } from "react";
import { motion } from "framer-motion";
import "./Solucoes.css";

// Importando imagens
import ss1 from "../assets/ss1.png";
import ss2 from "../assets/ss2.png";
import ss3 from "../assets/ss3.png";
import ss4 from "../assets/ss4.png";
import ss5 from "../assets/ss5.png";
import ss6 from "../assets/ss6.png";
import ss7 from "../assets/ss7.png";
import ss8 from "../assets/ss8.png";

// Tipagem das soluções
interface Solucao {
  nome: string;
  descricao: string;
  beneficios: string;
  imagem: string;
}

// Exemplo de soluções
export const solucoes: Solucao[] = [
  {
    nome: "ERP Integrado",
    descricao:
      "Sistema completo para gerenciar finanças, estoque e operações em uma única plataforma.",
    beneficios:
      "Redução de retrabalho, integração de dados em tempo real e maior eficiência operacional.",
    imagem: ss1,
  },
  {
    nome: "CRM Inteligente",
    descricao:
      "Ferramenta para gestão de relacionamento com clientes, com análise preditiva de vendas.",
    beneficios:
      "Aumento da conversão de leads, acompanhamento de métricas e decisões estratégicas baseadas em dados.",
    imagem: ss2,
  },
  {
    nome: "Dashboard Analítico",
    descricao:
      "Visualização de KPIs e métricas em tempo real, facilitando a tomada de decisão.",
    beneficios:
      "Insights imediatos, relatórios automatizados e monitoramento de performance em tempo real.",
    imagem: ss3,
  },
  {
    nome: "Automação de Processos",
    descricao:
      "Automatiza tarefas repetitivas e integra sistemas internos para aumentar a produtividade.",
    beneficios:
      "Redução de erros humanos, ganho de tempo e processos mais ágeis.",
    imagem: ss4,
  },
  {
    nome: "Plataforma de E-commerce",
    descricao:
      "Sistema robusto para vendas online, gestão de produtos e pagamentos seguros.",
    beneficios:
      "Expansão de canais de vendas, análise de comportamento do cliente e melhor experiência de compra.",
    imagem: ss5,
  },
  {
    nome: "Segurança e Compliance",
    descricao:
      "Soluções de proteção de dados, monitoramento e auditoria para cumprir normas regulatórias.",
    beneficios:
      "Redução de riscos, proteção de informações críticas e conformidade legal garantida.",
    imagem: ss6,
  },
  {
    nome: "Analytics e BI",
    descricao:
      "Ferramentas de análise de dados para extrair insights estratégicos e tomar decisões inteligentes.",
    beneficios:
      "Acurácia na tomada de decisão, dashboards customizáveis e relatórios automatizados.",
    imagem: ss7,
  },
  {
    nome: "Integração de APIs",
    descricao:
      "Conecta sistemas internos e externos de forma segura e eficiente, permitindo fluxo de dados contínuo.",
    beneficios:
      "Melhoria na comunicação entre sistemas, redução de retrabalho e dados sempre atualizados.",
    imagem: ss8,
  },
];

export default function Solucoes() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? solucoes.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === solucoes.length - 1 ? 0 : prev + 1));
  };

  return (
  <section className="solucoes-section">
  <h2 className="section-title">Soluções de Software</h2>

  <div className="carousel-wrapper">
    <button className="arrows left" onClick={prevSlide}>‹</button>

    <div className="carousel-container">
      <div className="carousel">
        {solucoes.slice(index, index + 3).map((solucao, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundImage: `url(${solucao.imagem})` }}
          >
            <div className="card-overlay">
              <h3>{solucao.nome}</h3>
              <p>{solucao.descricao}</p>
              <p><strong>Benefícios:</strong> {solucao.beneficios}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <button className="arrows right" onClick={nextSlide}>›</button>
  </div>
</section>

  );
}
