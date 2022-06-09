import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../img/png_20220609_162358_0000.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-white">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-sm rounded-lg shadow-2xl ml-16" />
                <div>
                    <h1 class="text-5xl font-bold"><span className='text-[#ed5a00]'>Hi There.</span></h1>
                    <h1 class="text-3xl font-bold">I'm <span className='text-[#ed5a00]'>Rafi Ul Islam Chowdhury</span></h1>
                    <h1 class="text-3xl font-bold">I'm a <span className='text-[#ed5a00]'>MERN Stack Developer</span></h1>
                    <p class="py-6 font-serif text-xl">
                        An aspiring MERN Stack Developer.I lost other take heed when I jump into the codes. I am a professional web designer and developer.Though coding create trouble by error but i accept it gladly. Recently I have completed react and node js. I am expertise in Html5, Css3, Javascript, Bootstrap, Tailwind Css, React JS, Node JS, Express JS, Mongo DB.Resourceful Web Developer lends hands-on approach to customizing web presence strategy.I have almost 1 years learning experience. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Specialty supporting intricate backend needs and lending assistance throughout webpage lifecycle.
                    </p>
                    <a href="https://drive.google.com/file/d/1E8B1Z8Xz3ek5FCp8eaPDrA4ykiST5054/view?usp=sharing"><button class="btn btn-sm bg-[#ed5a00] border-none">Download Resume</button></a>

                    {/* <a href="file:///........example.pdf" download target="_blank">test pdf</a> */}

                    <a href="https://drive.google.com/Rafi Ul Islam RESUME/Rafi Ul Islam RESUME.pdf" download>Download Form</a>
                    Rafi Ul Islam RESUME
                </div>
            </div>
        </div>
    );
};

export default Banner;