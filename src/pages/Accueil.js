import React, { useState } from 'react';
import { Col, Button, Row, Container, Form, Table } from 'react-bootstrap';
const Accueil = () => {
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
                <Col lg={6}>
                  <Form.Select className="mb-3">
                    <option>Ecole</option>
                    <option value={'EGI'}>EGI</option>
                    <option value={'EGC'}>EGC</option>
                    <option value={'EGMEC'}>EGMEC</option>
                  </Form.Select>
                </Col>
                <Col lg={6}>
                  <Form.Select className="mb-3">
                    <option>Mention</option>
                    <option value={'Mention1'}>GENIE DU BATIMENT ET INFRASTRUCTURE </option>
                    <option value={'Mention2'}>GENIE D'AMENAGEMENT ET DU DEVELOPPEMENT TERRITORIAL</option>
                    <option value={'Mention3'}>PRODUCTIQUE ET MAINTENANCE INDUSTRIELLE</option>
                    <option value={'Mention4'}>GENIE ENERGETIQUE ET AUTOMATISME</option>
                    <option value={'Mention5'}>BUSINESSTRADING ET FINANCES</option>
                    <option value={'Mention6'}>LOGISTIQUE ET TRANSPORT</option>
                    <option value={'Mention7'}>ENTREPREUNARIAT</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="justify-content-center align-items-center">
                <Col lg={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Entrer le type de formation"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Select className="mb-3">
                    <option>Parcours</option>
                    <option value={'BAT1'}>BAT1</option>
                    <option value={'BAT2'}>BAT2</option>
                    <option value={'TP1'}>TP1</option>
                    <option value={'TP2'}>TP2</option>
                    <option value={'CCI'}>CCI</option>
                    <option value={'PCB'}>PCB</option>
                    <option value={'GC1'}>GC1</option>
                    <option value={'GC2'}>GC2</option>
                    <option value={'UA'}>UA</option>
                    <option value={'GIM1'}>GIM1</option>
                    <option value={'GIM2'}>GIM2</option>
                    <option value={'GIP1'}>GIP1</option>
                    <option value={'GSI-MP1'}>GSI-MP1</option>
                    <option value={'GSI-MP2'}>GSI-MP2</option>
                    <option value={'GSR-ER1'}>GSR-ER1</option>
                    <option value={'GSR-ER1'}>GSR-ER1</option>
                    <option value={'GSA'}>GSA</option>
                    <option value={'GER'}>GER</option>
                    <option value={'MAC1'}>MAC1</option>
                    <option value={'MAC2'}>MAC2</option>
                    <option value={'FC1'}>FC1</option>
                    <option value={'FC2'}>FC2</option>
                    <option value={'MICE'}>MICE</option>
                    <option value={'GTL1'}>GTL1</option>
                    <option value={'GTL2'}>GTL2</option>
                    <option value={'ELT'}>ELT</option>
                    <option value={'GPME1'}>GPME1</option>
                    <option value={'GPME2'}>GPME2</option>
                    <option value={'MPCE'}>MPCE</option>
                    <option value={'CAP1'}>CAP1</option>
                    <option value={'CAP2'}>CAP2</option>
                    <option value={'LOG1'}>LOG1</option>
                    <option value={'LOG2'}>LOG2</option>
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
          <h3 className="text-center">Liste des étudiants</h3>
        </Row>
        <Row className="justify-content-center align-items-center mb-3">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nom et prenom</th>
                <th>Parcours</th>
                <th>Année</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RAZAFINDRADINA Henri Bruno</td>
                <td>RT</td>
                <td>2022</td>
              </tr>
              <tr>
                <td>Maniry Christophe</td>
                <td>TIM</td>
                <td>2022</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
};

export default Accueil;
