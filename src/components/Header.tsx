import { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "../assets/logon.png";

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
        <div className="logo">
  <img src={logo} alt="Logo da empresa" />
</div>
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
                    <li>ERP Integrado</li>
                    <li>CRM Inteligente</li>
                    <li>Dashboard Analítico</li>
                    <li>Automação de Processos</li>
                  </ul>
                </div>
<div className="menu-column">
  <h4>Área de Atuação</h4>
  <ul>
    <li>Fábrica de Software</li>
    <li>Inteligência Artificial</li>
    <li>Análises de Dados e Modelos Preditivos</li>
    <li>Marketing Digital</li>
    <li>Design Gráfico</li>
    <li>Consultoria em Tecnologia</li>
    <li>Administração e Processos</li>
    <li>Migração para Nuvem</li>
    <li>Logística Inteligente</li>
    <li>Engenharia e Inovação</li>
    <li>Soluções Médicas e HealthTech</li>
    <li>Automação e ESG</li>
    <li>Formação de Equipes e Treinamentos</li>
  </ul>
</div>

                 <div className="menu-column">
                  <h4>Indústrias</h4>
                  <ul>
                    <li>Saúde</li>
                    <li>Engenharia</li>
                    <li>Logística</li>
                    <li>Medicina</li>
                    <li>Software</li>
                    <li>E-commerce</li>
                    <li>Telecom</li>
                    <li>Educação</li>
                    <li>Cibersegurança</li>
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
                    <h4>Nosso Legado</h4>
                    <ul>
                      <li>Ontem</li>
                      <li>Hoje</li>
                      <li>Amanhã</li>
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
                       <li>Planos de carreira</li>
                      <li>Diversidade e inclusão</li>
                      
                    </ul>
                  </div>

                  <div className="menu-column">
                    <h4>Desenvolvimento Profissional</h4>
                    <ul>
                       <li>Equipes de Alta Performance</li>
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
