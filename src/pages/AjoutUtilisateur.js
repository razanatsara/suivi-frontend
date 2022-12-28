import React from 'react';
import { Col, Button, Row, Container, Form, Card } from 'react-bootstrap';

const AjoutUtilisateur = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center mb-3 mt-3">
        <h1 className="text-primary text-center"> Ajout Utilisateur</h1>
      </Row>

      <Row className="justify-content-center align-items-center">
        <Form>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">Nom</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">Prénoms</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">Adresse email</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">Mot de passe</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">
                  Confirmé le mot de passe
                </Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={2}>
              <Button variant="primary" type="submit" size="lg">
                Enregistrer
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default AjoutUtilisateur;
