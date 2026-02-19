import ChoiceCard from "../../components/ChoiceCard/ChoiceCard";
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
        <ChoiceCard
          img={devImg}
          title="Desenvolvedor Web"
          path="/dev"
          description="Sites institucionais; Página de vendas; Performance..."
        />
        <ChoiceCard
          img={personalImg}
          title="Personal Trainer"
          path="/personal"
          description="Avaliação física; Treino Personalizado; TAF; Corrida."
          variant="reverse"
        />
      </section>
      <footer className="footer">
        <p>© 2026 Leandro Oliota | Desenvolvedor Frontend & Personal Trainer</p>
      </footer>
    </main>
  );
}

export default Home;
