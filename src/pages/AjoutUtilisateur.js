import React, { useState } from 'react';
import { Col, Button, Row, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AjoutUtilisateur = () => {
  const redirect = useNavigate();
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [type, setType] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [vpassword, setVPassword] = useState();

  const signupUser = async (e) => {
    e.preventDefault();
    if (password === vpassword) {
      if (type === 'direction') {
        await axios({
          method: 'post',
          url: `http://127.0.0.1:5000/api/user/signup`,
          data: {
            nom: nom,
            prenom: prenom,
            isDirection: true,
            isScolarite: false,
            email: email,
            password: password,
            passwordVerify: vpassword,
          },
        })
          .then((res) => {
            console.log(res.data);
            redirect('/listeuser');
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (type === 'scolarite') {
        await axios({
          method: 'post',
          url: `http://127.0.0.1:5000/api/user/signup`,
          data: {
            nom: nom,
            prenom: prenom,
            isDirection: false,
            isScolarite: true,
            email: email,
            password: password,
          },
        })
          .then((res) => {
            console.log(res.data);
            redirect('/listeuser');
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      console.log('Les mots de passes ne sont pas identiques');
    }
  };
  return (
    <Container>
      <Row className="justify-content-center align-items-center mb-3 mt-3">
        <h1 className="text-primary text-center"> Ajout Utilisateur</h1>
      </Row>

      <Row className="justify-content-center align-items-center">
        <Form onSubmit={signupUser}>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">Nom</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    setNom(event.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">
                  Type utilisateur
                </Form.Label>
                <Form.Select
                  className="mb-3"
                  onChange={(event) => {
                    setType(event.target.value);
                  }}
                >
                  <option>...</option>
                  <option value={'direction'}>Direction</option>
                  <option value={'scolarite'}>Scolarite</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">Prénoms</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    setPrenom(event.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">Adresse email</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-center">
                  Confirmé le mot de passe
                </Form.Label>
                <Form.Control
                  type="password"
                  onChange={(event) => {
                    setVPassword(event.target.value);
                  }}
                />
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
