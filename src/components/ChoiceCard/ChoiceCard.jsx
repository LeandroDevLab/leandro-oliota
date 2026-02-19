import { Link } from "react-router-dom";
import styles from "./ChoiceCard.module.css";

function ChoiceCard({ img, title, path, description, variant = "" }) {
  return (
    <Link to={path} className={`${styles.choiceCard} ${variant ? styles[variant] : ""}`}>
      <img className={styles.choiceImg} src={img} alt="" />
      <div className={styles.choiceCardDiv}>
        <h2 className={styles.choiceTitle}>{title}</h2>
        <p className={styles.choiceDescription}>{description}</p>
        <span className={styles.saibaMais}>Saiba mais </span>
      </div>
    </Link>
  );
}

export default ChoiceCard;
