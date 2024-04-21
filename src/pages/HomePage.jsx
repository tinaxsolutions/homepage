import React from "react";
import HeaderContainer from '../containers/Header/HeaderContainer';
import BannerContainer from '../containers/Banner/BannerContainer';
import ServicesContainer from '../containers/Services/ServicesContainer';
import ProjectsContainer from '../containers/Projects/ProjectsContainer';
import TeamContainer from '../containers/Team/TeamContainer';
import ContactContainer from '../containers/Contact/ContactContainer';
import FooterContainer from "../containers/Footer/FooterContainer";
import MainContainer from '../containers/MainContainer';

const HomePage = () => (
    <div>
        <HeaderContainer />
        <BannerContainer />
        <ServicesContainer />
        <ProjectsContainer />
        <TeamContainer />
        <ContactContainer />
        <FooterContainer />
        <MainContainer />
    </div>
);

export default HomePage;