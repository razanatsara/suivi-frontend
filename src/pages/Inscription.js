import axios from 'axios';
import React, { useState } from 'react';
import { Col, Button, Row, Container, Form, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Inscription = () => {
  const [fichier, setFichier] = useState();
  const redirect = useNavigate();
  const inscriptionExcel = async (e) => {
    e.preventDefault();
    // console.log(fichier);
    const formData = new FormData();
    formData.append('fichier', fichier);
    await axios
      .post(`http://127.0.0.1:5000/api/etudiant/inscription`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res.data);
        redirect('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col lg={8}>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3">
                <h2 className="fw-bold mb-2 text-uppercase text-center text-primary ">
                  Inscription
                </h2>
                <div className="mb-3">
                  <Form
                    encType="multipart/form-data"
                    onSubmit={inscriptionExcel}
                  >
                    <Row className="justify-content-center align-items-center">
                      <Col lg={7}>
                        <Form.Group>
                          <Form.Control
                            type="file"
                            onChange={(event) => {
                              setFichier(event.target.files[0]);
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={2}>
                        <Button variant="primary" type="submit" size="lg">
                          Enregistrer
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Inscription;
