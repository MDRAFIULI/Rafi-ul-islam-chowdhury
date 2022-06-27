import React from 'react';
import { Link } from 'react-router-dom';

const MyProjects = () => {
    return (
        <div className='lg:mx-24 mt-32'>
            <h2 id='myProjects' className='text-6xl text-center'>My <span className='text-[#ed5a00]'>Projects</span></h2>
            <div className='divider'>.......</div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-20 mt-10 mx-6'>
                <div class="card lg:w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-[250px]' src="https://i.ibb.co/xDZWVzk/Heaven-Tools.png" alt="Heaven-Tools" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Heaven Tools Factory
                            <div class="badge bg-[#F32424] border-none">NEW</div>
                        </h2>
                        <p>A site of various type of tools</p>
                        <div className="flex card-actions justify-between">
                            <div class="card-actions justify-start mt-4">
                                <Link to='/project1' class="badge badge-outline hover:bg-slate-600 hover:text-white">Details</Link>
                            </div>
                            <div class="card-actions justify-end mt-4">
                                <button class="badge badge-outline hover:bg-slate-600 hover:text-white"><a href="https://assignment-tweleve.web.app/">Live Site</a></button>
                                {/* https://assignment-tweleve.web.app/ */}
                                <button class="badge badge-outline hover:bg-slate-600 hover:text-white"><a href="https://github.com/MDRAFIULI/real_interview_project_three_assign-12_client">Client</a></button>
                                <button class="badge badge-outline hover:bg-slate-600 hover:text-white"><a href="https://github.com/MDRAFIULI/real_interview_project_three_assign-12_server">Server</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card lg:w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-[250px]' src="https://i.ibb.co/R9fBSBG/GreenLab.png" alt="GreenLab" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Green Lab
                            <div class="badge bg-[#F32424] border-none">NEW</div>
                        </h2>
                        <p>A stock site of various type of saplings</p>
                        <div className="flex card-actions justify-between">
                            <div class="card-actions justify-start mt-4">
                                {/* <button class="badge badge-outline hover:bg-slate-600 hover:text-white">Details</button> */}
                                <Link to='/project2' class="badge badge-outline hover:bg-slate-600 hover:text-white">Details</Link>
                            </div>
                            <div class="card-actions justify-end mt-4">
                                <button class="badge badge-outline hover:bg-slate-600 hover:text-white"><a href="https://assignmenteleven-64d09.web.app/">Live Site</a></button>
                                <button class="badge badge-outline hover:bg-slate-600 hover:text-white"><a href="https://github.com/MDRAFIULI/real_interview_project_two_assign-11_client">Client</a></button>
                                <button class="badge badge-outline hover:bg-slate-600 hover:text-white"><a href="https://github.com/MDRAFIULI/-real_interview_project_two_assign-11_server">Server</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card lg:w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-[250px]' src="https://i.ibb.co/tH1TBbG/Life-Maker.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Life Maker Sohag
                            <div class="badge bg-[#F32424] border-none">NEW</div>
                        </h2>
                        <p>A site of various type of mental services</p>
                        <div className="flex card-actions justify-between">
                            <div class="card-actions justify-start mt-4">
                                {/* <button class="badge badge-outline hover:bg-slate-600 hover:text-white">Details</button> */}
                                <Link to='/project3' class="badge badge-outline hover:bg-slate-600 hover:text-white">Details</Link>
                            </div>
                            <div class="card-actions justify-end mt-4">
                                <button class="badge badge-outline hover:bg-slate-600 hover:text-white"><a href="https://amazing-frangollo-697e34.netlify.app/">Live Site</a></button>
                                <button class="badge badge-outline hover:bg-slate-600 hover:text-white"><a href="https://github.com/MDRAFIULI/real_interview_project_one_assign-10">GitHub Repo</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card lg:w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-[250px]' src="https://i.ibb.co/FJkN5Rn/cycle-corner.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Cycle corner
                            <div class="badge bg-[#F32424] border-none">NEW</div>
                        </h2>
                        <p>A site of cycle company</p>
                        <div className="flex card-actions justify-between">
                            <div class="card-actions justify-start mt-4">
                                <button class="badge badge-outline hover:bg-slate-600 hover:text-white">Details</button>
                            </div>
                            <div class="card-actions justify-end mt-4">
                                <button class="badge badge-outline hover:bg-slate-600 hover:text-white"><a href='https://stellular-kleicha-315e6c.netlify.app/'>Live Site</a></button>
                                <button class="badge badge-outline hover:bg-slate-600 hover:text-white"><a href='https://github.com/MDRAFIULI/assignment_eight_real'>GitHub Repo</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card lg:w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-[250px]' src="https://i.ibb.co/ssGpZQn/z-air-condition.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Z Air Condition
                            <div class="badge bg-[#F32424] border-none">NEW</div>
                        </h2>
                        <p>A site of air condition company</p>
                        <div className="flex card-actions justify-between">
                            <div class="card-actions justify-start mt-4">
                                <button class="badge badge-outline hover:bg-slate-600 hover:text-white">Details</button>
                            </div>
                            <div class="card-actions justify-end mt-4">
                                <button class="badge badge-outline hover:bg-slate-600 hover:text-white"><a href='https://strong-fudge-334e11.netlify.app/'>Live Site</a></button>
                                <button class="badge badge-outline hover:bg-slate-600 hover:text-white"><a href='https://github.com/MDRAFIULI/assignment_nine_real'>GitHub Repo</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;

{/* <img src="https://i.ibb.co/R9fBSBG/GreenLab.png" alt="GreenLab" border="0">
<img src="https://i.ibb.co/xDZWVzk/Heaven-Tools.png" alt="Heaven-Tools" border="0">
<img src="https://i.ibb.co/tH1TBbG/Life-Maker.png" alt="Life-Maker" border="0"></img> */}