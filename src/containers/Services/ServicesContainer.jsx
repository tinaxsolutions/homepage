import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './ServicesContainer.css';

function BannerContainer() {
    return (
        <section>
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
                                    <Button className="services-item"></Button>
                                    <Button className="services-item"></Button>
                                </Col>
                                <Col>
                                    <Button className="services-item"></Button>
                                    <Button className="services-item"></Button>
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