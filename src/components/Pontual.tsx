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
    title: "Soluções Sob Medida",
    icon: <Cpu size={40} color="#00BFA6" />,
    desc: "Integramos tecnologia, design e estratégia para criar soluções únicas que impulsionam o crescimento da sua marca."
  },
  {
    title: "Time Especialista",
    icon: <Users size={40} color="#00856F" />,
    desc: "Profissionais experientes, criativos e comprometidos em entregar resultados reais e escaláveis."
  },
  {
    title: "Performance e Dados",
    icon: <BarChart3 size={40} color="#5C33F6" />,
    desc: "Analisamos indicadores e insights para orientar decisões inteligentes e aumentar a eficiência do seu negócio."
  },
  {
    title: "Entrega Ágil e Segura",
    icon: <Zap size={40} color="#F0A411" />,
    desc: "Metodologias ágeis que garantem qualidade, velocidade e segurança em cada etapa do projeto."
  },
  {
    title: "Inovação Contínua",
    icon: <Cpu size={40} color="#FF5F6D" />,
    desc: "Acompanhamos tendências tecnológicas e aplicamos inovações que mantêm sua empresa à frente do mercado."
  },
  {
    title: "Parceria Estratégica",
    icon: <Users size={40} color="#00C9A7" />,
    desc: "Mais do que fornecedores, somos parceiros no seu crescimento digital e operacional."
  }
];


export default function PorqueNosEscolher() {
  return (
    <section className="porque-nos-escolher" id="porque-nos-escolher">
      <div className="conteudo">
        <h2 className="titulo-secao">  <span className="letras-fundos">P</span>or que escolher a nossa empresa</h2>
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
