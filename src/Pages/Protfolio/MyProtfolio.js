import React from 'react';
import profile from '../../Images/profile/profile.JPG'
import { FaFacebook, FaInstagram, FaDove } from "react-icons/fa";

const MyProtfolio = () => {
    return (
        <div>
            <div >
                <h1 className='text-4xl font-bold mt-6'>Profile</h1>
                <p className='text-2xl font-md' >I'm a Creative Webdeveloper </p>
            </div>
            <div className='grid  grid-cols-3 justify-center'>
                <div className='mt-20' >
                    <h1 className='text-2xl font-semibold'>My Protfolio live link</h1>
                   <div className='font-bold text-cyan-500'>
                   <a   href="https://roaring-starlight-f2b9b6.netlify.app/home" target="_blank">Project-1</a> <br />
                    <a href="https://zen-snyder-fcf27b.netlify.app/" target="_blank">Project-2</a> <br />
                    <a href="https://affectionate-golick-9c6799.netlify.app/" target="_blank">Project-3</a>
                   </div>

                </div>
                <div >
                    <div class="avatar w-32 h-40 mt-20 rounded ">
                        <img src={profile} />

                    </div>
                    <div className=' flex justify-center gap-4' >
                        <a href="https://web.facebook.com/sabik.neajurrahman/" target="_blank"><FaFacebook className='text-cyan-700'></FaFacebook></a>
                        <a href="https://www.instagram.com/freelencersabik/" target="_blank"><FaInstagram className='text-cyan-700'></FaInstagram></a>
                        <a href='https://github.com/Sabik52' target="_blank"><FaDove className='text-cyan-700'></FaDove> </a>
                    </div>
                </div>
                <div className='text-black' >
                    <h1 className='font-bold text-2xl'>Details</h1>
                    <div className='text-left text-black'>
                        <h3 className='text-l font-bold  '>Name:</h3>
                        <p > Neajur Rahman Sabik</p>
                        <h3 className='font-bold '>Email:</h3>
                        <p >neajurrahman52@gmail.com</p>
                        <h3 className='font-bold ' >Education Background:</h3>
                        <p >MBA (Department of Management)</p>
                        <p >Govt. of Commarce College, Chattogram.</p>
                        <h3 className='font-bold '>Skill</h3>
                        <p >
                            <li>1.Html</li>
                            <li>CSS (Vanila CSS, Boostrap, Tailwind CSS, DaisyUi)</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Nodejs</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyProtfolio;