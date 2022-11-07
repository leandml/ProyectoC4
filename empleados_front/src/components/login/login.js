import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container id="login-container" style={{ marginTop: 200 }}>
        <Row>
          <Col>
            <Row>
              <h2>Iniciar sesión </h2>
            </Row>
            <Row>
              <Col
             sm = "12"
             xs = "12"
             md =  {{ span: 4, offset: 4}}
             lg =  {{ span: 4, offset: 4}}
             xl =  {{ span: 4, offset: 4}}
              >
                <Form>
                  <Form.Group>
                    <Form.Label style={{ float: "left" }}>Usuario</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label style={{ float: "left" }}>
                      Contraseña
                    </Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ marginTop: 20, width: "100%" }}
                  >
                    Iniciar sesion
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
