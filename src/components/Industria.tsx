import { useState } from "react";
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
  nome: string;
  descricao: string;
  imagem: string;
  link: string;
}

// Lista de indústrias
const industrias: Industria[] = [
  {
    nome: "Saúde",
    descricao: "Tecnologia e soluções digitais para hospitais, clínicas e laboratórios.",
    imagem: i1,
    link: "#",
  },
  {
    nome: "Engenharia",
    descricao: "Softwares de planejamento, CAD e monitoramento de projetos de engenharia.",
    imagem: i2,
    link: "#",
  },
  {
    nome: "Logística",
    descricao: "Otimização de rotas, transporte e armazenamento com software inteligente.",
    imagem: i3,
    link: "#",
  },
  {
    nome: "Medicina",
    descricao: "Soluções digitais para clínicas, telemedicina e gestão hospitalar.",
    imagem: i4,
    link: "#",
  },
  {
  nome: "Software",
  descricao: "Soluções digitais inteligentes com IA.",
  imagem: i9,
  link: "#",
},

  {
    nome: "E-commerce",
    descricao: "Plataformas completas para vendas online e gestão de produtos.",
    imagem: i5,
    link: "#",
  },
  {
    nome: "Telecom",
    descricao: "Sistemas de comunicação e conectividade para empresas de telecom.",
    imagem: i6,
    link: "#",
  },
  {
    nome: "Educação ",
    descricao: "Softwares educacionais e ferramentas para treinamentos corporativos.",
    imagem: i7,
    link: "#",
  },
  {
    nome: "Cibersegurança",
    descricao: "Proteção digital, monitoramento e soluções contra ataques cibernéticos.",
    imagem: i8,
    link: "#",
  },
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
              key={i}
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
            <a href={industrias[activeIndex].link}>Saiba Mais</a>
          </div>
        </div>
      </div>
    </section>
  );
}
