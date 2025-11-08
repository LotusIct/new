import React from "react";
import "./Footer.css";
import Logo from "../assets/logo (5).png";
import LogoMobile from "../assets/logonovo.png"; // novo logo mobile

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const FooterSection: React.FC = () => {
  return (
    <footer className="footer-section">
      {/* ===== TOPO ===== */}
      <div className="footer-top">
        
        {/* ===== LOGO DESKTOP/TABLET ===== */}
        <div className="footer-logo-area desktop-logo">
          <img src={Logo} alt="IMBAS Logo" className="footer-logo" />
        </div>

        {/* ===== LOGO MOBILE ===== */}
        <div className="footer-logo-area mobile-logo">
          <img src={LogoMobile} alt="IMBAS Logo Mobile" className="footer-logo-mobile" />
        </div>

        {/* ===== LINKS ===== */}
        <div className="footer-links-center">
          <div className="footer-links-group">
            <h4 className="footer-title">Pages</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Políticas</h4>
            <ul className="footer-links">
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Recursos</h4>
            <ul className="footer-links">
              <li><a href="#">Documentação</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Tutoriais</a></li>
              <li><a href="#">Parcerias</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Suporte</h4>
            <ul className="footer-links">
              <li><a href="#">Central de Ajuda</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== BASE ===== */}
      <div className="footer-bottom">
        <div className="rodape">
          <p className="footer-frase">“Predict. Create. Evolve.”</p>
          <p className="footer-copy">© 2025 IMBAS. Todos os direitos reservados.</p>

          <div className="footer-social-bottom">
            <a href="#" className="social"><FaFacebookF /></a>
            <a href="#" className="social"><FaTwitter /></a>
            <a href="#" className="social"><FaLinkedinIn /></a>
            <a href="#" className="social"><FaYoutube /></a>
            <a href="#" className="social"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
