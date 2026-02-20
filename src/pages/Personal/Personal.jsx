import { useState } from "react";
import LinkDevPersonal from "../../components/LinkDevPersonal/LinkDevPersonal";
import "./Personal.css";

/* IMG Import */
import sobreImg from "../../assets/img/leandro-sobre.png";
import avaliacaoImg from "../../assets/img/personal/avaliacao1.png";
import personalImg from "../../assets/img/personal/personal-trainer.png";
import treinoImg from "../../assets/img/personal/treino-personalizado.png";

/* Icons import */
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import LeandroOliota from "../../components/LeandroOliota/LeandroOliota";

/* Variáveis */
import { personalCards } from "../../data/personalGallery";
import SwiperTestimonials from "../../components/SwiperTestimonials/SwiperTestimonials";
import SwiperBeforeAfter from "./components/SwiperBeforeAfter/SwiperBeforeAfter";
import HeroPersonal from "./components/HeroPersonal/HeroPersonal";

function Personal() {
  const [faqActive, setFaqActive] = useState(null);
  const [navActive, setNavActive] = useState(null);

  function navHandleClick() {
    setNavActive((prev) => (prev ? null : "active"));
  }

  function faqHandleClick(index) {
    setFaqActive((prev) => (prev === index ? null : index));
  }

  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <nav className="nav">
            <LeandroOliota />
            <button
              onClick={navHandleClick}
              className="nav-toggle"
              id="navToggle"
              aria-label="Abrir menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={`nav-menu ${navActive}`} id="navMenu">
              <li>
                <a href="#inicio">Início</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#servicos">Serviços</a>
              </li>
              <li>
                <a href="#destaques">Resultados</a>
              </li>
              <li>
                <a href="#depoimentos">Depoimentos</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <LinkDevPersonal />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* =========== HERO ========== */}
      <HeroPersonal />

      {/* =========== SOBRE========== */}
      <section className="sobre" id="sobre">
        <div className="container">
          <div className="section-header">
            <h2>Sobre Leandro Oliota</h2>
            <p>Profissional e pesquisador em Educação Física</p>
          </div>
          <div className="sobre-content">
            <div className="sobre-image">
              <img
                src={sobreImg}
                alt="Foto do personal trainer Leandro Oliota em momento de lazer"
                className="sobre-img"
              />
            </div>
            <div className="sobre-text-content">
              <div className="sobre-text">
                <p>
                  Desde 2010, eu <strong>Leandro Oliota</strong> sou referência em treino de
                  qualidade na Paraíba e região. Com mais de 16 anos de profissão.{" "}
                  <b>Mestre em Avaliação Física e Especialista em Treinamento</b>, transformo
                  objetivos em resultados.
                </p>
                <p>
                  Com mais de <b>10 anos como pesquisador na área</b>, faço minhas avaliações e
                  montagem dos treinamentos paltados na ciência, potencializando a realização das
                  metas dos meus alunos.
                </p>
                <a
                  className="sobre-curriculo"
                  href="http://lattes.cnpq.br/3580465755259608"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Currículo lattes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= SERVIÇOS ========= */}
      <section className="servicos" id="servicos">
        <div className="container">
          <div className="section-header">
            <h2 id="servico">Serviços</h2>
            <p>Encontre a opção perfeita para você</p>
          </div>
          <div className="servicos-grid">
            <div className="servico-card">
              <div className="servico-image">
                <img
                  src={avaliacaoImg}
                  alt="Personal trainer Leandro Oliota realizando avaliação física"
                />
              </div>
              <div className="servico-content">
                <h3>Avaliação</h3>
                <p>Avaliação morfológica, cardiorrespiratória e neuromuscular.</p>
                <a
                  href="https://wa.me/5583996157815?text=Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="preco">A partir de R$50,00</span>
                </a>
              </div>
            </div>
            <div className="servico-card">
              <div className="servico-image">
                <img
                  src={personalImg}
                  alt="Personal trainer Leandro Oliota realizando acompanhando um treino personalizado"
                />
              </div>
              <div className="servico-content">
                <h3>Personal Trainer</h3>
                <p>
                  Acompanhamento individual para resultados acelerados. Treino 100% personalizado,
                  incluso todas as avaliações.
                </p>
                <a
                  href="https://wa.me/5583996157815?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20contratar%20seu%20servi%C3%A7o%20de%20personal%20trainer%21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="preco">A partir de R$ 450/mês</span>
                </a>
              </div>
            </div>
            <div className="servico-card">
              <div className="servico-image">
                <img
                  src={treinoImg}
                  alt="Personal trainer Leandro Oliota realizando montando treino personalizado e avaliação"
                />
              </div>
              <div className="servico-content">
                <h3>Treino Personalizado</h3>
                <p>Treino 100% personalizado + aplicativo de treino!</p>
                <a
                  href="https://wa.me/5583996157815?text=Ol%C3%A1%21%20tenho%20interesse%20no%20treino%20personalizado%21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="preco">A partir de R$120,00</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="atendimento-local">
        <div className="container">
          <h2>Atendimento em Esperança-PB</h2>
          <p>
            Atendo alunos presencialmente em Esperança-PB e também de forma online para toda a
            Paraíba e Brasil.
          </p>
        </div>
      </section>

      {/* ========= ANTES E DEPOIS =========== */}
      <section className="destaques" id="destaques">
        <div className="container">
          <div className="section-header">
            <h2>Transformações Reais</h2>
            <p>Resultados que inspiram</p>
          </div>
          <SwiperBeforeAfter />
        </div>
      </section>

      <section className="beneficios">
        <div className="container">
          <div className="section-header">
            <h2>Por Que Escolher Leandro Oliota?</h2>
            <p>A resposta é simples, seu corpo merece qualidade e sua saúde exige cuidado!</p>
          </div>
        </div>
      </section>

      {/* ============= Depoiment ==============*/}
      <section className="depoimentos" id="depoimentos">
        <div className="container">
          <div className="section-header">
            <h2>O Que Nossos Alunos Dizem</h2>
            <p>Histórias de quem transformou sua vida</p>
          </div>
          <SwiperTestimonials testimonials={personalCards} />
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="container">
          <div className="section-header">
            <h2>Perguntas Frequentes</h2>
            <p>Tire suas dúvidas</p>
          </div>

          <div className="faq-list">
            <div
              className={`faq-item ${faqActive === 0 ? "active" : ""}`}
              onClick={() => faqHandleClick(0)}
            >
              <button className="faq-question">
                O treino online realmente funciona?<span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  Sim. O que gera resultado não é a presença física do personal, mas sim a
                  estratégia correta, a execução adequada e o acompanhamento contínuo. Você recebe
                  um treino estruturado especificamente para seu objetivo, além de orientação e
                  ajustes conforme sua evolução.Treino online com método funciona — a maioria dos
                  meus alunos são on-online e todos apresentam bastante resultado.
                </p>
              </div>
            </div>
            <div
              className={`faq-item ${faqActive === 1 ? "active" : ""}`}
              onClick={() => faqHandleClick(1)}
            >
              <button className="faq-question">
                O treino é realmente personalizado ou é um modelo padrão?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  Cada aluno passa por uma avaliação estratégica antes de iniciar.Analiso: Seu nível
                  atual; Seu histórico de treino; Suas limitações; Sua rotina; Seu objetivo. Com
                  base nisso, o treino é montado individualmente. Não trabalho com planilhas
                  genéricas.
                </p>
              </div>
            </div>
            <div
              className={`faq-item ${faqActive === 2 ? "active" : ""}`}
              onClick={() => faqHandleClick(2)}
            >
              <button className="faq-question">
                Sou iniciante. Posso fazer o acompanhamento?<span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  O programa é adaptado para: ✔ Iniciantes; ✔ Intermediários ✔ Pessoas retornando
                  aos treinos ✔ Quem já treina mas não evolui. O treino respeita seu nível atual e
                  evolui conforme seu progresso.
                </p>
              </div>
            </div>
            <div
              className={`faq-item ${faqActive === 3 ? "active" : ""}`}
              onClick={() => faqHandleClick(3)}
            >
              <button className="faq-question">
                Em quanto tempo começo a ver resultados?<span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>
                  Resultados variam de acordo com: Frequência, Alimentação, Comprometimento,
                  Condição inicial. Mas muitos alunos já percebem melhora em força, disposição e
                  medidas nas primeiras semanas. O foco é evolução constante e sustentável — não
                  promessa milagrosa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Leandro Oliota</div>
            <p>Transformando vidas através do exercício desde 2009.</p>
            <div className="footer-links">
              <a href="#inicio">Início</a>
              <a href="#sobre">Sobre</a>
              <a href="#servicos">Serviços</a>
            </div>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/leandrooliota/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/leandrooliota/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a href="https://github.com/LeandroDevLab" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/leandrosoribeiro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Leandro Oliota | Personal Trainer. Todos os direitos reservados.</p>
            <p>CREF: 002793-G/PB</p>
            <p>
              <a href="#privacidade">Política de Privacidade</a>
            </p>
          </div>
        </div>
      </footer>

      <section className="privacidade" id="privacidade">
        <div className="container">
          <h3>Política de Privacidade</h3>
          <p>
            Respeitamos a sua privacidade. Os dados coletados são utilizados apenas para gestão dos
            alunos e comunicação. Não compartilhamos informações com terceiros sem consentimento.
          </p>
        </div>
      </section>
    </>
  );
}

export default Personal;
