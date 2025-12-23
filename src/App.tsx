import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carreiras from "./pages/Carreiras";
import Contato from "./pages/Contato";
import IA from "./pages/Ia";
import IndustriaPage from "./pages/IndustriaPage";
import { industrias } from "./data/industrias";
import "./styles/global.css";
import CasePage from "./pages/CaseStudyPage";
import SolucaoPage from "./pages/SolucaoPage";
import AtuacaoPage from "./pages/AtuacaoPage";
import InovationPage from "./pages/InovationPage";
import InsightsPage from "./pages/InsightsPage";
import MovimentoPage from "./pages/MovimentoPage";
import Historia from "./pages/NossaHistoria";
import Missao from "./pages/MissaoValores";
import Proposito from "./pages/NossoProposito";
import Esg from "./pages/CompromissoESG";
import Ontem from "./pages/Ontem";
import Hoje from "./pages/Hoje";
import Amanha from "./pages/Amanha";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* PÁGINAS FIXAS */}
        <Route path="/" element={<Home />} />
        <Route path="/carreiras" element={<Carreiras />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/ia" element={<IA />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/missao" element={<Missao />} />
        <Route path="/proposito" element={<Proposito />} />
        <Route path="/esg" element={<Esg />} />
        <Route path="/ontem" element={<Ontem />} />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/amanha" element={<Amanha />} />
        {/* INDÚSTRIAS */}
        {industrias.map((ind) => (
          <Route
            key={ind.id}
            path={`/industrias/${ind.id}`}
            element={<IndustriaPage {...ind} />}
          />
        ))}

        {/* CASOS */}
        <Route path="/casos/:id" element={<CasePage />} />

        {/* SOLUÇÕES */}
        <Route path="/solucoes/:id" element={<SolucaoPage />} />

        {/* ATUAÇÃO */}
        <Route path="/atuacao/:id" element={<AtuacaoPage />} />

        {/* INOVAÇÃO */}
        <Route path="/inovacao/:id" element={<InovationPage />} />

        {/* INSIGHTS */}
        <Route path="/insights/:id" element={<InsightsPage />} />

        {/* MOVIMENTO */}
        <Route
          path="/movimento/:id"
          element={<MovimentoPage />}
        />

      </Routes>
    </Router>
  );
}
