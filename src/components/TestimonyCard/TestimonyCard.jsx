import styles from "./TestimonyCard.module.css";

export default function TestimonyCard({ imgSrc, name, category, testimony }) {
  return (
    <div className={styles.depoimentoCard}>
      <div className={styles.depoimentoHeader}>
        <div className={styles.avatar}>
          <img src={imgSrc} alt={name} />
        </div>
        <div className={styles.depoimentoInfo}>
          <h4>{name}</h4>
          <span>{category}</span>
        </div>
      </div>
      <p>{testimony}</p>
      <div className={styles.depoimentoStars}>⭐⭐⭐⭐⭐</div>
    </div>
  );
}
