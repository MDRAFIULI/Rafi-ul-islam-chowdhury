import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../img/png_20220609_162358_0000.png';

const Banner = () => {
    // max-w-sm
    return (
        <div class="hero min-h-screen bg-white">
            <div class="hero-content flex-col lg:flex-row-reverse ml-2">
                <img src={banner} class="lg:w-[500px] rounded-lg shadow-2xl lg:ml-16" />
                <div className='pr-[-400px]'>
                    <h1 class="text-5xl font-bold"><span className='text-[#ed5a00]'>Hi There.</span></h1>
                    <h1 class="text-3xl font-bold">I'm <span className='text-[#ed5a00]'>Rafi Ul Islam Chowdhury From Chattogram, Bangladesh</span></h1>
                    <h1 class="text-3xl font-bold">I'm a <span className='text-[#ed5a00]'>MERN Stack Developer</span></h1>
                    <p class="py-6 font-serif text-xl">

                    </p>
                    <a
                        href="https://drive.google.com/uc?export=download&id=1E8B1Z8Xz3ek5FCp8eaPDrA4ykiST5054&fbclid=IwAR3LP561FbkbGrSIbWz0N-Sa1ipRgTXSvXB04gb3YKWpo2fZm4jegRgmTxU"
                        class="btn btn-sm bg-[#ed5a00] border-none"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;