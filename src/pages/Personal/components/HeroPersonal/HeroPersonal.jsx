import styles from "./HeroPersonal.module.css";

import Counter from "../../../../components/Counter/Count";

import heroImg from "../../../../assets/img/personal/leandro-oliota-personal.png";

export default function HeroPersonal() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.heroBackground}>
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Academia moderna com equipamentos"
          className={styles.heroBgImage}
        />
        <div className={styles.heroOverlay}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.heroContainer}>
          <div>
            <div className={styles.heroImageCircle}>
              <img src={heroImg} alt="Foto do personal trainer Leandro Oliota" />
            </div>
          </div>

          <div className={styles.heroContent}>
            <h1>Transforme seu corpo com estratégia, método e acompanhamento real.</h1>
            <p className={styles.heroSubtitle}>
              Avaliação física em Esperança-PB + treino personalizado 100% online com acompanhamento
              profissional.
            </p>
            <div className={styles.heroButtons}>
              <a href="#servico" className="btn btn-primary">
                Quero minha avaliação personalizada
              </a>
              <a
                href="https://wa.me/5583996157815?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20contratar%20seu%20servi%C3%A7o%20!"
                className="btn btn-secondary"
                target="_blank"
              >
                Falar no WhatsApp
              </a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <Counter variant={styles.statNumber} target={1000} step={10} time={60} suffix="+" />
                <span className={styles.statLabel}>Alunos</span>
              </div>
              <div className={styles.stat}>
                <Counter variant={styles.statNumber} target={16} step={1} time={375} suffix="+" />
                <span className={styles.statLabel}>Anos de carreira</span>
              </div>
              <div className={styles.stat}>
                <Counter variant={styles.statNumber} target={46} step={1} time={131} suffix="+" />
                <span className={styles.statLabel}>Trabalhos científicos publicados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
