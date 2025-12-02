import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // <-- import Link
import "../components/Portfolio.css";
// Importando imagens
import pj1 from "../assets/prj1.png";
import pj2 from "../assets/prj2.png";
import pj3 from "../assets/prj333.png";
import pj4 from "../assets/prj4.png";
import pj5 from "../assets/prj5.png";
import pj6 from "../assets/prj6.png";
import pj7 from "../assets/prj7.png";
import pj8 from "../assets/prj8.png";
import pj9 from "../assets/prj99.png";
import pj10 from "../assets/prj10.png";
import pj11 from "../assets/prj11.png";
import pj12 from "../assets/prj12.png";
import pj13 from "../assets/prj13.png";

interface Service {
  id: string;
  title: string;
  desc: string;
  img: string;
  link: string;
}

const services: Service[] = [
  { id: "marketing", title: "Marketing Digital", desc: "Impulsione sua marca com campanhas criativas e estratégias orientadas por dados.", img: pj1, link: "/atuacao/marketing" },
  { id: "design", title: "Design Gráfico", desc: "Criação de identidades visuais impactantes e experiências memoráveis.", img: pj2, link: "/atuacao/design" },
  { id: "software", title: "Fábrica de Software", desc: "Desenvolvimento sob medida com foco em performance e escalabilidade.", img: pj3, link: "/atuacao/software" },
  { id: "cloud", title: "Migração para Nuvem", desc: "Leve sua operação para a nuvem com segurança, eficiência e suporte contínuo.", img: pj4, link: "/atuacao/cloud" },
  { id: "ia", title: "Inteligência Artificial", desc: "Automatize decisões e otimize resultados com IA aplicada ao seu negócio.", img: pj5, link: "/atuacao/ia" },
  { id: "dados", title: "Análises de Dados e Modelos Preditivos", desc: "Transforme dados em insights estratégicos para prever tendências e oportunidades.", img: pj6, link: "/atuacao/dados" },
  { id: "processos", title: "Administração e Processos", desc: "Gestão eficiente e digitalização completa de fluxos administrativos.", img: pj7, link: "/atuacao/processos" },
  { id: "logistica", title: "Logística Inteligente", desc: "Soluções para otimizar transportes, estoques e cadeia de suprimentos.", img: pj8, link: "/atuacao/logistica" },
  { id: "engenharia", title: "Engenharia e Inovação", desc: "Tecnologia aplicada para eficiência e inovação em projetos de engenharia.", img: pj9, link: "/atuacao/engenharia" },
  { id: "medica", title: "Soluções Médicas e HealthTech", desc: "Ferramentas digitais e automação para clínicas, hospitais e laboratórios.", img: pj10, link: "/atuacao/medica" },
  { id: "treinamentos", title: "Formação de Equipes e Treinamentos", desc: "Capacitação de times e líderes para uma cultura de inovação e alta performance.", img: pj11, link: "/atuacao/treinamentos" },
  { id: "consultoria", title: "Consultoria em Tecnologia", desc: "Apoio estratégico para acelerar a transformação digital da sua empresa.", img: pj12, link: "/atuacao/consultoria" },
  { id: "automacao", title: "Automação e ESG", desc: "Processos automatizados com foco em eficiência energética e ESG.", img: pj13, link: "/atuacao/automacao" },
];

export default function TransformacaoEmpresarial() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, services.length));
  };

  return (
    <section className="portfolio-transformacao">
      <div className="portfolio-content">
        <h2 className="portfolio-title">
          <span className="letra-fundo">C</span>omo podemos transformar a sua empresa
        </h2>

        <p className="portfolio-subtitle">
          Atuamos em diversas frentes para acelerar o crescimento e a inovação de negócios em diferentes setores.
        </p>

        <div className="portfolio-grid">
          {services.slice(0, visibleCount).map((service) => (
            <motion.div
              key={service.id}
              className="portfolio-card"
              style={{ backgroundImage: `url(${service.img})` }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="portfolio-overlay">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to={service.link} className="btn-arrow">
                  Saiba Mais <span className="arrow">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < services.length && (
          <button className="ver-mais-btn" onClick={handleShowMore}>
            Veja mais
          </button>
        )}
      </div>
    </section>
  );
}
