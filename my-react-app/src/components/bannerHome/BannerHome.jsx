import React from 'react'; // eslint-disable-line no-unused-vars
import ImgBannerHome from '../../assets/banner.png';
import "../../components/bannerHome/bannerHome.css"
// Composant BannerHome: affiche l'image d'arrière-plan et le titre principal sur la page d'accueil
function BannerHome() {
  return (
    <div className="banner">

        <img src={ImgBannerHome} alt="Bannière d'accueil" className="imgBanner" />

        <div className="banner__background"></div>

        <h1>Chez vous, partout et ailleurs</h1>

    </div>
  );
};

export default BannerHome;