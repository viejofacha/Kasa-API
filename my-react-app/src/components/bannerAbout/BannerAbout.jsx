import React from 'react'; // eslint-disable-line no-unused-vars
import ImgBannerAbout from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import "../../components/bannerAbout/bannerAbout.css"
// Composant BannerAbout: affiche l'image d'arrière-plan de la section «À propos»

function BannerAbout() {
   
    return (
        <div className="bannerAbout">

            <img src={ImgBannerAbout} alt="Bannière d'accueil" className="imgBannerAbout" />

            <div className="banner_background"></div>

        </div>
    );
};

export default BannerAbout;
