import React, { useContext, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const redirect = useNavigate();
  const { direction, scolarite, admin, fetchUser } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const connexion = async (e) => {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };
      await axios.post(`http://localhost:5000/api/user/login`, loginData);
      await fetchUser();
      if (direction === true || scolarite === true || admin === true) {
        redirect('/');
      }
    } catch (error) {
      console.error(error);
    }
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
