import React from 'react';

const Contact = () => {
    return (
        <div className='lg:mx-24 mt-32'>
            <h2 id='contact' className='text-6xl text-center'><span className='text-[#ed5a00]'>Contact </span> Me</h2>
            <div className='divider'>.......</div>
            <div className='flex justify-between'>
                <div className='mt-20'>
                    <h2 className=' text-4xl mb-8'><span className='text-[#ed5a00]'>CONTACT </span> INFO</h2>
                    <h4 className='mb-6'>rafiulislamchowdhury1@gmail.com</h4>
                    <h4 className='mb-6'>+8801914737802</h4>
                    <h4 className='mb-6'><a className='no-underline mb-6 hover:text-blue-600 text-[#ed5a00]' href="https://www.linkedin.com/in/rafi-ul-islam-chowdhury-84b449241/">LinkdIn</a></h4>
                    <h4 className='mb-6'><a className='no-underline mb-6 hover:text-blue-600 text-[#ed5a00]' href="https://web.facebook.com/profile.php?id=100016170666989">Facebook</a></h4>
                    <h4 className=''>Chattogram, Chattogram, Bangladesh</h4>
                </div>
                <div class="mockup-phone border-primary ml-[450px]">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">
                            <h3 className='text-center text-3xl'>Send Me A <span className='text-[#ed5a00]'>Message</span></h3> <br />
                            <div className="mx-4">
                                <form className=''>
                                    <input type="text" name="" id="" placeholder='Name' className='bg-[#FEF9A7] rounded-md mb-4 border-black w-72 p-2 text-black' />
                                    <input type="email" name="" id="" placeholder='Email' className='bg-[#FEF9A7] rounded-md mb-4 border-black w-72 p-2 text-black' />
                                    <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' className='bg-[#FEF9A7] rounded-md mb-4 border-black w-72 p-2 text-black'></textarea>
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