import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './ServicesContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay, faGear, faGlobe, faMobileScreenButton, faPencil } from "@fortawesome/free-solid-svg-icons";

function BannerContainer() {
    return (
        <section className="services">
            <Container>
                <Row>
                    <Col>
                        <h1>SERVICIOS QUE OFRECEMOS</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quod quisquam similique fugiat ipsa itaque sint odit dolorem fugit quidem ipsum, cumque voluptatibus, at, neque amet voluptates.
                            Optio itaque delectus laboriosam!
                        </p>
                    </Col>
                    <Col>
                        <Container className="services-items">
                            <Row>
                                <Col>
                                    <Button className="services-item">
                                        <FontAwesomeIcon icon={ faDisplay }>
                                            <FontAwesomeIcon icon={ faGear} />
                                        </FontAwesomeIcon>
                                        <p>Desarrollo de Software</p>
                                    </Button>
                                    <Button className="services-item">
                                        <FontAwesomeIcon icon={ faMobileScreenButton} />
                                        <p>Diseño Web</p>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button className="services-item">
                                        <FontAwesomeIcon icon={ faDisplay } />
                                        <FontAwesomeIcon icon={ faGlobe} />
                                        <p>Desarrollo de app mobiles</p>
                                    </Button>
                                    <Button className="services-item">
                                        <FontAwesomeIcon icon={ faDisplay } />
                                        <FontAwesomeIcon icon={ faPencil} />
                                        <p>Diseño Grafico</p>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default BannerContainer;