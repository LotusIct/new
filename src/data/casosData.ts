import cu1 from "../assets/cun1.jpg";
import cu2 from "../assets/cun2.jpg";
import cu3 from "../assets/cun3.jpg";
import cu4 from "../assets/cun4.jpg";
import cu5 from "../assets/cun5.jpg";

export const casosData = [
  {
    id: "otimizacao-logistica-ia",
    title: "Otimização Logística com IA Preditiva",
    problema:
      "Rotas ineficientes e altos custos operacionais prejudicavam a entrega de produtos em tempo hábil.",
    resultado:
      "Redução de 32% no tempo de entrega e economia de 25% em combustível.",
    img: cu1,

    page: {
      titulo: "Otimização Logística com IA Preditiva",
      descricao:
        "Com IA preditiva, rotas passaram a ser recalculadas em tempo real, reduzindo atrasos e proporcionando maior eficiência operacional.",

      secaoTexto: {
        titulo: "Tecnologia Aplicada à Logística Moderna",
        texto:
          "A solução utiliza machine learning, análise histórica, telemetria e fatores externos como clima e tráfego para decisões autônomas.",
      },

      cards: [
        {
          id: "desafio-inicial",
          titulo: "Desafio Inicial",
          texto:
            "A empresa enfrentava rotas longas, alto consumo de combustível e baixa previsibilidade.",
        },
        {
          id: "solucao-implementada",
          titulo: "Solução Implementada",
          texto:
            "Modelo preditivo integrado a telemetria e dashboards interativos em tempo real.",
        },
        {
          id: "tecnologias",
          titulo: "Tecnologias Utilizadas",
          texto:
            "Python, TensorFlow, React, APIs C#, IoT embarcado e arquitetura em nuvem.",
        },
        {
          id: "impacto",
          titulo: "Impacto Gerado",
          texto:
            "Resultados imediatos e escaláveis, promovendo eficiência contínua e tomada de decisão orientada a dados.",
        },
      ],

      contato: {
        titulo: "Entre em Contato",
        texto: "Deseja implementar IA na sua operação logística? Fale conosco.",
      },

      saibaMais: {
        titulo: "Saiba Mais",
        botoes: [
          { label: "Soluções em IA", link: "/ia" },
          { label: "Contato Comercial", link: "/contato" },
          { label: "Outros Casos de Estudo", link: "/casos" },
        ],
      },
    },
  },

  {
    id: "gestao-armazem-inteligente",
    title: "Sistema de Gestão de Armazém Inteligente",
    problema:
      "Falhas no controle de estoque e processos manuais geravam retrabalho.",
    resultado:
      "Precisão de 98% no estoque e aumento de 40% na produtividade.",
    img: cu2,

    page: {
      titulo: "Sistema de Gestão de Armazém Inteligente",
      descricao:
        "Digitalizamos a operação do armazém, reduzindo inconsistências e acelerando fluxos logísticos.",

      secaoTexto: {
        titulo: "Organização e Automação",
        texto:
          "Sensores IoT, automação de processos e sistemas preditivos permitiram uma visão clara do estoque em tempo real.",
      },

      cards: [
        {
          id: "desafio",
          titulo: "Desafio",
          texto:
            "Estoque frequentemente incorreto e atrasos em picking e conferência.",
        },
        {
          id: "solucao",
          titulo: "Solução",
          texto:
            "Sistema automatizado com detecção inteligente e reclassificação automática.",
        },
        {
          id: "tecnologia",
          titulo: "Tecnologias",
          texto:
            "IoT, Python, React, APIs C#, dashboards e integração via RFID.",
        },
        {
          id: "beneficios",
          titulo: "Benefícios",
          texto: "Precisão, velocidade e eliminação de erros manuais.",
        },
      ],

      contato: {
        titulo: "Entre em Contato",
        texto: "Quer transformar seu armazém em uma operação inteligente?",
      },

      saibaMais: {
        titulo: "Explore",
        botoes: [
          { label: "Transformação Digital", link: "/digital" },
          { label: "Contato", link: "/contato" },
          { label: "Ver Todos", link: "/casos" },
        ],
      },
    },
  },

  {
    id: "analise-preditiva-vendas",
    title: "Plataforma de Análise Preditiva de Vendas",
    problema: "Falta de previsibilidade dificultava decisões comerciais.",
    resultado:
      "Previsões com 87% de acurácia e maior lucratividade.",
    img: cu3,

    page: {
      titulo: "Plataforma Preditiva de Vendas",
      descricao:
        "Analisamos padrões históricos e comportamento de mercado para prever demanda futura.",

      secaoTexto: {
        titulo: "Inteligência Comercial",
        texto:
          "Com dashboards dinâmicos, a equipe comercial passou a tomar decisões com base em ciência de dados.",
      },

      cards: [
        {
          id: "cenario",
          titulo: "Cenário",
          texto: "Demanda instável e estoque desalinhado.",
        },
        {
          id: "metodo",
          titulo: "Método",
          texto: "Modelos estatísticos e machine learning.",
        },
        {
          id: "automacao",
          titulo: "Automação",
          texto:
            "Alerta automático para reposição com previsão futura.",
        },
        {
          id: "resultados",
          titulo: "Resultados",
          texto:
            "Estoque mais eficiente e lucros maiores.",
        },
      ],

      contato: {
        titulo: "Fale com a gente",
        texto: "Quer prever a demanda da sua operação?",
      },

      saibaMais: {
        titulo: "Mais Informações",
        botoes: [
          { label: "Contato", link: "/contato" },
          { label: "IA para Negócios", link: "/ia" },
          { label: "Todos os Casos", link: "/casos" },
        ],
      },
    },
  },

  {
    id: "automacao-processos-logisticos",
    title: "Automação de Processos Logísticos",
    problema:
      "Processos manuais geravam lentidão na operação.",
    resultado:
      "Redução de 50% no tempo de processamento.",
    img: cu4,

    page: {
      titulo: "Automação de Processos Logísticos",
      descricao:
        "Digitalizamos fluxos de ponta a ponta, eliminando gargalos na cadeia logística.",

      secaoTexto: {
        titulo: "Fluxos Inteligentes",
        texto:
          "Automação, integração e dashboards em tempo real transformaram a rotina operacional.",
      },

      cards: [
        {
          id: "problema",
          titulo: "Problema",
          texto: "Atrasos e divergências constantes.",
        },
        {
          id: "solucao",
          titulo: "Solução",
          texto:
            "Automação end-to-end com APIs e sistemas inteligentes.",
        },
        {
          id: "tecnologia",
          titulo: "Tecnologia",
          texto:
            "C#, Python, React, banco de dados e integrações.",
        },
        {
          id: "beneficio",
          titulo: "Benefícios",
          texto:
            "Eficiência, rastreabilidade e previsibilidade.",
        },
      ],

      contato: {
        titulo: "Vamos Conversar",
        texto: "Deseja automatizar a sua operação?",
      },

      saibaMais: {
        titulo: "Acesse também",
        botoes: [
          { label: "IA", link: "/ia" },
          { label: "Contate-nos", link: "/contato" },
          { label: "Mais Projetos", link: "/casos" },
        ],
      },
    },
  },

  {
    id: "monitoramento-tempo-real",
    title: "Infraestrutura de Dados e Monitoramento",
    problema:
      "Faltava visibilidade estratégica.",
    resultado:
      "Tomada de decisão acelerada e insights críticos.",
    img: cu5,

    page: {
      titulo: "Monitoramento em Tempo Real",
      descricao:
        "Criamos painéis inteligentes e infraestrutura para dados críticos serem acessados de maneira instantânea.",

      secaoTexto: {
        titulo: "Dados Ao Vivo",
        texto:
          "Pipeline otimizado, dashboards modernos e arquitetura distribuída formam a base do monitoramento.",
      },

      cards: [
        {
          id: "problema",
          titulo: "Problema",
          texto:
            "Informações desatualizadas e dispersas.",
        },
        {
          id: "solucao",
          titulo: "Solução",
          texto: "Centralização e monitoramento em tempo real.",
        },
        {
          id: "tecnologia",
          titulo: "Tecnologias",
          texto:
            "Power BI, React, Python, SQL, Cloud.",
        },
        {
          id: "impacto",
          titulo: "Impacto",
          texto: "Decisões rápidas e precisas.",
        },
      ],

      contato: {
        titulo: "Entre em Contato",
        texto: "Quer monitorar tudo em tempo real?",
      },

      saibaMais: {
        titulo: "Descubra",
        botoes: [
          { label: "IA", link: "/ia" },
          { label: "Contato", link: "/contato" },
          { label: "Ver Todos", link: "/casos" },
        ],
      },
    },
  },
];
