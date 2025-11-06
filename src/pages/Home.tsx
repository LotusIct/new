
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import PorqueNosEscolher from "../components/Pontual";
import Portfolio from "../components/Portfolio";
import CasosDeEstudo from "../components/CasosDeEstudo"; // 👈 adicionado
import Solucoes from "../components/Solucoes"; // 👈 novo componente
import Industrias from "../components/Industria"; // 👈 nova seção
import Locais from "../components/Locais"; // 👈 nova seção
import ContatoCarreiras from "../components/ContatoCarreiras";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WordCount from "../components/WordCloud";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Portfolio />
       <Industrias />  
      <PorqueNosEscolher />
      <Services />
      
     
      
        <Solucoes />   
<WordCount/>
<CasosDeEstudo />
    
      <CTA />  
      <Locais />       
      <ContatoCarreiras />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
