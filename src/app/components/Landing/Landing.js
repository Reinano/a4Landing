import React, { useState } from 'react';
import Footer from "../Footer/Footer";
import SocialMedia from "../SocialMedia/SocialMedia";
import Roadmap from "../Roadmap/Roadmap";
import Navbar from "../Navbar/Navbar";
import HeroScreen from "../HeroScreen/HeroScreen";
import SwapCalculator from "../SwapCalculator/SwapCalculator";
import Emission from "../Emission/Emission";
import CountDown from "../CountDown/CountDown";
import About from "../About/About";
import Benefits from "../Benefits/Benefits";
import ExternalResource from "../ExternalResource/ExternalResource";
import Gallery from "../Gallerycard/Gallery";
import ModalWindow from "../ModalWindow/ModalWindow";

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
              <Gallery/>
              <Roadmap/>
              <SocialMedia/>
              <ModalWindow />
            </main>
            <Footer/>
        </>
    )
}

export default Landing;
