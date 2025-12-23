// pages/Ontem.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Ontem: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Ontem</h1>
      <p>O início da tecnologia e da IA...</p>

      <div style={{ marginTop: "2rem" }}>
        <button disabled>Anterior</button>
        <button onClick={() => navigate("/hoje")}>Próximo</button>
      </div>
    </div>
  );
};

export default Ontem;
