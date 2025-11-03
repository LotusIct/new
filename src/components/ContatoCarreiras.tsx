import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ usar Link
import "../components/ContatoCarreiras.css";

import sketchContact from "../assets/c22.png";
import sketchCareers from "../assets/c11.png";

export default function ContatoCarreiras() {
  const boxes = [
    {
      title: "Carreiras",
      desc: "Junte-se ao nosso time e participe de projetos inovadores. Descubra oportunidades e envie seu currículo.",
      link: "/carreiras", // 👈 rota da página Carreiras
      btnText: "Ver Vagas",
      bgImg: sketchCareers,
    },
    {
      title: "Fale Conosco",
      desc: "Entre em contato e tire suas dúvidas ou solicite um orçamento personalizado. Estamos prontos para te atender!",
      link: "/contato", // 👈 rota da página Contato
      btnText: "Enviar Mensagem",
      bgImg: sketchContact,
    },
  ];

  return (
    <section className="contato-carreiras">
      <div className="boxes-container">
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            className="box"
            style={{ backgroundImage: `url(${box.bgImg})` }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="overlay"></div>
            <h3 className="box-title">{box.title}</h3>
            <p className="box-desc">{box.desc}</p>

            {/* Link para a página separada */}
            <Link to={box.link} className="box-btn">
              {box.btnText}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
