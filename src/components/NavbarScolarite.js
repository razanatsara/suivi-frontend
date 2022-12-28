import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/image/logo.png';
import { useLogoutScolarite } from '../hooks/useLogoutScolarite';

const NavbarScolarite = () => {
  const { logoutScolarite } = useLogoutScolarite();
  const handleClick = () => {
    logoutScolarite();
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="50px" />
        </Navbar.Brand>
        <Navbar.Brand href="/">Accueil</Navbar.Brand>
        <Navbar.Brand href="/inscription">Inscription</Navbar.Brand>
        <Navbar.Brand href="/reinscription">Reinscription</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand onClick={handleClick}>Deconnexion</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarScolarite;
