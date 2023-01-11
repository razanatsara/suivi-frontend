import axios from 'axios';
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/image/logo.png';
import { AuthContext } from '../context/AuthContext';
const Navbare = () => {
  const { direction, scolarite, admin, fetchUser } = useContext(AuthContext);

  const redirect = useNavigate();

  const deconnexionAdmin = async () => {
    await axios.get('http://localhost:5000/api/user/logoutAdmin');
    await fetchUser();
    redirect('/login');
  };
  const deconnexionDirection = async () => {
    await axios.get('http://localhost:5000/api/user/logoutDirection');
    await fetchUser();
    redirect('/login');
  };
  const deconnexionScolarite = async () => {
    await axios.get('http://localhost:5000/api/user/logoutScolarite');
    await fetchUser();
    redirect('/login');
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="50px" />
        </Navbar.Brand>

        {admin && (
          <div>
            <Navbar.Brand href="/listeuser">
              Liste des utilisateurs
            </Navbar.Brand>
            <Navbar.Brand href="/adduser">Ajout utilisateur</Navbar.Brand>
            <Navbar.Brand href="/modifyuser">
              Modification utilisateur
            </Navbar.Brand>
            <Navbar.Brand onClick={deconnexionAdmin}>Deconnexion</Navbar.Brand>
          </div>
        )}

        {/* pour les direction */}
        {direction && (
          <div>
            <Navbar.Brand href="/ajout">Ajout des sortants</Navbar.Brand>
            <Navbar.Brand href="/liste">Liste des sortants</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Brand onClick={deconnexionDirection}>
                Deconnexion
              </Navbar.Brand>
            </Navbar.Collapse>
          </div>
        )}

        {/* pour la scolarite */}
        {scolarite && (
          <div>
            <Navbar.Brand href="/inscription">Inscription</Navbar.Brand>
            <Navbar.Brand href="/reinscription">Reinscription</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Brand onClick={deconnexionScolarite}>
                Deconnexion
              </Navbar.Brand>
            </Navbar.Collapse>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default Navbare;
