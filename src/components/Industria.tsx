import { useState } from "react";
import { Link } from "react-router-dom";
import "./Industrias.css";

// Importando imagens
import i1 from "../assets/in1.png";
import i2 from "../assets/in2.png";
import i3 from "../assets/in3.png";
import i4 from "../assets/in4.png";
import i5 from "../assets/in5.png";
import i6 from "../assets/in6.png";
import i7 from "../assets/in7.png";
import i8 from "../assets/in8.png";
import i9 from "../assets/in9.png";

// Tipagem
interface Industria {
  id: string; // ✅ id único para rota
  nome: string;
  descricao: string;
  imagem: string;
}

// Lista de indústrias
export const industrias: Industria[] = [
  { id: "saude", nome: "Saúde", descricao: "Tecnologia e soluções digitais para hospitais, clínicas e laboratórios.", imagem: i1 },
  { id: "engenharia", nome: "Engenharia", descricao: "Softwares de planejamento, CAD e monitoramento de projetos de engenharia.", imagem: i2 },
  { id: "logistica", nome: "Logística", descricao: "Otimização de rotas, transporte e armazenamento com software inteligente.", imagem: i3 },
  { id: "medicina", nome: "Medicina", descricao: "Soluções digitais para clínicas, telemedicina e gestão hospitalar.", imagem: i4 },
  { id: "software", nome: "Software", descricao: "Soluções digitais inteligentes com IA.", imagem: i9 },
  { id: "ecommerce", nome: "E-commerce", descricao: "Plataformas completas para vendas online e gestão de produtos.", imagem: i5 },
  { id: "telecom", nome: "Telecom", descricao: "Sistemas de comunicação e conectividade para empresas de telecom.", imagem: i6 },
  { id: "educacao", nome: "Educação", descricao: "Softwares educacionais e ferramentas para treinamentos corporativos.", imagem: i7 },
  { id: "ciberseguranca", nome: "Cibersegurança", descricao: "Proteção digital, monitoramento e soluções contra ataques cibernéticos.", imagem: i8 },
];

export default function Industrias() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="industrias-section">
      <h1 className="industrias-title">Indústrias</h1>
      <div className="industrias-container">
       
        {/* Lado esquerdo: lista */}
        <div className="industrias-list">
          {industrias.map((ind, i) => (
            <div
              key={ind.id}
              className={`industria-item ${activeIndex === i ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(i)}
            >
              {ind.nome}
            </div>
          ))}
        </div>

        {/* Lado direito: painel de imagem e texto */}
        <div
          className="industrias-content"
          style={{ backgroundImage: `url(${industrias[activeIndex].imagem})` }}
        >
          <div className="industrias-text">
            <h3>{industrias[activeIndex].nome}</h3>
            <p>{industrias[activeIndex].descricao}</p>
            {/* ✅ Link para a página individual */}
            <Link to={`/industrias/${industrias[activeIndex].id}`} className="saiba-mais">
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
