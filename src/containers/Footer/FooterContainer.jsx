import React from "react";
import './FooterContainer.css';
import { Row, Col, Image } from "react-bootstrap";
import logo from '../../assets/images/logo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
            <Row>
                <Col className="col-5">
                    <Image src={logo}></Image>
                    <p>There are many vari of pass of lorem ipsum availab but the majority have suffered in some form by injected humour or words.</p>
                </Col>
                <Col className="col-1 footer-divisor"><span></span></Col>
                <Col className="footer-contact">
                        <h2>CONTACTO</h2>
                        <p>Calle Siempre Viva 53</p>
                        <p>tinaxsolutions@mail.com</p>
                        <p>92 888 000 666</p>
                </Col>
                <Col className="footer-social">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </Col>
            </Row>
            <Row className="footer-bottom">
                <Col className="p-0"><p>Copyright ©{year} BDevs. All Rights Reserved</p></Col>
            </Row>
    </footer>
  )   
}

export default FooterContainer;