import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './BannerContainer.css';
import firstSlide from '../../assets/images/banner/first-slide.png';
import secondSlide from '../../assets/images/banner/second-slide.png';
import thirdSlide from '../../assets/images/banner/third-slide.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const BannerContainer = () => {
    const welcome = <span>BIENVENIDOS A TINAX</span>;
    const welcomeIcon = <FontAwesomeIcon icon={ faMinus } />;
  return (
    <Carousel className="carousel-banner-principal">
      <Carousel.Item>
      <Image src={firstSlide} />
        <Carousel.Caption className="carousel-banner">
          <h3>{welcomeIcon}{welcome}</h3>
          <p>DESARROLLO DE SOFTWARE</p>
          <Button>Descubre</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={secondSlide} />
        <Carousel.Caption className="carousel-banner">
          <h3>{welcomeIcon}{welcome}</h3>
          <p>DISEÑO WEB</p>
          <Button>Descubre</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={thirdSlide} />
        <Carousel.Caption className="carousel-banner">
          <h3>{welcomeIcon}{welcome}</h3>
          <p>DESARROLLO DE APP MOBILES</p>
          <Button>Descubre</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
};

export default BannerContainer;