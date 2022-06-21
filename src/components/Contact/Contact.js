import React, { useRef } from 'react';
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleNameBlur = e => {
        setName(e.target.value)
    }
    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handleMessageBlur = e => {
        setName(e.target.value)
    }
    function sendEmail(e) {
        e.preventDefault();
        window.Email.send({
            Host: "smtp.gmail.com",
            Username: "rafiulislamchowdhury1@gmail.com",
            Password: "120220320wd",
            To: 'ctgrafi150@gmail.com',
            From: email,
            Subject: "Message from portfolio",
            Body: "Name: " + name
                + "<br> Email: " + email
                + "<br> Message: " + message
        }).then(
            message => alert("Message sent successfully")
        );

    }
    return (
        <div className='lg:mx-24 mt-32'>
            <h2 id='contact' className='text-6xl text-center'><span className='text-[#ed5a00]'>Contact </span> Me</h2>
            <div className='divider'>.......</div>
            <div className='lg:flex mx-6'>
                <div className='lg:mt-20 mt-8'>
                    <h2 className=' text-4xl mb-8'><span className='text-[#ed5a00]'>CONTACT </span> INFO</h2>
                    <h4 className='mb-6'>rafiulislamchowdhury1@gmail.com</h4>
                    <h4 className='mb-6'>+8801914737802</h4>
                    <h4 className='mb-6'><a className='no-underline mb-6 hover:text-blue-600 text-[#ed5a00]' href="https://www.linkedin.com/in/rafi-ul-islam-chowdhury-84b449241/">LinkdIn</a></h4>
                    <h4 className='mb-6'><a className='no-underline mb-6 hover:text-blue-600 text-[#ed5a00]' href="https://web.facebook.com/profile.php?id=100016170666989">Facebook</a></h4>
                    <h4 className=''>Chattogram, Chattogram, Bangladesh</h4>
                </div>
                <div class="mockup-phone border-primary mt-16 lg:ml-[450px]">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">
                            <h3 className='text-center text-3xl'>Send Me A <span className='text-[#ed5a00]'>Message</span></h3> <br />
                            <div className="mx-4">
                                <form onSubmit={sendEmail}>
                                    <input onBlur={handleNameBlur} type="text" name="" id="name" placeholder='Name' className='bg-[#FEF9A7] rounded-md mb-4 border-black w-72 p-2 text-black' />
                                    <input onBlur={handleEmailBlur} type="email" name="" id="email" placeholder='Email' className='bg-[#FEF9A7] rounded-md mb-4 border-black w-72 p-2 text-black' />
                                    <textarea onBlur={handleMessageBlur} name="" id="message" cols="30" rows="10" placeholder='Your Message' className='bg-[#FEF9A7] rounded-md mb-4 border-black w-72 p-2 text-black'></textarea>
                                    <input className='btn btn-sm' type="submit" value="send" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;