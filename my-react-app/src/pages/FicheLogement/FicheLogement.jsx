// FicheLogement.jsx
// import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carrousel from "../../components/carrousel/Carrousel.jsx";
import Tags from "../../components/tags/Tags.jsx";
import Rating from "../../components/rating/Rating.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import { logementGetById } from "../../services/API.js";
import "../../pages/FicheLogement/ficheLogement.css"
function FicheLogement() {
//   const location = useLocation();
  const {id} = useParams();
  const [selectedById, setSelectedById] = useState(null);
const navigate = useNavigate()
  /** USEEFFET
  * `useEffect` est utilisé pour récupérer les détails du logement de l'API lors du rendu initial du composant.
  */
  useEffect(() => {
    // console.log(location.state.logementById)
      logementGetById(id)
          .then((data)=>{
            console.log(data)
            if (data==="Not found"){
navigate("/error")
return
            }
            setSelectedById(data)
          })
          .catch(console.error);
        //   console.log (selectedById)
  }, [id,navigate]);

  return (
    <div>
       <div className="logement">
       {selectedById && (<Carrousel slides={selectedById?.pictures} />) }
                  {/* <Carrousel slides={selectedById?.pictures} /> */}
      
                  <div className="logement__description">
                      <div className="logement__description__top">
                          <div className="logement__description__top--info">
                              <h1> {selectedById?.title} </h1>
                              <h2> {selectedById?.location} </h2>
                              <div className="logement__description__top--block-tags">
                                  {selectedById?.tags.map((tag, index) => (
                                  <Tags key={index} text={tag} />
                                  ))}
                              </div>
                          </div>
      
                          <div className="logement__description__top--host-block">
                              <div className="logement__description__top--host-block--host">
                                  <h3> {selectedById?.host.name} </h3>
                                  <img src={selectedById?.host.picture} alt={selectedById?.title} />
                              </div>
                              <div className="rating">
                                  <Rating rating={parseInt(selectedById?.rating, 10)} />
                              </div>
                          </div>
                      </div>
      
                      <div className="logement__description--bottom">
                          <Collapse title="Description">{selectedById?.description}</Collapse>
                          <Collapse title="Equipement">
                              <ul>
                                  {selectedById?.equipments.map((equip, index) => (
                                      <li key={index}>{equip}</li>
                                  ))}
                              </ul>
                          </Collapse> 
                      </div> 
                  </div>
              </div>
    </div>
  );
}

export default FicheLogement; // Changed to default export