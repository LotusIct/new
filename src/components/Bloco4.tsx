import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Destaque {
  titulo: string;
  subtitulo: string;
  imagem: string;
  texto: string;
}

interface Bloco4Props {
  lista: Destaque[];
}

export default function Bloco4({ lista }: Bloco4Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <div className="bloco-4">
      <div className="bloco4-container">

        {/* TÍTULOS NA HORIZONTAL (mas escritos na vertical) */}
        <div className="titulos-horizontais">
          {lista.map((item, i) => (
            <div key={i} className="titulo-wrapper">

              <div
                className={`titulo-vertical ${activeIndex === i ? "active" : ""}`}
                onClick={() => toggle(i)}
              >
                {item.titulo}
                <ChevronDown className={`icon ${activeIndex === i ? "open" : ""}`} />
              </div>

              {activeIndex === i && (
                <div className="conteudo-ao-lado">
                  <h3>{item.subtitulo}</h3>

                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="conteudo-img"
                  />

                  <p>{item.texto}</p>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
