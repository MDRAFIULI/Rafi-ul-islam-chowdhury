import React from 'react';

const Project3 = () => {
    return (
        <div className=' bg-[#610C63] h-max ml-8 mr-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-orange-500 text-5xl ml-8 pt-12'>LIFE MAKER SOHAG</h1>
                <div class="justify-end mt-8 mr-8">
                    <button class="badge badge-outline bg-white hover:bg-slate-600 hover:text-white"><a href="https://amazing-frangollo-697e34.netlify.app/">Live Site</a></button>
                    {/* https://assignment-tweleve.web.app/ */}
                    <button class="badge badge-outline bg-white hover:bg-slate-600 hover:text-white"><a href="https://github.com/MDRAFIULI/real_interview_project_one_assign-10">GitHub Repo</a></button>
                </div>
            </div>
            <h1 className='text-white text-5xl ml-8 pt-24'>SITE GELLERY</h1>
            <div className='grid grid-cols-3 pt-16 px-8 gap-4'>
                <div>
                    <img className='w-[600px] h-[200px] rounded-lg' src="https://i.ibb.co/FhYLRNh/services.png" alt="" />
                </div>
                <div>
                    <img className='w-[600px] h-[200px] rounded-lg' src="https://i.ibb.co/FDBHKhZ/checkout.png" alt="" />
                </div>
                <div>
                    <img className='w-[600px] h-[200px] rounded-lg' src="https://i.ibb.co/hHgkLfs/login-Form.png" alt="" />
                </div>
            </div>
            <h1 className='text-white text-5xl ml-8 pt-12'>FEATURES</h1>
            <div className='grid grid-cols-3 pt-16 px-8 gap-4 pb-12'>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Firebase authentication is activated for login & register</h2>
                    </div>
                </div>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Customers can choose a course or training.</h2>
                    </div>
                </div>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Can see the customer review</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project3;
{/* <img src="https://i.ibb.co/FDBHKhZ/checkout.png" alt="checkout" border="0">
<img src="https://i.ibb.co/hHgkLfs/login-Form.png" alt="login-Form" border="0">
<img src="https://i.ibb.co/FhYLRNh/services.png" alt="services" border="0"></img> */}