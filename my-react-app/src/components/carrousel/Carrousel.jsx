import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import arrowleft from "../../assets/arrowleft.svg";
import arrowright from "../../assets/arrowright.svg";
import { useState, useEffect } from "react";
import "../../components/carrousel/carrousel.css"

// * Le composant Carrousel affiche une galerie d'images associées à chaque hébergement. 
// * Les images peuvent être modifiées automatiquement ou manuellement à l'aide des flèches de navigation.

const Carrousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScrollInterval, setAutoScrollInterval] = useState(null);

//   * `autoSlide` est une fonction qui met à jour `currentIndex` pour passer à la diapositive suivante.
//     * Si la diapositive actuelle est la dernière, elle revient à la première.

  const autoSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

//   * `useEffect` est utilisé pour créer un intervalle qui appelle `autoSlide` toutes les 3 secondes (3000 ms).
//     * L'intervalle est stocké dans `autoScrollInterval` pour pouvoir être effacé lorsque le composant est démonté.
//     * Ces crochets `[]` en fin de la fonction `useEffect` assure que l'effet se déclenche qu'une seule fois après le rendu initial.
//     */

  useEffect(() => {
    let intervalId;
    if (Array.isArray(slides) && slides.length > 0) {
      intervalId = setInterval(autoSlide, 3000);
      setAutoScrollInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, []);

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
  };

  const previousClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    stopAutoScroll();
  };

  const nextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    stopAutoScroll();
  };

  const currentSlide = slides && slides.length > 0 ? slides[currentIndex] : null;
  const numSlides = slides ? slides.length : 0;
  const displayArrows = numSlides > 1;
  const displayIndicator = numSlides > 1;

  return (
    <div className="logement__carousel">
      <img
        className="logement__carousel--slider"
        src={currentSlide}
        alt={`Slide ${currentIndex + 1}`}
      />
      {displayArrows && (
        <>
          <img
            className="logement__carousel__arrowleft"
            src={arrowleft}
            alt="Flèche de gauche"
            onClick={previousClick}
          />
          <img
            className="logement__carousel__arrowright"
            src={arrowright}
            alt="Flèche de droite"
            onClick={nextClick}
          />
        </>
      )}
      {displayIndicator && (
        <div className="logement__carousel__slide-indicator">
          {`${currentIndex + 1}/${slides.length}`}
        </div>
      )}
    </div>
  );
};

Carrousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;

