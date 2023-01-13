import React, { useContext } from 'react';
import Accueil from './pages/Accueil';
import AjoutEtudiant from './pages/AjoutEtudiant';
import Inscription from './pages/Inscription';
import ListeEtudiant from './pages/ListeEtudiant';
import Login from './pages/Login';
import Reinscription from './pages/Reinscription';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import EtudiantDetail from './pages/EtudiantDetail';
import ListeUtilisateur from './pages/ListeUtilisateur';
import AjoutUtilisateur from './pages/AjoutUtilisateur';
import ModificationUtilisateur from './pages/ModificationUtilisateur';
import { AuthContext } from './context/AuthContext';
import axios from 'axios';
import NavbarScolarite from './components/NavbarScolarite';
import NavbarDirection from './components/NavbarDirection';
import NavbarAdmin from './components/NavbarAdmin';

axios.defaults.withCredentials = true;

const App = () => {
  const { direction, scolarite, admin } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {scolarite && <NavbarScolarite />}
      {direction && <NavbarDirection />}
      {admin && <NavbarAdmin />}
      <Routes>
        {direction === true && (
          <>
            {<Route path="/" element={<Accueil />} />}
            <Route path="/ajout" element={<AjoutEtudiant />} />
            <Route path="/liste" element={<ListeEtudiant />} />
            <Route path="/detailetudiant/:id" element={<EtudiantDetail />} />
          </>
        )}
        {scolarite === true && (
          <>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/reinscription" element={<Reinscription />} />
            <Route path="/detailetudiant/:id" element={<EtudiantDetail />} />
          </>
        )}
        {admin === true && (
          <>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/listeuser" element={<ListeUtilisateur />} />
            <Route path="/adduser" element={<AjoutUtilisateur />} />
            <Route path="/modifyuser" element={<ModificationUtilisateur />} />
            <Route path="/detailetudiant/:id" element={<EtudiantDetail />} />
          </>
        )}
        <Route
          path="/login"
          element={
            direction === true || scolarite === true || admin === true ? (
              <Navigate to="/" />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/"
          element={
            direction === false || scolarite === false || admin === false ? (
              <Navigate to="/login" />
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
