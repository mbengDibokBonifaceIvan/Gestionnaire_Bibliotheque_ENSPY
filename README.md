# BIBLIO_ENSPY
Projet de conception d'une application web et mobile de gestion d'une bibliothèque scolaire avec systèle de recommandation
##  Présentation du projet  
Ce projet est une application destinée à faciliter la gestion d’une bibliothèque scolaire : gestion des livres, emprunts, retours, profils utilisateurs et recommandations personnalisées.  
Elle a été développée pour l’École Nationale Supérieure Polytechnique de Yaoundé (ENSPY).

L’application se compose de :  
- Une **interface mobile** (React Native / Expo)  
- Une **API backend Node.js/Express**  
- Une **base de données** NoSQL (Firebase)  
- Un **moteur de recommandation** basé sur TensorFlow Recommender

---

##  Fonctionnalités principales

### Gestion des livres  
- Ajout / édition / suppression de livres  
- Catégories, auteurs, descriptions, images de couverture  
- Recherche et filtres dynamiques

###  Gestion des utilisateurs  
- Authentification Firebase  
- Gestion des rôles (Admin / Étudiant)  
- Page profil

###  Emprunts & Retours  
- Emprunt en un clic  
- Suivi des dates d’emprunt / retour  
- Notifications de retard

### Système de recommandation  
- Suggestions de livres basées sur :  
  - l’historique de lecture  
  - les catégories préférées  
  - la similarité de contenu  
- Modèle entraîné avec **TensorFlow Recommender**

### Interface Mobile (Expo React Native)  
- Navigation fluide  
- Pages intuitives : Accueil, Catalogue, Panier, Profil  
- Gestion d’état via hooks et context

---

## Architecture du projet
Gestionnaire_Bibliotheque_ENSPY
│
├── App.js                 # Entrée principale React Native
├── Page.js                # Navigation
├── assets/                # Images et ressources
├── components/            # Composants UI réutilisables
├── firebaseConfig.js      # Configuration Firebase
├── config.js              # Variables globales / API endpoints
├── package.json           # Dépendances du projet
├── app.json               # Configuration Expo
└── README.md              # Documentation

---

##  Technologies utilisées

### **Frontend / Mobile**
- React Native (Expo)
- JavaScript ES6+
- React Navigation
- Axios

### **Backend**
- Node.js  
- Express.js  
- Firebase Auth  
- Firebase Firestore  

### **Recommandation**
- TensorFlow  
- TensorFlow Recommender  

### **Outils**
- Git / GitHub  
- Metro / Expo CLI  

---

##  Installation et exécution

### 1. Cloner le projet

```bash
git clone https://github.com/your-repo/Gestionnaire_Bibliotheque_ENSPY.git
cd Gestionnaire_Bibliotheque_ENSPY
