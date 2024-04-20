import React from "react";
import HeaderContainer from '../containers/Header/HeaderContainer';
import BannerContainer from '../containers/Banner/BannerContainer';
import ServicesContainer from '../containers/Services/ServicesContainer';
import ProjectsContainer from '../containers/Projects/ProjectsContainer';
import TeamContainer from '../containers/Team/TeamContainer';
import MainContainer from '../containers/MainContainer';

const HomePage = () => (
    <div>
        <HeaderContainer />
        <BannerContainer />
        <ServicesContainer />
        <ProjectsContainer />
        <TeamContainer />
        <MainContainer />
    </div>
);

export default HomePage;