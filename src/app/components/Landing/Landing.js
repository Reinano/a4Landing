import React from 'react';
import Footer from "../Footer/Footer";
import SocialMedia from "../SocialMedia/SocialMedia";
import Roadmap from "../Roadmap/Roadmap";
import Navbar from "../Navbar/Navbar";
import HeroScreen from "../HeroScreen/HeroScreen";

const Landing = () => {
    return (
        <>
            <Navbar/>
            <HeroScreen/>
            <Roadmap/>
            <SocialMedia/>
            <Footer/>
        </>
    )
}

export default Landing;
