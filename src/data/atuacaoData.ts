import s3 from "../assets/ai1.png";

export const atuacoes = [
  {
    id: "marketing",
    bloco1: {
      imagemFundo: '',
      titulo: "Marketing Digital",
    },
    bloco2: {
      titulo: "Áreas de Atuação",
      lista: ["Consultoria de Marketing", "Campanhas Digitais", "SEO e Ads", "Branding"],
    },
    bloco3: {
      titulo: "Nossa Abordagem",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    bloco4: {
      frase: "Marketing é a arte de conectar marcas com pessoas.",
      autor: "Philip Kotler",
      cargo: "Especialista em Marketing",
      imagem: s3
    },
    bloco5: {
      titulo: "Nosso Diferencial",
      texto: "Integramos dados e criatividade para campanhas mais efetivas e resultados mensuráveis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    bloco6: {
      titulo: "Como Atuamos",
      texto: "Analisamos o público, planejamos campanhas e otimizamos constantemente os resultados.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    bloco7: {
      titulo: "Principais Competências",
      itens: [
        { icone: "/icons/seo.svg", texto: "SEO e SEM" },
        { icone: "/icons/ads.svg", texto: "Publicidade Online" },
        { icone: "/icons/analytics.svg", texto: "Análise de Dados" },
        { icone: "/icons/content.svg", texto: "Marketing de Conteúdo" },
      ],
    },
    bloco8: {
      titulo: "Linha do Tempo do Projeto",
      texto: "Cada fase do marketing é cuidadosamente planejada para resultados consistentes.",
      pontos: [
        {
          titulo: "Pesquisa de Mercado",
          lista: ["Análise de concorrentes", "Segmentação de público", "Tendências do setor"],
          botaoTexto: "Baixar Relatório",
          botaoDownload: "/downloads/marketing_pesquisa.pdf",
          imagem: s3,
          descricao: "Coletamos dados essenciais para entender o mercado e o público-alvo.",
        },
        {
          titulo: "Planejamento de Campanha",
          lista: ["Definição de objetivos", "Planejamento de mídia", "Alinhamento com clientes"],
          botaoTexto: "Baixar Plano",
          botaoDownload: "/downloads/marketing_plano.pdf",
          imagem: s3,
          descricao: "Estruturamos todas as etapas da campanha para garantir o sucesso.",
        },
        {
          titulo: "Execução e Otimização",
          lista: ["Implementação das campanhas", "Monitoramento de KPIs", "Ajustes estratégicos"],
          botaoTexto: "Baixar Relatório",
          botaoDownload: "/downloads/marketing_execucao.pdf",
          imagem: s3,
          descricao: "Acompanhamos resultados e ajustamos as estratégias continuamente.",
        },
      ],
    },
  },
  {
    id: "design",
    bloco1: {
      imagemFundo: "/images/hero_design.jpg",
      titulo: "Design Gráfico",
    },
    bloco2: { 
      titulo: "Áreas de Atuação",
      lista: ["Identidade Visual", "UX/UI", "Design Editorial", "Branding"],
    },
    bloco3: { titulo: "Nossa Abordagem", texto: "Criamos soluções visuais que comunicam a essência da marca." },
    bloco4: { frase: "Design é inteligência feita visual.", autor: "Paula Scher", cargo: "Designer" },
    bloco5: { titulo: "Nosso Diferencial", texto: "Unimos criatividade, estratégia e experiência do usuário." },
    bloco6: { titulo: "Como Atuamos", texto: "Do conceito à execução, entregamos design que gera valor.", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    bloco7: { titulo: "Principais Competências", itens: [
      { icone: "/icons/ux.svg", texto: "UX/UI Design" },
      { icone: "/icons/branding.svg", texto: "Branding" },
      { icone: "/icons/illustration.svg", texto: "Ilustração" },
      { icone: "/icons/typography.svg", texto: "Tipografia" },
    ] },
    bloco8: { titulo: "Linha do Tempo do Projeto", texto: "Processos do design do início ao fim.", pontos: [
      { titulo: "Briefing", lista: ["Coleta de informações", "Análise de marca"], botaoTexto: "Baixar Briefing", botaoDownload: "/downloads/design_briefing.pdf", imagem: "/images/design1.jpg", descricao: "Entendemos o objetivo e público da marca." },
      { titulo: "Conceito Visual", lista: ["Propostas de identidade", "Mockups iniciais"], botaoTexto: "Baixar Conceito", botaoDownload: "/downloads/design_conceito.pdf", imagem: "/images/design2.jpg", descricao: "Criamos o conceito visual inicial da marca." },
      { titulo: "Entrega Final", lista: ["Arte final", "Guia de estilo"], botaoTexto: "Baixar Arte Final", botaoDownload: "/downloads/design_final.pdf", imagem: "/images/design3.jpg", descricao: "Finalizamos o projeto com todos os entregáveis." },
    ]},
  },
  // Continue adicionando outros ids (software, cloud, ia...) da mesma forma
];
