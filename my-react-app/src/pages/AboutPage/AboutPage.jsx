import BannerAbout from "../../layout/bannerAbout/BannerAbout.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import aboutJson from "../../about.json";

/** EXPLICATION DU COMPOSANT "AboutPage" :
* C'est un composant qui affiche la page À propos.
* 
* @component
* @example
* return (
*   <AboutPage />
* )
*/
const AboutPage = () => {
  /** RENDU DU COMPOSANT :
  * Le rendu du composant comprend une bannière et une liste de composants `Collapse`,
  * un pour chaque élément dans `aboutJson`.
  * Chaque `Collapse` a un titre et un texte qui sont tirés de `aboutJson`.
  */
  return (
    <div>
      <BannerAbout />

      <div className="about">
        {Object.values(aboutJson).map((collapse, index) => (
         
          <Collapse key={index}  title={collapse.title}>
          {console.log (collapse.title)}  
            <p>{collapse.description}</p>
          </Collapse>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;