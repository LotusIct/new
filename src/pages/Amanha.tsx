// pages/Amanha.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Amanha: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Amanhã</h1>
      <p>Nossas metas e projetos futuros...</p>

      <div style={{ marginTop: "2rem" }}>
        <button onClick={() => navigate("/hoje")}>Anterior</button>
        <button disabled>Próximo</button>
      </div>
    </div>
  );
};

export default Amanha;
