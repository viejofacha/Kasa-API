import React from 'react'; // eslint-disable-line no-unused-vars
import { useEffect, useState } from "react";
import LogementCard from "../logementCard/LogementCard.jsx";
import { logementsGetAll } from "../../services/API.js";


// * C'est un composant qui affiche une galerie de cartes de logements.


function LogementGallery() {
  const [logements, setLogements] = useState([]);
 
  // * `logements` est une variable d'état qui représente la liste des logements à afficher.
  // * `setLogements` est la fonction qui permet de mettre à jour `logements`.
  // */
  

  /** `useEffect` :
  * est utilisé pour récupérer la liste des logements de l'API lors du rendu initial du composant.
  */
  // 
  useEffect(() => {
    logementsGetAll()
      .then(setLogements)
      .catch(console.error);
  }
  , []); 
  // (dépendances vides [ ]) useEffect, exécute le chargement des données une seule fois

  
  
  return (
    <div className="logement-gallery">
      {logements.map((logement, logementCard) => (
        <LogementCard title={logement.title} key={logementCard} imageUrl={logement.cover} id={logement.id} />
      ))}
    </div>
  );
};

export default LogementGallery;