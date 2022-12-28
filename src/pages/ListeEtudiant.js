import React, { useState } from 'react';
import { Col, Button, Row, Container, Form, Table } from 'react-bootstrap';
const ListeEtudiant = () => {
  const [globleSearch, setGlobalSearch] = useState(true);
  const [particularSearch, setParticularSearch] = useState(false);

  const handlingGlobal = () => {
    setGlobalSearch(true);
    setParticularSearch(false);
  };
  const handlingParticular = () => {
    setGlobalSearch(false);
    setParticularSearch(true);
  };
  return (
    <div>
      <Container>
        <Row className="justify-content-center align-items-center mb-3 mt-3">
          <Col lg={6}>
            <Button variant="primary" size="lg" onClick={handlingGlobal}>
              Recherche Globale
            </Button>
          </Col>
          <Col lg={6}>
            <Button variant="primary" size="lg" onClick={handlingParticular}>
              Recherche particulier
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center mb-3">
          {globleSearch && (
            <Form className="mt-3">
              <Row className="justify-content-center align-items-center mb-3">
                <Col lg={4}>
                  <Form.Select className="mb-3">
                    <option>Ecole</option>
                    <option value={'EGI'}>EGI</option>
                    <option value={'EGC'}>EGC</option>
                    <option value={'EGMEC'}>EGMEC</option>
                  </Form.Select>
                </Col>
                <Col lg={4}>
                  <Form.Select className="mb-3">
                    <option>Mention</option>
                    <option value={'Mention1'}>Mention1</option>
                    <option value={'Mention2'}>Mention2</option>
                    <option value={'Mention3'}>Mention3</option>
                  </Form.Select>
                </Col>
                <Col lg={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Entrer le type de formation"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-center align-items-center">
                <Col lg={4}>
                  <Form.Select className="mb-3">
                    <option>Parcours</option>
                    <option value={'BAT1'}>BAT1</option>
                    <option value={'BAT2'}>BAT2</option>
                    <option value={'GIM1'}>GIM1</option>
                    <option value={'GIM2'}>GIM2</option>
                    <option value={'GIM1'}>GIM1</option>
                  </Form.Select>
                </Col>

                <Col lg={4}>
                  <Form.Select className="mb-3">
                    <option>Diplôme</option>
                    <option value={'DTS'}>DTS</option>
                    <option value={'DTSS'}>DTSS</option>
                    <option value={'ING'}>ING</option>
                  </Form.Select>
                </Col>
                <Col lg={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Entrer l'année" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-center align-items-center">
                {/* <Col  lg={4}></Col> */}
                <Col
                  className="justify-content-center align-items-center"
                  lg={2}
                >
                  <Button variant="primary" type="submit" size="lg">
                    Rechercher
                  </Button>
                </Col>
                {/* <Col  lg={4}></Col> */}
              </Row>
            </Form>
          )}
        </Row>
        <Row className="justify-content-center align-items-center mb-3">
          {particularSearch && (
            <Form className="mt-3 align-items-center">
              <Row className="justify-content-center align-items-center">
                <Col lg={2}></Col>
                <Col lg={6}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Entrer le nom complet"
                    />
                  </Form.Group>
                </Col>
                <Col lg={2}>
                  <Button variant="primary" type="submit" size="lg">
                    Rechercher
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Row>
        <Row className="justify-content-center align-items-center mb-3">
          <h3 className="text-center">Liste des étudiants sortants</h3>
        </Row>
        <Row className="justify-content-center align-items-center mb-3">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nom et prenom</th>
                <th>Parcours</th>
                <th>Année</th>
                <th>Quitus</th>
                <th>Date</th>
                <th>Relevé de note</th>
                <th>Date </th>
                <th>Diplôme</th>
                <th>Date </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RAZAFINDRADINA Henri Bruno</td>
                <td>RT</td>
                <td>2022</td>
                <td>Pas encore</td>
                <td></td>
                <td>Pas encore</td>
                <td></td>
                <td>Pas encore</td>
                <td></td>
              </tr>
              <tr>
                <td>Maniry Christophe</td>
                <td>TIM</td>
                <td>2022</td>
                <td>Pas encore</td>
                <td></td>
                <td>Pas encore</td>
                <td></td>
                <td>Pas encore</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
};

export default ListeEtudiant;
