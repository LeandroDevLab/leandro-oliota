import LeandroOliota from "../../components/LeandroOliota/LeandroOliota";
import LinkDevPersonal from "../../components/LinkDevPersonal/LinkDevPersonal";
import styles from "./Dev.module.css";

function Dev() {
  return (
    <main>
      <LeandroOliota />
      <LinkDevPersonal to="/">Voltar</LinkDevPersonal>
      <div className={styles.emBreve}>
        <h2 className={styles.sior} >

        <a href="/sior/index.html" target="_blank"
  rel="noopener noreferrer">Confira nossos serviços aqui!</a>
        </h2>
      </div>
    </main>
  );
}

export default Dev;
