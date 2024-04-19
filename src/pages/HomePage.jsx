import React from "react";
import HeaderContainer from '../containers/Header/HeaderContainer';
import BannerContainer from '../containers/Banner/BannerContainer';
import ServicesContainer from '../containers/Services/ServicesContainer';
import MainContainer from '../containers/MainContainer';

const HomePage = () => (
    <div>
        <HeaderContainer />
        <BannerContainer />
        <ServicesContainer />
        <MainContainer />
    </div>

);

export default HomePage;