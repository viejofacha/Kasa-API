import React from 'react'; // eslint-disable-line no-unused-vars
import ImgBannerAbout from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';

/** EXPLICATION DU COMPOSANT "BannerAbout" :
* C'est un composant qui affiche une bannière dans la page à propos.
* 
* @component
* @example
* return (
*   <BannerAbout />
* )
*/
function BannerAbout() {
    /** RENDU DU COMPOSANT :
    * Le rendu du composant comprend une image de bannière et un arrière-plan de bannière.
    */
    return (
        <div className="bannerAbout">

            <img src={ImgBannerAbout} alt="Bannière d'accueil" className="imgBannerAbout" />

            <div className="banner_background"></div>

        </div>
    );
};

export default BannerAbout;
