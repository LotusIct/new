import { useState } from "react";
import { motion } from "framer-motion";
import "./Solucoes.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Imagens
import ss1 from "../assets/ssn1.jpg";
import ss2 from "../assets/ssn3.jpg";
import ss3 from "../assets/ssn2.jpg";
import ss4 from "../assets/ssn4.jpg";

interface Solucao {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
}

const solucoes: Solucao[] = [
  {
    id: "erp-integrado",
    nome: "ERP Integrado",
    descricao: "Gerencie finanças, estoque e operações facilmente.",
    imagem: ss1,
  },
  {
    id: "crm-inteligente",
    nome: "CRM Inteligente",
    descricao: "Acompanhe leads e decisões estratégicas com dados.",
    imagem: ss2,
  },
  {
    id: "dashboard-analitico",
    nome: "Dashboard Analítico",
    descricao: "Visualize KPIs em tempo real para decisões rápidas.",
    imagem: ss3,
  },
  {
    id: "automacao-processos",
    nome: "Automação de Processos",
    descricao: "Automatize tarefas repetitivas e ganhe produtividade.",
    imagem: ss4,
  },
];

export default function Solucoes() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((prev) => (prev === 0 ? solucoes.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev === solucoes.length - 1 ? 0 : prev + 1));

  return (
   <section className="solucoes-section">
  <div className="section-solutions">

    {/* ======== HEADER COM TÍTULO E SETAS ======== */}
   <div className="solutions-header">
  <div className="solutions-title">
    <h2 className="section-titles">Soluções de Software</h2>
  </div>
  <div className="arrows-header">
    <button className="arrows" onClick={() => setIndex(prev => prev === 0 ? solucoes.length - 1 : prev - 1)}>‹</button>
    <button className="arrows" onClick={() => setIndex(prev => prev === solucoes.length - 1 ? 0 : prev + 1)}>›</button>
  </div>
</div>


    {/* ======== CARROSSEL ======== */}
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(-${index * 33.3333}%)` }}>
        {solucoes.map((solucao, i) => (
          <motion.div
            key={i}
            className="card"
            style={{ backgroundImage: `url(${solucao.imagem})` }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-overlay">
              <h3>{solucao.nome}</h3>
              <p>{solucao.descricao}</p>
             <Link to={`/solucoes/${solucao.id}`} className="read-more">
  Saiba Mais <FaArrowRight style={{ marginLeft: "8px" }} />
</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
}
