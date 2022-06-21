import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';
import MyProjects from '../MyProjects/MyProjects'
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <MyProjects></MyProjects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;