import React from 'react';

const Project1 = () => {
    return (
        <div className=' bg-[#610C63] h-max ml-8 mr-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-orange-500 text-5xl ml-8 pt-12'>HEAVEN TOOLS FACTORY</h1>
                <div class="justify-end mt-8 mr-8">
                    <button class="badge badge-outline bg-white hover:bg-slate-600 hover:text-white"><a href="https://assignment-tweleve.web.app/">Live Site</a></button>
                    <button class="badge badge-outline bg-white hover:bg-slate-600 hover:text-white"><a href="https://github.com/MDRAFIULI/real_interview_project_three_assign-12_client">Client</a></button>
                    <button class="badge badge-outline bg-white hover:bg-slate-600 hover:text-white"><a href="https://github.com/MDRAFIULI/real_interview_project_three_assign-12_server">Server</a></button>
                </div>
            </div>
            <h1 className='text-white text-5xl ml-8 pt-12'>SITE GELLERY</h1>
            <div className='grid grid-cols-3 pt-16 px-8 gap-4'>
                <div>
                    <img className='w-[600px] h-[200px] rounded-lg' src="https://i.ibb.co/4191D9P/business-summery.png" alt="" />
                </div>
                <div>
                    <img className='w-[600px] h-[200px] rounded-lg' src="https://i.ibb.co/87XnwC4/dashboard.png" alt="" />
                </div>
                <div>
                    <img className='w-[600px] h-[200px] rounded-lg' src="https://i.ibb.co/smjMg9y/tools.png" alt="" />
                </div>
            </div>
            <h1 className='text-white text-5xl ml-8 pt-12'>FEATURES</h1>
            <div className='grid grid-cols-3 pt-16 px-8 gap-4 pb-12'>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">A customer can purchase any available tools</h2>
                    </div>
                </div>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Firebase authentication is activated for login, register & google sign-in</h2>
                    </div>
                </div>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Admin can access some sensitive nested routes & users can access some general routes. Please check as a admin and check as a general user</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project1;
// <img src="https://i.ibb.co/4191D9P/business-summery.png" alt="business-summery" border="0">
// <img src="https://i.ibb.co/87XnwC4/dashboard.png" alt="dashboard" border="0">
// <img src="https://i.ibb.co/smjMg9y/tools.png" alt="tools" border="0"></img>