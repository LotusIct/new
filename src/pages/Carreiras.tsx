import { motion } from "framer-motion";
import "./Carreiras.css";
import careersBg from "../assets/carreira3.png";
import aiImg from "../assets/equipe1.png";
import devImg from "../assets/equipe2.png";
import gestaoImg from "../assets/equipe3.png";
import equipesImg from "../assets/equipe4.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Carreiras: React.FC = () => {
  return (
    <>
      <Header />

      {/* Topo */}
      <section
        className="carreiras-top"
        style={{ backgroundImage: `url(${careersBg})` }}
      >
        <div className="overlay"></div>
        <motion.div
          className="carreiras-top-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Carreiras
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Faça parte do nosso time e ajude a transformar ideias em soluções
            digitais. Valorizamos criatividade, colaboração e propósito.
          </motion.p>
          <motion.a
            href="#vagas"
            className="carreiras-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Ver Vagas
          </motion.a>
        </motion.div>
      </section>

      {/* Seção AI & Programação */}
      <motion.section
        className="carreiras-section-alternada"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="carreiras-img left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1}}
        >
          <img src={aiImg} alt="AI e Programação" />
        </motion.div>
        <motion.div
          className="carreiras-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2>AI & Programação</h2>
          <p>
            Procuramos profissionais apaixonados por desenvolvimento de software,
            inteligência artificial e automação. Se você gosta de criar algoritmos
            inovadores, explorar machine learning ou construir soluções escaláveis,
            nosso time é o lugar certo para você.
          </p>
        </motion.div>
      </motion.section>

      {/* Seção Desenvolvimento, Marketing & Design */}
      <motion.section
        className="carreiras-section-alternada"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="carreiras-text right"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Desenvolvimento, Marketing & Design</h2>
          <p>
            Estamos em busca de profissionais criativos que queiram transformar ideias
            em produtos digitais, campanhas impactantes e experiências visuais únicas.
            Se você gosta de criar, inovar e inspirar, nosso time é o lugar certo para você.
          </p>
        </motion.div>
        <motion.div
          className="carreiras-img"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src={devImg} alt="Desenvolvimento e Marketing" />
        </motion.div>
      </motion.section>

      {/* Seção Gestão e Projetos */}
      <motion.section
        className="carreiras-section-alternada"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="carreiras-img left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src={gestaoImg} alt="Gestão e Projetos" />
        </motion.div>
        <motion.div
          className="carreiras-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2>Gestão e Projetos</h2>
          <p>
            Valorizamos líderes que coordenam equipes e transformam estratégias
            em resultados concretos. Aqui você terá a oportunidade de gerenciar projetos
            e contribuir para que cada iniciativa seja um sucesso.
          </p>
        </motion.div>
      </motion.section>

      {/* Seção Equipes */}
      <motion.section
        className="carreiras-section-alternada"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="carreiras-text right"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Equipes que Inspiram</h2>
          <p>
            Nossas equipes são colaborativas e multidisciplinares. Incentivamos
            o compartilhamento de ideias, aprendizado contínuo e crescimento conjunto.
            Junte-se a nós e faça parte de um ambiente que valoriza cada talento.
          </p>
        </motion.div>
        <motion.div
          className="carreiras-img"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src={equipesImg} alt="Equipes" />
        </motion.div>
      </motion.section>

      {/* Envio de Currículo */}
      <motion.section
        className="carreiras-section-upload"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Envie seu Currículo</h2>
        <motion.input
          type="file"
          className="upload-curriculo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </motion.section>

      <Footer />
    </>
  );
};

export default Carreiras;
