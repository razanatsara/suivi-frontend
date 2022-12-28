import React, { useState } from 'react';
import { Col, Button, Row, Container, Form, Table } from 'react-bootstrap';
const EtudiantDetail = () => {
  const [dossierEntrant, setDossierEntrant] = useState(true);
  const [dossierSortant, setDossierSortant] = useState(false);
  const [ajoutDossierEntrant, setAjoutDossierEntrant] = useState(false);
  const [ajoutDossierSortant, setAjoutDossierSortant] = useState(false);

  const afficherDossierEntrant = () => {
    setDossierEntrant(true);
    setDossierSortant(false);
    setAjoutDossierEntrant(false);
    setAjoutDossierSortant(false);
  };
  const afficherDossierSortant = () => {
    setDossierEntrant(false);
    setDossierSortant(true);
    setAjoutDossierEntrant(false);
    setAjoutDossierSortant(false);
  };
  const formajoutDossierEntrant = () => {
    setDossierEntrant(false);
    setDossierSortant(false);
    setAjoutDossierEntrant(true);
    setAjoutDossierSortant(false);
  };
  const formajoutDossierSortant = () => {
    setDossierEntrant(false);
    setDossierSortant(false);
    setAjoutDossierEntrant(false);
    setAjoutDossierSortant(true);
  };

  return (
    <Container>
      <h2 className="mb-2 text-uppercase text-center text-primary mt-4">
        Details sur l'etudiant
      </h2>
      <Row className="justify-content-center align-items-center mb-3">
        <Col lg={4} className="align-items-center">
          <b>Nom</b>: RAZANATSARA
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mb-3">
        <Col lg={4} className="align-items-center">
          <b>Prenoms</b>: Andrea Sylvano
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mb-3">
        <Col lg={4} className="align-items-center">
          <b>Type de formation</b>: FC
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mb-3">
        <Col lg={4} className="align-items-center">
          <b>Parcours</b>: TIM
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mb-3">
        <Col lg={4} className="align-items-center">
          <b>Annee</b>: 2014
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mb-3">
        <Col lg={3}>
          <Button variant="primary" size="lg" onClick={afficherDossierEntrant}>
            Afficher dossier entrant
          </Button>
        </Col>
        <Col lg={3}>
          <Button variant="primary" size="lg" onClick={afficherDossierSortant}>
            Afficher dossier sortant
          </Button>
        </Col>
        <Col lg={3}>
          <Button variant="primary" size="lg" onClick={formajoutDossierEntrant}>
            Ajouter dossier entrant
          </Button>
        </Col>
        <Col lg={3}>
          <Button variant="primary" size="lg" onClick={formajoutDossierSortant}>
            Ajouter dossier sortant
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center mb-3">
        {dossierEntrant && (
          <Table bordered hover>
            <tr>
              <td>Lettre de confirmation</td>
              <td>RT</td>
            </tr>
            <tr>
              <td>Lettre d'engagement</td>
              <td>TIM</td>
            </tr>
            <tr>
              <td>Fiche individuelle</td>
              <td>RT</td>
            </tr>
            <tr>
              <td>Photo d'identite</td>
              <td>TIM</td>
            </tr>
            <tr>
              <td>Convention validant l'inscription</td>
              <td>RT</td>
            </tr>
            <tr>
              <td>Recus de paiement</td>
              <td>TIM</td>
            </tr>
          </Table>
        )}
        {dossierSortant && (
          <div>
            <Table bordered hover>
              <tr>
                <td>Demande de relevé de note</td>
                <td>Pas encore de fichier</td>
              </tr>
              <tr>
                <td>Relevé de note</td>
                <td>Pas encore de fichier</td>
              </tr>
              <tr>
                <td>Quitus</td>
                <td>Pas encore de fichier</td>
              </tr>
              <tr>
                <td>Fiche de correction</td>
                <td>Pas encore de fichier</td>
              </tr>
              <tr>
                <td>Fiche d'attestation</td>
                <td>Pas encore de fichier</td>
              </tr>
              <tr>
                <td>Quittance</td>
                <td>Pas encore de fichier</td>
              </tr>
              <tr>
                <td>Demande de diplôme</td>
                <td>Pas encore de fichier</td>
              </tr>
              <tr>
                <td>Procuration</td>
                <td>Pas encore de fichier</td>
              </tr>
              <tr>
                <td>Diplôme</td>
                <td>Pas encore de fichier</td>
              </tr>
            </Table>
          </div>
        )}
        {ajoutDossierEntrant && (
          <Row className="d-flex justify-content-center align-items-center">
            <Form>
              <Row className="d-flex justify-content-center align-items-center">
                <Col lg={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Convention inscription
                    </Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Fiche individuelle
                    </Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Lettre de confirmation
                    </Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center align-items-center">
                <Col lg={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Lettre d'engagement
                    </Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Photo d'identité
                    </Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Reçus de paiement
                    </Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center align-items-center">
                <Col lg={2}>
                  <Button variant="primary" type="submit" size="lg">
                    Ajouter
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>
        )}
        {ajoutDossierSortant && (
          <div>
            <Row className="d-flex justify-content-center align-items-center">
              <Form>
                <Row className="d-flex justify-content-center align-items-center">
                  <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">Quitus</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Fiche correction
                      </Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Fiche attestation
                      </Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center">
                  <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Demande de diplôme
                      </Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">Quittance</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Procuration
                      </Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center">
                  <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Demande relevé de note
                      </Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Relevé de note livré
                      </Form.Label>{' '}
                      <br />
                      <Form.Check
                        inline
                        label="Oui"
                        name="group1"
                        type="radio"
                      />
                      <Form.Check
                        inline
                        label="Non"
                        name="group1"
                        type="radio"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Diplôme livré
                      </Form.Label>{' '}
                      <br />
                      <Form.Check
                        inline
                        label="Oui"
                        name="group1"
                        type="radio"
                      />
                      <Form.Check
                        inline
                        label="Non"
                        name="group1"
                        type="radio"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center">
                  <Col lg={2}>
                    <Button variant="primary" type="submit" size="lg">
                      Ajouter
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Row>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default EtudiantDetail;
