import React from "react";
import './TeamContainer.css';
import { Container, Row, Image, Col } from 'react-bootstrap';
import divisor from '../../assets/images/divisor.png';
import memberFirst from '../../assets/images/team/member-first.png';
import memberSecond from '../../assets/images/team/member-second.png';
import memberThird from '../../assets/images/team/member-third.png';
import memberFourth from '../../assets/images/team/member-fourth.png';
import faLinkedinIn from '../../assets/images/team/linkedin.png';

const TeamContainer = () => {
    return (
        <section className='team'>
            <h1>Nuestro Equipo</h1>
            <p>Personas que contribuyen enormenmente a nuestra compañia</p>
            <Col>
                <Image src={ divisor }></Image>
            </Col>
            <Container className='team-items'>
                <Row>
                    <Col>
                        <Image src={ memberFirst }></Image>
                        <Col><Image src={faLinkedinIn}></Image></Col>
                        <h3>Member 1</h3>
                    </Col>
                    <Col>
                        <Image src={ memberSecond }></Image>
                        <Col><Image src={faLinkedinIn}></Image></Col>
                        <h3>Member 2</h3>
                    </Col>
                    <Col>
                        <Image src={ memberThird}></Image>
                        <Col><Image src={faLinkedinIn}></Image></Col>
                        <h3>Member 3</h3>
                    </Col>
                    <Col>
                        <Image src={ memberFourth }></Image>
                        <Col><Image src={faLinkedinIn}></Image></Col>
                        <h3>Member 4</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TeamContainer;