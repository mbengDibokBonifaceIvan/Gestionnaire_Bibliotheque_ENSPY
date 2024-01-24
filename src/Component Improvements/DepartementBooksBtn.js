import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaPlus } from 'react-icons/fa';
import img1 from '../assets/Batiment-polytech-cmr.jpg';



export default function DepartementBooksBtn() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleVisualiser = () => {
    // Redirection vers la page catalogue avec le nom du département
    navigate('/catalogue', { state: { departement: nom_du_departement } });
  };

  const handleAjouter = () => {
    // Redirection vers la page catalogue avec le nom du département
    navigate('/ajouterDoc', { state: { departement: nom_du_departement, categorie: 'livre' } });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const nom_du_departement = "Genie";

  const cardStyle = {
    backgroundImage: `url(${img1})`,
    backgroundSize: 'cover',
    width: '300px',
    height: '200px',
    cursor: 'pointer',
    position: 'relative',
    transition: 'box-shadow 0.3s ease',
    boxShadow: isHovered ? '0 0 10px rgba(0, 0, 0, 0.2)' : 'none',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto', // Centrer horizontalement
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '10px',
  };
  
  const buttonAjouterStyle = {
    width: '100px',
    backgroundColor: isHovered ? '#28a745' : 'success',
    borderColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '5px',
  };
  
  const buttonVisualiserStyle = {
    width: '100px',
    backgroundColor: isHovered ? 'blue' : 'primary', // Couleur bleue pour le bouton "Visualiser"
    borderColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '5px',
  };

  const iconStyle = {
    fontSize: '1.2rem',
  };

  const bookIconStyle = {
    fontSize: '1.5rem',
    marginRight: '5px',
  };

  return (
    <div>
        
        <div
        className="card"
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-body">
          <div style={buttonContainerStyle}>
            <Button variant="primary" onClick={handleVisualiser} style={buttonVisualiserStyle}>
              Visualiser
            </Button>
            <Button variant="success" onClick={handleAjouter} style={buttonAjouterStyle}>
              <FaPlus style={iconStyle} /> Ajouter
            </Button>
          </div>
          
          <h4>
            <FaBook style={bookIconStyle} /> {nom_du_departement}
          </h4>
        </div>
      </div>
    </div>
    
  );
}