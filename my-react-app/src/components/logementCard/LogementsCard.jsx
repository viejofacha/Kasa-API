import { Link } from "react-router-dom";
import "../../components/logementCard/logementCard.css"
import PropTypes from "prop-types";

const LogementsCards = ({ id, imageUrl, title }) => {
  return (
    <Link className="logement-card" key={id}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
};

// Validación de props
LogementsCards.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LogementsCards;
