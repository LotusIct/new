import { useState, useEffect, useRef } from "react";
import { X, Menu } from "lucide-react"; // ícones modernos
import "./Header.css";
import logo from "../assets/logon.png";
import { Link } from "react-router-dom";
export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (menuName: string) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  // Fecha menu se clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo da empresa" />
        </div>

        {/* ===== MENU DESKTOP ===== */}
        <nav className="nav desktop-nav">
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

        {/* ===== BOTÃO MOBILE ===== */}
<button
  className="mobile-toggle"
  onClick={() => setMobileOpen(!mobileOpen)}
  aria-label="Alternar menu"
>
  {mobileOpen ? <X size={32} color="#0C0A14" /> : <Menu size={32} color="#0C0A14" />}
</button>
      </header>

      {/* ===== MENU DESKTOP MEGA ===== */}
      {openMenu && !mobileOpen && (
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
                      <li><a href="/inovacao/ia-futuro">O futuro da Inteligência Artificial</a></li>
                      <li><a href="/inovacao/data-driven">Empresas orientadas por dados</a></li>
                      <li><a href="/inovacao/sustentabilidade-tech">Sustentabilidade tecnológica</a></li>
                      <li><a href="/inovacao/automacao-impacto">O impacto da automação</a></li>
                      <li><a href="/inovacao/cloud-vantagem">Cloud como diferencial competitivo</a></li>
                    </ul>
                  </div>
         <div className="menu-column">
            <h4>Insights & Artigos</h4>
              <ul>
                <li>
                  <Link to="/insights/relatorios-de-mercado">Relatórios de mercado</Link>
                </li>

                <li>
                  <a href="/insights/casos-de-sucesso">Casos de sucesso</a>
                </li>
                <li>
                  <a href="/insights/entrevistas-especialistas">Entrevistas com especialistas</a>
                </li>
                <li>
                  <a href="/insights/guia-transformacao-digital">Guia de transformação digital</a>
                </li>
                <li>
                  <a href="/insights/tecnologia-proposito">Tecnologia e propósito</a>
                </li>
              </ul>
          </div>
                   <div className="menu-column">
        <h4>O Futuro em Movimento</h4>
        <ul>
          <li>
            <Link to="/movimento/tecnologias-emergentes">
              Tecnologias Emergentes
            </Link>
          </li>
          <li>
            <Link to="/movimento/solucoes-sustentaveis">
              Soluções Sustentáveis
            </Link>
          </li>
          <li>
            <Link to="/movimento/inovacao-aberta">
              Inovação Aberta & Startups
            </Link>
          </li>
          <li>
            <Link to="/movimento/transformacao-industrial">
              Transformação da Indústria
            </Link>
          </li>
          <li>
            <Link to="/movimento/digitalizacao-eficiencia">
              Digitalização e Eficiência
            </Link>
          </li>
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
                      <li><Link to="/historia">Nossa História</Link></li>
                      <li><Link to="/missao">Missão, Visão e Valores</Link></li>
                      <li><Link to="/proposito">Nosso Propósito</Link></li>
                      <li><Link to="/esg">Compromisso ESG</Link></li>
                    </ul>
                  </div>
                  <div className="menu-column">
                    <h4>Nosso Legado</h4>
                    <ul>
  <li><Link to="/ontem">Ontem</Link></li>
  <li><Link to="/hoje">Hoje</Link></li>
  <li><Link to="/amanha">Amanhã</Link></li>
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

      {/* ===== MENU MOBILE ===== */}
      {mobileOpen && (
        <>
          <div className="mobile-overlay" onClick={() => setMobileOpen(false)}></div>
          <div className="mobile-menu">
              
            <ul>
              <li>
                <button onClick={() => toggleMenu("whatWeDo")}>
                  Juntos Pela Inovação
                </button>
                {openMenu === "whatWeDo" && (
                  <ul className="submenu">
                    <li>ERP Integrado</li>
                    <li>CRM Inteligente</li>
                    <li>Automação</li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => toggleMenu("whatWeThink")}>
                  Ideias que Transformam
                </button>
                {openMenu === "whatWeThink" && (
                  <ul className="submenu">
                    <li>Inovação</li>
                    <li>Insights</li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => toggleMenu("whoWeAre")}>
                  O Que Nos Move
                </button>
                {openMenu === "whoWeAre" && (
                  <ul className="submenu">
                    <li>Sobre</li>
                    <li>Valores</li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => toggleMenu("careers")}>
                  Construindo o Futuro
                </button>
                {openMenu === "careers" && (
                  <ul className="submenu">
                    <li>Vagas</li>
                    <li>Carreira</li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
