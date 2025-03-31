import React from 'react'; // eslint-disable-line no-unused-vars
import BannerAbout from "../../components/bannerAbout/BannerAbout.jsx";
import "../../components/bannerAbout/bannerAbout.css";
import Collapse from "../../components/Collapse/Collapse.jsx";
import aboutJson from "../../about.json";
import "../../pages/AboutPage/aboutPage.css";
import "../../layout/header/header.css"

// Composant AboutPage: affiche la page «À propos» avec des bannières et des éléments pliables
  //  * Le rendu du composant comprend une bannière et une liste de composants `Collapse`,
  //  * un pour chaque élément dans `aboutJson`.
  //  * Chaque `Collapse` a un titre et un texte qui sont tirés de `aboutJson`.
  //  */
  const AboutPage = () => {
  return (
    <>
      
      <div className="about">
      <BannerAbout />
      <div className="valeurs"> 
        {Object.values(aboutJson).map((collapse, index) => (
          <Collapse key={index} title={collapse.title}>
            {console.log(collapse.title)}
            <p>{collapse.description}</p>
          </Collapse>
          
        ))}
        </div> 
        
      </div>
    </> 
  );
};

export default AboutPage;
