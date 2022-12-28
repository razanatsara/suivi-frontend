import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/image/logo.png';

const NavbarDirection = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="50px" />
        </Navbar.Brand>
        <Navbar.Brand href="/">Accueil</Navbar.Brand>
        <Navbar.Brand href="/inscription">Inscription</Navbar.Brand>
        <Navbar.Brand href="/reinscription">Reinscription</Navbar.Brand>
        <Navbar.Brand href="/ajout">Ajout des sortants</Navbar.Brand>
        <Navbar.Brand href="/liste">Liste des sortants</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="/detailetudiant">Deconnexion</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarDirection;
