import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Contato.css";

import backgroundImg from "../assets/cidade2.png"; // fundo completo

const Contato: React.FC = () => {
  return (
    <>
      <Header />

      <section
        className="contato-page"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="contato-overlay">
          <div className="contato-form-container">
          <div className="fomulario">
              <h1>Vamos conversar!</h1>
            <p>Preencha o formulário abaixo e nossa equipe entrará em contato.</p>

            <form className="contato-form">
              <input type="text" placeholder="Seu nome" required />
              <input type="email" placeholder="Seu email" required />
              
              <select required>
                <option value="">Selecione o assunto</option>
                <option value="services">Services</option>
                <option value="investor">Investidor</option>
                <option value="duvidas">Dúvidas</option>
              </select>

              <textarea placeholder="Sua mensagem" rows={6} required></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contato;
