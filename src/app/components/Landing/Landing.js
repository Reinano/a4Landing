import React from 'react';
import Footer from "../Footer/Footer";
import SocialMedia from "../SocialMedia/SocialMedia";
import Roadmap from "../Roadmap/Roadmap";
import Navbar from "../Navbar/Navbar";
import HeroScreen from "../HeroScreen/HeroScreen";
import SwapCalculator from "../SwapCalculator/SwapCalculator";
import Emission from "../Emission/Emission";
import CountDown from "../CountDown/CoutDown";
import About from "../About/About";
import Benefits from "../Benefits/Benefits";
import ExternalResource from "../ExternalResource/ExternalResource";

const Landing = () => {
    return (
        <>
            <Navbar/>
            <main>
              <HeroScreen/>
              <CountDown/>
              <About/>
              <Benefits/>
              <ExternalResource/>
              <Emission/>
              <SwapCalculator/>
              <Roadmap/>
              <SocialMedia/>
            </main>
            <Footer/>
        </>
    )
}

export default Landing;
