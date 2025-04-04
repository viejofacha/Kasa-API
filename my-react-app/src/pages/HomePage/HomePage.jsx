import React from 'react'; // eslint-disable-line no-unused-vars
import "../../pages/HomePage/homePage.css";
import "../../layout/mainContent/mainContent.css"
import BannerHome from "../../components/bannerHome/BannerHome.jsx";
import Gallery from "../../components/logementGallery/LogementGallery.jsx";

import "../../components/logementGallery/logementGallery.css"



// // Composant HomePage : page principale avec bannière et galerie d'hébergement
// * Le rendu du composant comprend une bannière et une galerie de logements.
// * Lorsque l'utilisateur clique sur un logement dans la galerie, il est dirigé vers la page de détails du logement.
// * Le composant Gallery est rendu avec deux props : `path` et `element`.
// * `path` est défini sur "logement/:id", ce qui est une indication pour la gestion des routes dans l'application.
// * Il définit le chemin à suivre lorsqu'un élément de la galerie est cliqué, pour afficher les détails du logement.
// * `element` est défini sur `<LogementPage />`, ce qui signifie que le composant LogementPage sera utilisé comme élément à afficher lorsque l'utilisateur cliquera sur un élément de la galerie.
// */

function HomePage() {
  return (
    <>
      
      <div className="home-container">
      <BannerHome />
      <Gallery  />
      </div>
      
    </>
  );
}

export default HomePage;