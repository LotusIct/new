import "./Locais.css";

export default function Locais() {
  return (
    <section className="locais-section">
      <div className="overlay"></div>

      <div className="locais-content">
        <h2 className="locais-title">Onde Atuamos</h2>
        <p className="locais-intro">
          Nossa trajetória começa na <strong>Itália</strong>, onde nasceu a arte e o
          cuidado artesanal em cada detalhe. Expandimos para a <strong>Espanha</strong>,
          incorporando a energia criativa e a paixão pela inovação. Em <strong>Portugal</strong>,
          aprimoramos a integração entre tradição e tecnologia.
        </p>

        <p className="locais-intro">
          Agora, retornamos à nossa <strong>terra natal — o Brasil</strong> 🌎 trazendo toda essa
          experiência internacional. Com tecnologia feita à mão, design sensível e soluções
          inteligentes, estamos transformando negócios locais em experiências globais.
        </p>

        <div className="locais-grid">
          <div className="pais-card italia">
            <h3>🇮🇹 Itália</h3>
            <p>Precisão, elegância e tradição artesanal. O ponto de partida da nossa essência criativa.</p>
          </div>
          <div className="pais-card espanha">
            <h3>🇪🇸 Espanha</h3>
            <p>Energia vibrante e ousadia no design. Onde a inovação ganhou forma e movimento.</p>
          </div>
          <div className="pais-card portugal">
            <h3>🇵🇹 Portugal</h3>
            <p>Tradição e modernidade lado a lado. A harmonia perfeita entre arte e tecnologia.</p>
          </div>
          <div className="pais-card brasil">
            <h3>🇧🇷 Brasil</h3>
            <p>Nosso lar, onde tecnologia, emoção e criatividade se encontram para impulsionar o futuro.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
