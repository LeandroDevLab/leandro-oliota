import { Link } from "react-router-dom";
import profileImg from "../../assets/img/leandro-sobre.png";
import devImg from "../../assets/img/img-dev.png";
import personalImg from "../../assets/img/img-personal.png";
import "./Home.css";

function Home() {
  return (
    <main>
      <section className="hero_section">
        <img className="hero_img" src={profileImg} alt="" />
        <h1 className="hero_title">Leandro Oliota</h1>
        <Link to="/dev" className="choice-card">
          <img className="choice-img" src={devImg} alt="" />
          <div className="choice-content">
            <h2>Desenvolvedor Web</h2>
            <p>Sites institucionais; Página de vendas; Performance...</p>
            <span className="saiba-mais">Saiba mais </span>
          </div>
        </Link>
        <Link to="/dev" className="choice-card">
          <img className="choice-img" src={personalImg} alt="" />
          <div className="choice-content">
            <h2>Personal Trainer</h2>
            <p>Avaliação física; Treino Personalizado; TAF; Corrida.</p>
            <span className="saiba-mais">Saiba mais </span>
          </div>
        </Link>
      </section>
      <footer className="footer">
        <p>© 2026 Leandro Oliota | Desenvolvedor Frontend & Personal Trainer</p>
      </footer>
    </main>
  );
}

export default Home;
