import { Link } from "react-router-dom";
import styles from "./LinkDevPersonal.module.css";

function LinkDevPersonal({ to = "/", children = "Dev/Personal" }) {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
}

export default LinkDevPersonal;
