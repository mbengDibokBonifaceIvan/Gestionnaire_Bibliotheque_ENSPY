import './WelcomePage.css';
import Sidebar from '../components1/Sidebar';
import Navbar from '../components1/Navbar';
import { useNavigate } from "react-router-dom";

const Accueil = () => {
    const navigate = useNavigate();
    return (
        <>
            <Sidebar />
            <Navbar />
            <main>
                <p> Bienvenue a BIBLIO ENSPY votre application web de gestion 
                de la bibiotheque de l'Ecole Nationale Supérieure polytechnique de Yaounde
                (ENSPY). </p>
                <p> Depuis cette plateforme, vous, chers membres de la cellule documentation
                avez la possibilité de gérer les documents et les réservations de facon
                automatique en tout simplicité et en toute tranquilité.</p>
                
                <button  onClick={ ()=>navigate("/departement") }>Gestion des livres</button>
                <button>Gestion des memoires</button>
            </main>


        </>);
};

export default Accueil;