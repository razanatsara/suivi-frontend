import React from 'react';
import { Row, Container, Table } from 'react-bootstrap';

const ListeUtilisateur = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center mb-3 mt-3">
        <h1 className="text-primary text-center"> Liste des utilisateurs</h1>
      </Row>
      <Row className="justify-content-center align-items-center mb-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom et prenom</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RAZAFINDRADINA Henri Bruno</td>
              <td>Chef responsable scolarité</td>
            </tr>
            <tr>
              <td>Maniry Christophe</td>
              <td>Sécretaire DEGC</td>
            </tr>
            <tr>
              <td>ANDRIAMANIRY Nicolas</td>
              <td>Sécretaire DEGI</td>
            </tr>
            <tr>
              <td>RAONIZAFINANTENAINA Angélico</td>
              <td>Sécretaire DEGMEC</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default ListeUtilisateur;
