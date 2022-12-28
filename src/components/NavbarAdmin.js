import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/image/logo.png';
const NavbarAdmin = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="50px" />
        </Navbar.Brand>
        <Navbar.Brand href="/listeuser">Liste des utilisateurs</Navbar.Brand>
        <Navbar.Brand href="/adduser">Ajout utilisateur</Navbar.Brand>
        <Navbar.Brand href="/modifyuser">Modification utilisateur</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="#home">Deconnexion</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarAdmin;
