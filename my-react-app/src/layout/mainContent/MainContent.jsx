import PropTypes from "prop-types";
import "../../layout/mainContent/mainContent.css"


// * C'est un composant qui affiche le contenu principal de la page.


function MainContent({children}) {
    return <div className="main-content">{children}</div>;
  };
  MainContent.propTypes = {
    children: PropTypes.node.isRequired,
  };
   
  export default MainContent;