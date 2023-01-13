import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/image/logo.png';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NavbarDirection = () => {
  const { fetchUser } = useContext(AuthContext);
  const redirect = useNavigate();
  const handleClick = async () => {
    await axios.get('http://localhost:5000/api/user/logoutDirection');
    await fetchUser();
    redirect('/login');
    window.location.reload(true);
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="50px" />
        </Navbar.Brand>
        <Navbar.Brand href="/">Accueil</Navbar.Brand>
        <Navbar.Brand href="/ajout">Ajout des sortants</Navbar.Brand>
        <Navbar.Brand href="/liste">Liste des sortants</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand onClick={handleClick}>Deconnexion</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarDirection;
