import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import "../../components/tags/tags.css"
// * C'est un composant qui affiche un texte sous forme de tag.
function Tags({text}) {
    return <p className="tags">{text}</p>;
};

/**
* Les propTypes définissent les types de props attendus par le composant Tags.
* 
* `text` est une prop qui est nécessaire (`isRequired`) et doit être une chaîne de caractères (`string`).
*/
Tags.propTypes = {
    text : PropTypes.string.isRequired,
};

export default Tags;