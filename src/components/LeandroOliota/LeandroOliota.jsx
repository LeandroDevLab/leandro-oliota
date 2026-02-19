import { Link } from "react-router-dom";
import styles from "./LeandroOliota.module.css";

function LeandroOliota() {
  return (
    <Link to="/" className={styles.logo}>
      LEANDRO OLIOTA
    </Link>
  );
}

export default LeandroOliota;
