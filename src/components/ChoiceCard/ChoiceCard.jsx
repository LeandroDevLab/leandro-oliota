import { Link } from "react-router-dom";
import "./ChoiceCard.css";

function ChoiceCard({ img, title, path, description, className = "choice-card" }) {
  return (
    <Link to={path} className={className}>
      <img className="choice-img" src={img} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <span className="saiba-mais">Saiba mais </span>
      </div>
    </Link>
  );
}

export default ChoiceCard;
