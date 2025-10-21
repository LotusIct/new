import React from "react";
import "./Footer.css";
import Logo from "../assets/ia.png";

// Importando ícones do React Icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const FooterSection: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        {/* Logo e Links */}
        <div className="footer-left">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <div className="footer-links-columns">
            <ul className="footer-links">
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Suporte</a></li>
            </ul>
            <ul className="footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        {/* Redes sociais com ícones */}
        <div className="footer-right">
          <a href="#" className="social"><FaFacebookF /></a>
          <a href="#" className="social"><FaTwitter /></a>
          <a href="#" className="social"><FaLinkedinIn /></a>
          <a href="#" className="social"><FaYoutube /></a>
          <a href="#" className="social"><FaInstagram /></a>
        </div>
      </div>

      {/* Rodapé inferior */}
     <div className="footer-bottom">
        <p className="footer-frase">"Construindo o futuro com inovação e propósito."</p>
        <p className="footer-copy">© 2025 Minha Empresa. Todos os direitos reservados.</p>
        <div className="footer-termos">
          <a className="terms" href="#">Termos de Uso</a>
          <span>•</span>
          <a className="terms" href="#">Privacidade</a>
          <span>•</span>
          <a className="terms" href="#">Cookie</a>
          <a href="#" className="scroll-top">↑</a>
        </div>
      </div>
      
    </footer>
  );
};

export default FooterSection;
