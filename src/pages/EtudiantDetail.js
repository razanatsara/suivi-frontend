import React, { useState, useEffect, useContext } from 'react';
import { Col, Button, Row, Container, Form, Table } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const EtudiantDetail = () => {
  const { id } = useParams();
  const [etudiant, setEtudiant] = useState();
  const { direction, scolarite, admin } = useContext(AuthContext);
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
  useEffect(() => {
    const getOneStudent = async () => {
      await axios({
        method: 'get',
        url: `http://localhost:5000/api/etudiant/${id}`,
      })
        .then((res) => {
          setEtudiant(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getOneStudent();
  }, []);
  return (
    <Container>
      <h2 className="mb-2 text-uppercase text-center text-primary mt-4">
        Details sur l'etudiant
      </h2>
      <Row className="justify-content-center align-items-center mb-3">
        <Col lg={4} className="align-items-center">
          <b>Nom</b>: {etudiant.nom}
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mb-3">
        <Col lg={4} className="align-items-center">
          <b>Prenoms</b>: {etudiant.prenom}
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mb-3">
        <Col lg={4} className="align-items-center">
          <b>Type de formation</b>: {etudiant.typeFormation}
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mb-3">
        <Col lg={4} className="align-items-center">
          <b>Parcours</b>: {etudiant.parcours}
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mb-3">
        <Col lg={4} className="align-items-center">
          <b>Annee</b>: {etudiant.anneEtude}
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
                <td>Demande de relev?? de note</td>
                <td>Pas encore de fichier</td>
              </tr>
              <tr>
                <td>Relev?? de note</td>
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
                <td>Demande de dipl??me</td>
                <td>Pas encore de fichier</td>
              </tr>
              <tr>
                <td>Procuration</td>
                <td>Pas encore de fichier</td>
              </tr>
              <tr>
                <td>Dipl??me</td>
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
                      Photo d'identit??
                    </Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Re??us de paiement
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
                        Demande de dipl??me
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
                        Demande relev?? de note
                      </Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Relev?? de note livr??
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
                        Dipl??me livr??
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
