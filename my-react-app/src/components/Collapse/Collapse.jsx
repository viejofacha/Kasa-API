import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames"; // Importamos classnames
import arrowForCollapse from "../../assets/arrowForCollapse.svg";
import "../../components/Collapse/collapse.css";

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleFilterOpening = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classNames("collapse", { "open": isOpen })}>
            <div className="headCollapse" onClick={handleFilterOpening}>
                <h3>{title}</h3>
                <img 
                    src={arrowForCollapse} 
                    alt="Flèche pour le panneau déroulant"
                    className={classNames("arrow", { "down": isOpen })}
                />
            </div>
            {isOpen && (
                <div className={classNames("paragraph", { "animate": isOpen })}>
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
