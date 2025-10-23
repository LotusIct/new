import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carreiras from "./pages/Carreiras";
import Contato from "./pages/Contato";
import IA from "./pages/Ia"; // ✅ importar a nova página
import "./styles/global.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carreiras" element={<Carreiras />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/ia" element={<IA />} /> {/* ✅ adicionar rota da IA */}
      </Routes>
    </Router>
  );
}
