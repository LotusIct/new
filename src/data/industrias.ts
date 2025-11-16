import saude from "../assets/saude.png";
import saude1 from "../assets/saude1.png";
import saude2 from "../assets/saude2.png";
import saude3 from "../assets/saude3.png";

// IMAGENS DOS SLIDES
import solucoes1 from "../assets/saude2.png";
import solucoes2 from "../assets/saude2.png";
import solucoes3 from "../assets/saude2.png";
import solucoes4 from "../assets/saude2.png";

import inovacao1 from "../assets/saude2.png";
import inovacao2 from "../assets/saude2.png";
import inovacao3 from "../assets/saude2.png";
import inovacao4 from "../assets/saude2.png";

import futuro1 from "../assets/saude2.png";
import futuro2 from "../assets/saude2.png";
import futuro3 from "../assets/saude2.png";
import futuro4 from "../assets/saude2.png";

export const industrias = [
  {
    id: "saude",
    titulo: "Indústrias",
    tema: "Saúde",
    headerImage: saude,
    fraseImpactante: "Tecnologia que salva vidas",
    fraseComplementar:
      "Conectando hospitais, clínicas e laboratórios com inteligência",

    blocos: [
      {
        titulo: "Soluções Digitais",
        texto:
          "Desenvolvemos plataformas avançadas que integram dados clínicos, automatizam processos e ampliam a eficiência operacional em hospitais, clínicas e laboratórios. Nossas soluções utilizam Inteligência Artificial para apoiar decisões médicas, reduzir erros e melhorar a experiência do paciente em toda a cadeia de atendimento."
      },
      {
        titulo: "Automação e Inovação",
        texto:
          "Nossos sistemas aplicam IA para automatizar tarefas repetitivas, como gestão de prontuários, triagem, análise de exames e fluxos administrativos. Isso libera equipes para atividades de maior valor e garante operações mais rápidas, seguras e integradas.",
        imagem: saude1
      },
      {
        titulo: "Mais Resultados",
        texto:
          "Combinamos tecnologia, dados e inteligência preditiva para entregar resultados concretos: redução de custos operacionais, maior assertividade diagnóstica, aceleração de processos internos e aumento da satisfação de pacientes e colaboradores.",
        imagem: saude2
      },
      {
        titulo: "Transformando o Cuidado",
        texto:
          "Estamos redefinindo a maneira como profissionais de saúde utilizam tecnologia. Com IA aplicada e arquitetura moderna, criamos sistemas capazes de antecipar demandas, melhorar decisões clínicas e impulsionar um cuidado mais humano, inteligente e conectado.",
        imagem: saude3
      }
    ],

    topicos: [
      {
        titulo: "Soluções",
        slides: [
          {
            titulo: "Plataforma Integrada de Saúde",
            texto:
              "Integração total entre sistemas, equipes e pacientes, reduzindo erros, eliminando retrabalhos e garantindo uma visão unificada do paciente.",
            imagem: solucoes1
          },
          {
            titulo: "IA para Suporte Clínico",
            texto:
              "Nossa IA acelera análises, apoia decisões médicas e aumenta a precisão diagnóstica com insights e alertas inteligentes.",
            imagem: solucoes2
          },
          {
            titulo: "Automação de Rotinas",
            texto:
              "Automatizamos agendamentos, triagem, faturamento, controle de filas e muito mais, liberando equipes para o que realmente importa.",
            imagem: solucoes3
          },
          {
            titulo: "Segurança e Compliance",
            texto:
              "Total conformidade com LGPD, HIPAA e padrões internacionais que protegem informações clínicas e administrativas.",
            imagem: solucoes4
          }
        ]
      },

      {
        titulo: "Inovação",
        slides: [
          {
            titulo: "Arquitetura Moderna",
            texto:
              "Aplicamos microserviços, APIs inteligentes e estruturas escaláveis preparadas para o futuro da saúde.",
            imagem: inovacao1
          },
          {
            titulo: "Machine Learning Aplicado",
            texto:
              "Modelos que aprendem com o tempo, identificam padrões, reduzem riscos e otimizam fluxos automaticamente.",
            imagem: inovacao2
          },
          {
            titulo: "Experiência do Paciente",
            texto:
              "Chatbots, assistentes virtuais e interfaces intuitivas que tornam a jornada mais humana, rápida e eficiente.",
            imagem: inovacao3
          },
          {
            titulo: "Inovação em Tempo Real",
            texto:
              "Dashboards, monitoramento contínuo e alertas inteligentes que garantem decisões instantâneas.",
            imagem: inovacao4
          }
        ]
      },

      {
        titulo: "Futuro",
        slides: [
          {
            titulo: "Predição de Demandas",
            texto:
              "Modelos preditivos antecipam picos de atendimento, riscos clínicos e demandas operacionais com eficiência.",
            imagem: futuro1
          },
          {
            titulo: "Interoperabilidade Total",
            texto:
              "Padrões FHIR, HL7 e integrações inteligentes que conectam toda a rede de saúde, pública e privada.",
            imagem: futuro2
          },
          {
            titulo: "Medicina Personalizada por IA",
            texto:
              "Tratamentos e recomendações personalizadas baseadas em dados clínicos, biológicos e comportamentais.",
            imagem: futuro3
          },
          {
            titulo: "Hospitais Autônomos",
            texto:
              "IA coordenando filas, priorização de atendimentos, fluxos internos e uso de recursos em tempo real.",
            imagem: futuro4
          }
        ]
      }
    ],

    contato: {
     "titulo": "Fale com nossos especialistas",
  "texto": "Entre em contato para saber como nossas soluções podem ajudar sua empresa.",
  "botaoTexto": "Entrar em Contato",
  "link": "/contato"
    }
  }
];
