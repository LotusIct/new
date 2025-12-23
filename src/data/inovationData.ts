// src/data/novaPageData.ts
import inovation from "../assets/inovation.mp4";
import complemento from "../assets/complemento inovation.mp4";
import inovationimg from "../assets/inovationimg.jpg"
import complementoimg from "../assets/complementoinovation.jpg"
export interface Bloco1 {
  video: string;
  titulo: string;
  texto: string;
}

export interface Bloco2 {
  titulo: string;
  texto: string;
  video: string;
}

export interface Bloco3Item {
  icon: string;
  texto: string;
}

export interface Bloco3 {
  titulo: string;
  itens: Bloco3Item[];
}

export interface Bloco4 {
  titulo: string;
  subtitulo: string;
  texto: string;
  imagem: string;
}

export interface Bloco5 {
  citacao: string;
  imagem: string;
}

export interface inovationData {
  id: string;
  bloco1: Bloco1;
  bloco2: Bloco2;
  bloco3: Bloco3;
  bloco4: Bloco4;
  bloco5: Bloco5;
}

const novaPageData: inovationData = {
  id: "inovacao-e-tendencias",
  bloco1: {
    video: inovation,
    titulo: "Transformando processos em eficiência real",
    texto:
      "Nossa plataforma foi criada para simplificar fluxos, reduzir retrabalho e entregar mais agilidade no dia a dia das equipes.",
  },

  bloco2: {
    titulo: "Uma nova forma de trabalhar",
    texto: `Com tecnologia intuitiva e integração completa, garantimos que cada etapa do processo seja executada de forma clara, precisa e sem fricção.
Tudo isso com monitoramento contínuo e insights que ajudam você a tomar decisões com mais confiança.`,
    video: complemento,
  },

  bloco3: {
    titulo: "O que você ganha com a nossa solução",
    itens: [
      { icon: "Workflow", texto: "Automação de processos que elimina falhas humanas." },
      { icon: "BarChart3", texto: "Métricas em tempo real para decisões mais estratégicas." },
      { icon: "Users", texto: "Colaboração entre equipes em um único ambiente." },
      { icon: "ShieldCheck", texto: "Segurança e compliance garantidos em todas as operações." },
    ],
  },

  bloco4: {
    titulo: "Simples de usar. Poderoso desde o primeiro dia.",
    subtitulo: "Feito para equipes que precisam produzir mais, com menos esforço.",
    texto: `Nossa interface foi desenhada para ser rápida, objetiva e altamente acessível.
Você não precisa de uma longa curva de aprendizado — basta acessar e começar a usar.
Tudo funciona de forma integrada, reduzindo tempo de operação e aumentando os resultados.`,
    imagem: inovationimg,
  },

  bloco5: {
    citacao:
      "Quando simplificamos processos, abrimos espaço para a inovação. Nossa plataforma nasceu exatamente para isso: liberar equipes para fazer o que realmente importa.",
    imagem: complementoimg,
  },
};

export default novaPageData;
