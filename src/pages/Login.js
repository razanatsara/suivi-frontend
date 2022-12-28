import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const redirect = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const connexion = async (e) => {
    e.preventDefault();
    await axios({
      method: 'post',
      url: `http://127.0.0.1:5000/api/user/login`,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        if (res.data.utilisateur === 'Admin') {
          localStorage.setItem('admin', JSON.stringify(res.data));
          redirect('/listeuser');
          window.location.reload(true);
        }
        if (res.data.utilisateur === 'Direction') {
          localStorage.setItem('direction', JSON.stringify(res.data));
          redirect('/liste');
          window.location.reload(true);
        }
        if (res.data.utilisateur === 'Scolarite') {
          localStorage.setItem('scolarite', JSON.stringify(res.data));
          redirect('/');
          window.location.reload(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase text-center text-primary ">
                    Authentification
                  </h2>
                  <p className=" mb-5 text-center">
                    Veuillez entrer votre identifiant et mot de passe
                  </p>
                  <div className="mb-3">
                    <Form onSubmit={connexion}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Identifiant
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Votre identifiant"
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Votre mot de passe"
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Se connecter
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
