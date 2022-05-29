import React from 'react';
import { FaUsers } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { FaUserCog} from "react-icons/fa";
import {FaRegChartBar} from "react-icons/fa";

const Summary = () => {
    return (
      <div>
        
        <h1 className='text-5xl font-bold text-red-800 mt-3'>Our Business Statagy</h1>
        <div class="flex  lg:w-full gap-3 mt-3">
      <div class=" h-56  flex-grow justify-center card rounded-box place-items-center">
    
      <p className='text-4xl'><FaUsers/></p>
     <h1 className='text-6xl font-bold text-cyan-500'>199k+</h1>
     <h1 className='text-2xl font-bold '>We Served</h1>
      </div>
      <div class=" h-56 flex-grow justify-center card  rounded-box place-items-center">
     
      <p className='text-4xl'><FaRegSun></FaRegSun></p>
     <h1 className='text-6xl font-bold text-cyan-500'>200k+</h1>
     <h1 className='text-2xl font-bold '>Our Tools</h1>
        </div>
      
        <div class=" h-56 flex-grow justify-center card 0 rounded-box place-items-center">
      
   <p className='text-4xl'><FaRegChartBar/></p>
      
     <h1 className='text-6xl font-bold text-cyan-500'>400M+</h1>
     <h1 className='text-2xl font-bold '>Annual Revenue</h1>
      </div>
        <div class=" h-56 flex-grow justify-center card 0 rounded-box place-items-center">
      
   <p className='text-4xl'><FaUserCog></FaUserCog></p>
     <h1 className='text-6xl font-bold text-cyan-500'>150k+</h1>
     <h1 className='text-2xl font-bold '>Our Review</h1>
      </div>
    </div>
      </div>
    )
}

export default Summary;