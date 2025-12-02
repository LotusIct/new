import { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

interface Item {
  titulo: string;
  imagem: string;
  texto: string;
}

interface Props {
  titulo: string;
  descricao: string;
  itens: Item[];
}

const COLORS = ["#BCAAF3", "#7E6BCC", "#CFC7FF"];

export default function Bloco5Recharts({ titulo, descricao, itens }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [cardPos, setCardPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {/* ====================== COLUNA ESQUERDA ====================== */}
      <div style={{ width: "350px", textAlign: "left" }}>
        <h2 className="circle-title">{titulo}</h2>
        <p style={{ marginTop: "10px", fontSize: "1.1rem" }}>{descricao}</p>
      </div>

      {/* ====================== COLUNA DIREITA - GRÁFICO ====================== */}
      <div style={{ position: "relative", width: 600, height: 600, marginLeft:20 }}>
        {/* CARD QUE MOSTRA O ITEM DO HOVER */}
        {activeIndex !== null && (
          <div
            className="circle-card"
            style={{
              position: "absolute",
              left: cardPos.x,
              top: cardPos.y,
              transform: "translate(-50%, -50%)",
              width: 240,
              background: "#fff",
              padding: 15,
              borderRadius: 10,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              pointerEvents: "none",
            }}
          >
            <h3>{itens[activeIndex].titulo}</h3>
            {itens[activeIndex].imagem && (
              <img
                src={itens[activeIndex].imagem}
                alt=""
                style={{ width: "100%", borderRadius: 8 }}
              />
            )}
            <p>{itens[activeIndex].texto}</p>
          </div>
        )}

        {/* ====================== GRÁFICO ====================== */}
        <PieChart width={500} height={500}  onMouseLeave={() => setActiveIndex(null)} >
          <Pie
            data={itens.map((item) => ({ name: item.titulo, value: 1 }))}
            dataKey="value"
            cx={250}
            cy={250}
            outerRadius={180}
            onMouseEnter={(data, index) => {
              setActiveIndex(index);

              const RADIAN = Math.PI / 180;
              const midAngle = data.midAngle;
              const dist = 220;

              const x = 250 + dist * Math.cos(-midAngle * RADIAN);
              const y = 250 + dist * Math.sin(-midAngle * RADIAN);

              setCardPos({ x, y });
            }}
           
            label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
              const RADIAN = Math.PI / 180;
              const radius = innerRadius + (outerRadius - innerRadius) / 2;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
          x={x}
          y={y}
          fill="#0C0A14"
          fontSize={14}
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
          pointerEvents="none"
        >
                  {itens[index].titulo}
                </text>
              );
            }}
          >
            {itens.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}
