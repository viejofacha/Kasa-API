import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import starActiveSvg from "../../assets/starActive.svg";
import starInactiveSvg from "../../assets/starInactive.svg";


// * C'est un composant qui affiche une évaluation sous forme d'étoiles.

const Rating = ({rating}) => {
    
    // * `fullRating` est une constante qui représente le nombre maximum d'étoiles qui peut-être affiché.
    // */
    const fullRating = 5;

    /**
    * C'est un tableau qui contient les étoiles actives.
    */
    let starActive = [];
    /**
    * C'est un tableau qui contient les étoiles inactives.
    */
    let starInactive = [];

    /** BOUCLES `for` POUR LES ÉTOILES ACTIVES :
    * Pour chaque point de l'évaluation, une étoile active est ajoutée à `starActive`.
    */
    for (let index = 0; index < rating; index++) {
        starActive.push(<img className="starActive" key={`active-${index}`} src={starActiveSvg} alt="Star  Active" />);
    }

    /** BOUCLES `for` POUR LES ÉTOILES INACTIVES :
    * Pour chaque point manquant de l'évaluation, une étoile inactive est ajoutée à `starInactive`.
    */
    for (let index = 0; index < (fullRating - rating); index++) {
        starInactive.push(<img className="starInactive" key={`inactive-${index}`} src={starInactiveSvg} alt="Star Inactive" />);
    }

    /** RENDU DU COMPOSANT :
    * Le rendu du composant comprend une liste d'étoiles actives et inactives.
    */
    return (
        <>
            {starActive}
            {starInactive}
        </>
    );
};

/**
* Les propTypes définissent les types de props attendus par le composant Rating.
* 
* `rating` est une prop qui est nécessaire (`isRequired`) et doit être un nombre (`number`).
*/
Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Rating;