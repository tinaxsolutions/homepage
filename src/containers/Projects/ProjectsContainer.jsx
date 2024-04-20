import React from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';
import divisor from '../../assets/images/divisor.png';
import projectFirst from '../../assets/images/projects/project-first.png';
import projectSecond from '../../assets/images/projects/project-second.png';
import projectThird from '../../assets/images/projects/project-third.png';
import projectFourth from '../../assets/images/projects/project-fourth.png';
import './ProjectsContainer.css';

const ProjectsContainer = () => {
    return (
        <section className='projects'>
            <h1>Nuestros Trabajos</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Col>
                <Image src={ divisor }></Image>
            </Col>
            <Container className='project-items'>
                <Row>
                    <Col><Image src={ projectFirst }></Image></Col>
                    <Col><Image src={ projectSecond }></Image></Col>
                    <Col><Image src={ projectThird }></Image></Col>
                    <Col><Image src={ projectFourth }></Image></Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProjectsContainer