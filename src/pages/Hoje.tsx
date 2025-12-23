// pages/Hoje.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Hoje: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hoje</h1>
      <p>Atualmente, nossa empresa trabalha com...</p>

      <div style={{ marginTop: "2rem" }}>
        <button onClick={() => navigate("/ontem")}>Anterior</button>
        <button onClick={() => navigate("/amanha")}>Próximo</button>
      </div>
    </div>
  );
};

export default Hoje;
