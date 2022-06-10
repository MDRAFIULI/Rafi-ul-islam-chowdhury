import React from 'react';

const About = () => {
    return (
        <div className='lg:mx-24'>
            <h2 className='text-4xl text-center'>Know <span className='text-[#ed5a00]'>About</span> Me</h2>
            <div className='divider'>.......</div>
            <div className='lg:flex'>
                <div className='lg:w-[50%] pr-6 lg:border-r-4 border-b-8 pb-6 mb-6'>
                    <p><span className="text-[#152960]">Name: </span> <span className='text-[#ed5a00]'>Rafi Ul Islam Chowdhury rafi</span></p><br />
                    <p><span className="text-[#152960]"></span>Age: <span className='text-[#ed5a00]'>Real age almost 20</span></p><br />
                    <p><span className="text-[#152960]"></span>Post: <span className='text-[#ed5a00]'>Empty</span></p><br />
                    <p><span className="text-[#152960]"></span>Language: <span className='text-[#ed5a00]'>Bangla, Hindi, Intermediate English</span></p><br />
                    <p><span className="text-[#152960]"></span>Education: <span className='text-[#ed5a00]'>Department of business {`(HSC)`}</span></p>
                </div>
                <div className='lg:w-[50%] pl-6'>
                    <p className='font-serif'>An aspiring MERN Stack Developer.I lost other take heed when I jump into the codes. I am a professional web designer and developer.Though coding create trouble by error but i accept it gladly. Recently I have completed react and node js. I am expertise in Html5, Css3, Javascript, Bootstrap, Tailwind Css, React JS, Node JS, Express JS, Mongo DB.Resourceful Web Developer lends hands-on approach to customizing web presence strategy.I have almost 1 years learning experience. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Specialty supporting intricate backend needs and lending assistance throughout webpage lifecycle.</p>
                </div>
            </div>
        </div>
    );
};

export default About;