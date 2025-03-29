import { useState } from "react"; 
import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import arrowForCollapse from "../../assets/arrowForCollapse.svg";
import "../../components/Collapse/collapse.css";

// Composant Collapse: affiche le contenu pliable lorsque l'on clique sur le titre

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleFilterOpening = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? "open" : ""}`}>
            <div className="headCollapse" onClick={handleFilterOpening}>
                <h3>{title}</h3>
                <img 
                    src={arrowForCollapse} 
                    alt="Flèche pour le panneau déroulant"
                    className={`arrow ${isOpen ? "down" : ""}`}
                />
            </div>
            {isOpen && (
                <div className={`paragraph ${isOpen ? "animate" : ""}`}>
                    {children}
                </div>
            )}
        </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Collapse;
