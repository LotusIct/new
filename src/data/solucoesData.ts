import s1 from "../assets/ai1.png";
import s2 from "../assets/ai1.png";
import s3 from "../assets/ai1.png";
import s4 from "../assets/ai1.png";

export const solucoesData = [
  {
    id: "erp-integrado",
    hero: {
      backgroundImage: s1,
      title: "Soluções",
      titulo: "ERP Integrado",
      subtitulo: "Gestão completa e inteligente para empresas modernas",
    },

    bloco2: {
      titulo: "Visão Geral",
      conteudos: [
        "O ERP Integrado é uma solução completa que centraliza todas as operações da sua empresa em uma única plataforma. Desde finanças, estoque, vendas até atendimento ao cliente, todas as áreas se conectam de forma inteligente, garantindo maior controle e eficiência.",
        "Com nosso ERP, você consegue reduzir erros manuais, acelerar processos e tomar decisões estratégicas baseadas em dados confiáveis. É a ferramenta ideal para empresas que buscam crescimento sustentável e inovação.",
      ],
    },

   bloco3: {
  titulo: "Como Funciona",
  texto: "O sistema funciona como uma plataforma modular, permitindo que cada departamento da empresa utilize funcionalidades específicas conforme a necessidade. A integração entre módulos garante que as informações fluam em tempo real, evitando retrabalho e inconsistências. Além disso, contamos com dashboards intuitivos e relatórios automatizados que facilitam o acompanhamento da performance da empresa.",
  imagens: [s1, s2, s3], // duas lado a lado e uma embaixo
},

bloco4: {
  titulo: "Destaques da Solução",
  lista: [
    {
      titulo: "Economia",
      subtitulo: "Reduza custos operacionais",
      imagem: "/img/solucoes/economia.png",
      texto: "Elimine processos redundantes e otimize recursos internos."
    },
    {
      titulo: "Velocidade",
      subtitulo: "Acelere fluxos de trabalho",
      imagem: "/img/solucoes/velocidade.png",
      texto: "Automatize tarefas repetitivas garantindo respostas rápidas."
    },
    {
  titulo: "Automação",
  subtitulo: "Automatize operações críticas",
  imagem: "/img/solucoes/automacao.png",
  texto:
    "Integre sistemas e automatize operações críticas como faturamento, gestão de estoque e relatórios financeiros."
},
{
  titulo: "Escalabilidade",
  subtitulo: "Seu ERP cresce junto com o negócio",
  imagem: "/img/solucoes/escalabilidade.png",
  texto:
    "O ERP cresce junto com o seu negócio, suportando novas unidades, produtos e processos sem perder performance."
},
{
  titulo: "Integração",
  subtitulo: "Todos os setores conectados",
  imagem: "/img/solucoes/integracao.png",
  texto:
    "Conecte todos os setores da empresa, garantindo que vendas, finanças e logística trabalhem de forma sincronizada."
}
  ]
},

    bloco5: {
      esquerda: {
        titulo: "Funcionalidades Principais",
        conteudo: [
          "Gestão Financeira completa com contas a pagar e receber, fluxo de caixa e conciliação bancária.",
          "Controle de Estoque em tempo real, com alertas de reposição e relatórios de movimentação.",
          "CRM integrado para acompanhar oportunidades de vendas, histórico de clientes e ações de marketing.",
        ],
      },

     direita: {
  titulo: "Benefícios",
  descricao: "Resumo geral sobre as vantagens e melhorias proporcionadas.",

  conteudo: [
    {
      titulo: "Redução de Erros",
      texto: "Redução de erros manuais e retrabalho em processos internos."
    },
    {
      titulo: "Decisões Inteligentes",
      texto: "Tomada de decisão baseada em dados precisos e dashboards completos."
    },
    {
      titulo: "Mais Comunicação",
      texto: "Melhoria na comunicação entre departamentos e aumento da produtividade geral."
    }
  ]
}

    },

    bloco6: {
      titulo: "Tecnologias Utilizadas",
      texto: "Nossa plataforma é construída com tecnologias modernas e seguras: React para interface intuitiva, Node.js para processamento ágil, SQL para armazenamento confiável de dados, integração com APIs de terceiros e suporte a dispositivos móveis. Tudo para garantir performance, segurança e escalabilidade.",
    },

    bloco7: {
      titulo: "Documentação Técnica",
      texto: "O manual técnico detalha todos os módulos do ERP, instruções de instalação, configuração e integração com outros sistemas, permitindo que sua equipe tenha autonomia e facilidade na utilização da plataforma.",
      pdf: "/docs/manual-erp.pdf",
      imagem: s2,
    },

    bloco8: {
      titulo: "Arquitetura da Solução",
      texto: "Nossa arquitetura é baseada em micro-serviços, garantindo que cada módulo funcione de forma independente e escalável. Com servidores distribuídos e banco de dados centralizado, o sistema oferece alta disponibilidade, segurança e facilidade de manutenção.",
      pdf: "/docs/arquitetura-erp.pdf",
      imagem: s3,
    },

    final: {
      esquerda: {
        titulo: "Pronto para implementar essa solução?",
        botao: "Solicitar Demonstração",
      },

      direita: {
        titulo: "Explore Outras Soluções",
        botoes: ["CRM Integrado", "Automação de Processos", "Analytics Avançado"],
      },
    },
  },
];
