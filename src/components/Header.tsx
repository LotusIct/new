import { useState, useEffect, useRef } from "react";
import "./Header.css";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">MinhaEmpresa</div>
        <nav className="nav">
          <ul className="menu">
            <li>
              <button onClick={() => toggleMenu("whatWeDo")}>
                Juntos Pela Inovação ▾
              </button>
            </li>
            <li>
              <button onClick={() => toggleMenu("whatWeThink")}>
                Ideias que Transformam ▾
              </button>
            </li>
            <li>
              <button onClick={() => toggleMenu("whoWeAre")}>
                O Que Nos Move ▾
              </button>
            </li>
            <li>
              <button onClick={() => toggleMenu("careers")}>
                Construindo o Futuro ▾
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* 🔹 Mega Menu Container com ref para detectar cliques fora */}
      {openMenu && (
        <div className="mega-container" ref={menuRef}>
          <div className="mega-content">
            {openMenu === "whatWeDo" && (
              <>
                <h2>
                  <a className="link">Juntos Pela Inovação</a>
                </h2>
                <div className="mega-columns">
                  <div className="menu-column">
                    <h4>Soluções</h4>
                    <ul>
                      <li>Transformação Digital</li>
                      <li>Automação de Processos</li>
                      <li>Inteligência Artificial & Dados</li>
                      <li>Análise Preditiva e Dados Estratégicos</li>
                      <li>Cloud & Infraestrutura</li>
                      <li>Cibersegurança</li>
                      <li>Consultoria Estratégica</li>
                      <li>Marketing Digital & Performance</li>
                      <li>Experiência do Cliente (CX)</li>
                    </ul>
                  </div>

                  <div className="menu-column">
                    <h4>Indústrias</h4>
                    <ul>
                      <li>Saúde e Ciências da Vida</li>
                      <li>Serviços Financeiros</li>
                      <li>Varejo & Consumo</li>
                      <li>Energia & Sustentabilidade</li>
                      <li>Setor Público</li>
                      <li>Tecnologia & Telecom</li>
                      <li>Indústria & Manufatura</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {openMenu === "whatWeThink" && (
              <>
                <h2>
                  <a className="link">Ideias que Transformam</a>
                </h2>
                <div className="mega-columns">
                  <div className="menu-column">
                    <h4>Inovação & Tendências</h4>
                    <ul>
                      <li>O futuro da Inteligência Artificial</li>
                      <li>Empresas orientadas por dados</li>
                      <li>Sustentabilidade tecnológica</li>
                      <li>O impacto da automação</li>
                      <li>Cloud como diferencial competitivo</li>
                    </ul>
                  </div>

                  <div className="menu-column">
                    <h4>Insights & Artigos</h4>
                    <ul>
                      <li>Relatórios de mercado</li>
                      <li>Casos de sucesso</li>
                      <li>Entrevistas com especialistas</li>
                      <li>Guia de transformação digital</li>
                      <li>Tecnologia e propósito</li>
                    </ul>
                  </div>

                  <div className="menu-column">
                    <h4>O Futuro em Movimento</h4>
                    <ul>
                      <li>Tecnologias Emergentes</li>
                      <li>Soluções Sustentáveis</li>
                      <li>Inovação Aberta & Startups</li>
                      <li>Transformação da Indústria</li>
                      <li>Digitalização e Eficiência</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {openMenu === "whoWeAre" && (
              <>
                <h2>
                  <a className="link">O Que Nos Move</a>
                </h2>
                <div className="mega-columns">
                  <div className="menu-column">
                    <h4>Sobre a Empresa</h4>
                    <ul>
                      <li>Nossa História</li>
                      <li>Missão, Visão e Valores</li>
                      <li>Nosso Propósito</li>
                      <li>Compromisso ESG</li>
                    </ul>
                  </div>

                  <div className="menu-column">
                    <h4>Estrutura & Liderança</h4>
                    <ul>
                      <li>Equipe Executiva</li>
                      <li>Estrutura Organizacional</li>
                      <li>Parcerias Estratégicas</li>
                      <li>Governança</li>
                    </ul>
                  </div>

                  <div className="menu-column">
                    <h4>Nossos Serviços</h4>
                    <ul>
                      <li>Consultoria e Estratégia</li>
                      <li>Tecnologia e Inovação</li>
                      <li>Operações e Sustentabilidade</li>
                      <li>Treinamento e Capacitação</li>
                      <li>Marketing e Posicionamento de Marca</li>
                      <li>Gestão de Dados Estratégicos</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {openMenu === "careers" && (
              <>
                <h2>
                  <a className="link">Construindo o Futuro</a>
                </h2>
                <div className="mega-columns">
                  <div className="menu-column">
                    <h4>Junte-se a nós</h4>
                    <ul>
                      <li>Vagas abertas</li>
                      <li>Trabalhe conosco</li>
                      <li>Diversidade e inclusão</li>
                      <li>Histórias de colaboradores</li>
                    </ul>
                  </div>

                  <div className="menu-column">
                    <h4>Desenvolvimento Profissional</h4>
                    <ul>
                      <li>Planos de carreira</li>
                      <li>Capacitação contínua</li>
                      <li>Mentoria e liderança</li>
                      <li>Equilíbrio e bem-estar</li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
