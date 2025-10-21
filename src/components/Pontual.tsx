import React from "react";
import { motion } from "framer-motion";
import { Users, Cpu, BarChart3, Zap } from "lucide-react"; // ícones do lucide
import "./PorqueNosEscolher.css";

// Tipagem da feature
interface Feature {
  title: string;
  icon: React.ReactNode;
  desc: string;
}

// Lista de features com ícones do lucide
const features: Feature[] = [
  {
    title: "Soluções Personalizadas",
    icon: <Cpu size={40} color="#F0A411" />,
    desc: "Desenvolvemos soluções sob medida que transformam suas ideias em resultados reais, usando tecnologia de ponta."
  },
  {
    title: "Equipe Dedicada",
    icon: <Users size={40} color="#387054" />,
    desc: "Nossa equipe acompanha cada etapa do projeto, garantindo qualidade, atenção aos detalhes e entrega dentro do prazo."
  },
  {
    title: "Flexível e Adaptável",
    icon: <BarChart3 size={40} color="#78349B" />,
    desc: "Modelos de parceria ajustáveis ao seu negócio, alinhados a objetivos, orçamento e metas específicas."
  },
  {
    title: "Entrega Ágil",
    icon: <Zap size={40} color="#00EF5C" />,
    desc: "Soluções de alta qualidade entregues rapidamente, centradas no usuário e focadas em gerar satisfação real."
  }
];

export default function PorqueNosEscolher() {
  return (
    <section className="porque-nos-escolher" id="porque-nos-escolher">
      <div className="conteudo">
        <h2 className="titulo-secao">Por que escolher a nossa empresa?</h2>
        <p className="subtitulo-secao">
          Atuamos há anos ajudando empresas a crescer e inovar com tecnologia, design e processos eficientes.
        </p>

        <div className="grid-features">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card-feature"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="icone">{feature.icon}</div>
              <h3 className="titulo-card">{feature.title}</h3>
              <p className="descricao-card">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
