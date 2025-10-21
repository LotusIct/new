import React from "react";
import { motion } from "framer-motion";
import "../components/ContatoCarreiras.css";

import sketchContact from "../assets/c1.png";
import sketchCareers from "../assets/c2.png";

export default function ContatoCarreiras() {
  const boxes = [
    {
      title: "Carreiras",
      desc: "Junte-se ao nosso time e participe de projetos inovadores. Descubra oportunidades e envie seu currículo.",
      link: "#carreiras",
      btnText: "Ver Vagas",
      bgImg: sketchCareers, // imagem importada
    },
    {
      title: "Fale Conosco",
      desc: "Entre em contato e tire suas dúvidas ou solicite um orçamento personalizado. Estamos prontos para te atender!",
      link: "#contato",
      btnText: "Enviar Mensagem",
      bgImg: sketchContact, // imagem importada
    },
    
  ];

  return (
    <section className="contato-carreiras" id="contato-carreiras">
      <div className="boxes-container">
        {boxes.map((box, index) => (
          <motion.div
            key={index}
            className="box"
            style={{ backgroundImage: `url(${box.bgImg})` }} // aplica imagem de fundo
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="overlay"></div>
            <h3 className="box-title">{box.title}</h3>
            <p className="box-desc">{box.desc}</p>
            <a href={box.link} className="box-btn">{box.btnText}</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
