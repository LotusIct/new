import Counter from "./Counter";
import "./Services.css";

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-background">
        <div className="stats-intro">
          <h2>Nosso Impacto</h2>
          <p>
            Atuamos em diversos setores, entregando resultados concretos e
            impulsionando a inovação. Confira alguns números que mostram nossa
            experiência e compromisso.
          </p>
        </div>

        <div className="stats-grid">
          <Counter end={120} label="Projetos Concluídos" />
          <Counter end={50} label="Clientes Satisfeitos" />
          <Counter end={15} label="Anos de Experiência" />
          <Counter end={20} label="Projetos em Andamento" />
        </div>
      </div>
    </section>
  );
}
