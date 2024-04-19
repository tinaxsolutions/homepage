import React from "react";
import logo from '../../assets/images/logo.PNG';
import './HeaderContainer.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const HeaderContainer = () => {
    return (
        <header>
            <Navbar className="barra-nav">
                <Container>
                    <Navbar.Brand href="#home"><Image className="logo" src={logo} /></Navbar.Brand>
                    <Nav className="menu">
                        <Nav.Link href="#">INICIO</Nav.Link>
                        <Nav.Link href="#">SERVICIOS</Nav.Link>
                        <Nav.Link href="#">PROYECTOS</Nav.Link>
                        <Nav.Link href="#">EQUIPO</Nav.Link>
                        <Nav.Link href="#">CONTACTO</Nav.Link>
                    </Nav>
                    <Nav className="social-button">
                        <Nav.Link href="#"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                        <Nav.Link href="#"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                        <Nav.Link href="#"><FontAwesomeIcon icon={faLinkedinIn}/></Nav.Link>
                        {/* <Nav.Link href="#"><Button>Estimar</Button></Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
};

export default HeaderContainer;