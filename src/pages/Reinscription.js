import React from 'react'
import { Col, Button, Row, Container, Form ,Card} from "react-bootstrap";
const Reinscription = () => {
  return (
    <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col  lg={8} >
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3">
                  <h2 className="fw-bold mb-2 text-uppercase text-center text-primary ">Réinscription</h2>
                  <div className="mb-3">
                    <Form>
                        <Row className="justify-content-center align-items-center">
                            <Col  lg={7}>
                            <Form.Group  >
                                    <Form.Control type="file"  />
                            </Form.Group>
                            </Col>
                            <Col  lg={2}>
                            <Button variant="primary" type="submit" size='lg'>
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
  )
}

export default Reinscription