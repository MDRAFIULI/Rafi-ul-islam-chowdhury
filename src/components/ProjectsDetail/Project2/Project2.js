import React from 'react';

const Project2 = () => {
    return (
        <div className=' bg-[#610C63] h-max ml-8 mr-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-orange-500 text-5xl ml-8 pt-12'>GREEN LAB</h1>
                <div class="justify-end mt-8 mr-8">
                    <button class="badge badge-outline bg-white hover:bg-slate-600 hover:text-white"><a href="https://assignmenteleven-64d09.web.app/">Live Site</a></button>
                    <button class="badge badge-outline bg-white hover:bg-slate-600 hover:text-white"><a href="https://github.com/MDRAFIULI/real_interview_project_two_assign-11_client">Client</a></button>
                    <button class="badge badge-outline bg-white hover:bg-slate-600 hover:text-white"><a href="https://github.com/MDRAFIULI/-real_interview_project_two_assign-11_server">Server</a></button>
                </div>
            </div>
            <h1 className='text-white text-5xl ml-8 pt-12'>SITE GELLERY</h1>
            <div className='grid grid-cols-3 pt-16 px-8 gap-4'>
                <div>
                    <img className='w-[600px] h-[200px] rounded-lg' src="https://i.ibb.co/nmFs5Gf/extra-Section.png" alt="" />
                </div>
                <div>
                    <img className='w-[600px] h-[200px] rounded-lg' src="https://i.ibb.co/LC29vBh/inventory.png" alt="" />
                </div>
                <div>
                    <img className='w-[600px] h-[200px] rounded-lg' src="https://i.ibb.co/R7vGrLQ/manage-Inventory.png" alt="" />
                </div>
            </div>
            <h1 className='text-white text-5xl ml-8 pt-12'>FEATURES</h1>
            <div className='grid grid-cols-3 pt-16 px-8 gap-4 pb-12'>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">The proprietor can manage any inventory which is available in the nursery</h2>
                    </div>
                </div>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Firebase authentication is activated for login, register & google sign-in</h2>
                    </div>
                </div>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Users can add new Inventory and delete any stockout product</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project2;
{/* <img src="https://i.ibb.co/nmFs5Gf/extra-Section.png" alt="extra-Section" border="0">
<img src="https://i.ibb.co/LC29vBh/inventory.png" alt="inventory" border="0">
<img src="https://i.ibb.co/R7vGrLQ/manage-Inventory.png" alt="manage-Inventory" border="0"></img> */}