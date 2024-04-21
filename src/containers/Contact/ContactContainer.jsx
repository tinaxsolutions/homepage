import React from "react";
import './ContactContainer.css';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ContactContainer = () => {
    return (
        <section className="contact">
            <Container>
                <Row>
                    <Col className="contact-info">
                        <h3>Contactanos</h3>
                        <h1>Habla con nuestros operadores</h1>
                        <Row>
                            <div><FontAwesomeIcon className="contact-icon" icon={faPhone} /></div>
                            <Col className="contact-text">
                                <p>LLAMAR A</p>
                                <p>92 888 000 666</p>
                            </Col>
                        </Row>
                        <Row>
                            <div><FontAwesomeIcon className="contact-icon" icon={faEnvelope} /></div>
                            <Col className="contact-text">
                                <p>ENVIA EMAIL</p>
                                <p>tinaxsolutions@mail.com</p>
                            </Col>
                        </Row>
                        <Row>
                            <div><FontAwesomeIcon className="contact-icon" icon={faLocationDot} /></div>
                            <Col className="contact-text">
                                <p>VISITANOS</p>
                                <p>Calle Siempre Viva 53</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Form className="contact-form">
                            <Row>
                                <Form.Group controlId="formBasicName">
                                    <Form.Control type="name" placeholder="NOMBRE" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="EMAIL" />
                                </Form.Group>
                            </Row>
                            
                            <Row>
                                <Form.Group controlId="formBasicPhone">
                                    <Form.Control type="phone" placeholder="TELEFONO" />
                                </Form.Group>

                                <Form.Group controlId="formBasicSubject">
                                    <Form.Control type="text" placeholder="ASUNTO" />
                                </Form.Group>
                            </Row>

                            <Form.Group controlId="formBasicArea">
                                <Form.Control type="textarea" placeholder="MENSAJE" />
                            </Form.Group>
                        
                            <Button variant="primary" type="submit">
                                <span>ENVIAR</span>
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default ContactContainer;