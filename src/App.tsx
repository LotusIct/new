import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carreiras from "./pages/Carreiras";
import Contato from "./pages/Contato";
import IA from "./pages/Ia";
import IndustriaPage from "./pages/IndustriaPage";
import { industrias } from "./data/industrias";
import "./styles/global.css";
import CasePage from "./pages/CaseStudyPage";
import { casosData } from "./data/casosData";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carreiras" element={<Carreiras />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/ia" element={<IA />} />

        {/* Rotas dinâmicas das indústrias */}
        {industrias.map((ind) => (
          <Route
            key={ind.id}
            path={`/industrias/${ind.id}`}
            element={<IndustriaPage {...ind} />}
          />
        ))}
        {/* Rotas dinâmicas dos casos */}
        <Route path="/casos/:id" element={<CasePage />} />


      </Routes>
    </Router>
  );
}
