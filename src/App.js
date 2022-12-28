import React from 'react';
import NavbarAdmin from './components/NavbarAdmin';
import NavbarDirection from './components/NavbarDirection';
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
import { useAuthContext } from './hooks/useAuthContext';
import NavbarScolarite from './components/NavbarScolarite';

const App = () => {
  const { admin, direction, scolarite } = useAuthContext();
  return (
    <BrowserRouter>
      {direction && <NavbarDirection />}
      {scolarite && <NavbarScolarite />}
      {admin && <NavbarAdmin />}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route
          path="/login"
          element={!direction && !scolarite && !admin && <Login />}
        />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/reinscription" element={<Reinscription />} />
        <Route path="/ajout" element={<AjoutEtudiant />} />
        <Route path="/liste" element={<ListeEtudiant />} />
        <Route path="/detailetudiant" element={<EtudiantDetail />} />

        <Route path="/listeuser" element={<ListeUtilisateur />} />
        <Route path="/adduser" element={<AjoutUtilisateur />} />
        <Route path="/modifyuser" element={<ModificationUtilisateur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
