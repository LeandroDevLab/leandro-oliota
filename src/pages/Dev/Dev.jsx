import LeandroOliota from "../../components/LeandroOliota/LeandroOliota";
import LinkDevPersonal from "../../components/LinkDevPersonal/LinkDevPersonal";
import styles from "./Dev.module.css";

function Dev() {
  return (
    <main>
      <LeandroOliota />
      <LinkDevPersonal to="/">Voltar</LinkDevPersonal>
      <div className={styles.emBreve}>Em breve!</div>
    </main>
  );
}

export default Dev;
