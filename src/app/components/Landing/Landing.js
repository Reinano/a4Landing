import React from 'react';
import Footer from "../Footer/Footer";
import SocialMedia from "../SocialMedia/SocialMedia";
import Roadmap from "../Roadmap/Roadmap";
import Navbar from "../Navbar/Navbar";
import SwapCalculator from "../SwapCalculator/SwapCalculator";


const Landing = () => {
    return (
        <>
            <Navbar/>
            <SwapCalculator/>
            <Roadmap/>
            <SocialMedia/>
            <Footer/>
        </>
    )
}

export default Landing;
