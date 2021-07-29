import React from 'react';
import Footer from "../Footer/Footer";
import SocialMedia from "../SocialMedia/SocialMedia";
import Roadmap from "../Roadmap/Roadmap";
import Navbar from "../Navbar/Navbar";


const Landing = () => {
    return (
        <>
            <Navbar/>
            <Roadmap/>
            <SocialMedia/>
            <Footer/>
        </>
    )
}

export default Landing;
