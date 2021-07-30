import React from 'react';
import Footer from "../Footer/Footer";
import SocialMedia from "../SocialMedia/SocialMedia";
import Roadmap from "../Roadmap/Roadmap";
import Navbar from "../Navbar/Navbar";
import HeroScreen from "../HeroScreen/HeroScreen";
import SwapCalculator from "../SwapCalculator/SwapCalculator";
import Emission from "../Emission/Emission";
import CountDown from "../CountDown/CoutDown";

const Landing = () => {
    return (
        <>
            <Navbar/>
            <HeroScreen/>
            <CountDown/>
            <Emission/>
            <SwapCalculator/>
            <Roadmap/>
            <SocialMedia/>
            <Footer/>
        </>
    )
}

export default Landing;
