import { Link } from "react-router-dom";
import "../../components/logementCard/logementCard.css"
import PropTypes from "prop-types";

const LogementCard = ({ id, imageUrl, title }) => {
  return (
    <Link className="logement-card" to={'/logement/'+ id}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
};

// Validación de props
LogementCard.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LogementCard;
