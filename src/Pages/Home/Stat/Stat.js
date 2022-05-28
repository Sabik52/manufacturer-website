import React from 'react';
import { FaTruckMoving } from "react-icons/fa";
import { FaHandHoldingUsd} from "react-icons/fa";
import { FaAmazonPay} from "react-icons/fa";



const Stat = () => {
    return (
      <div class="flex w-full gap-3 mt-3">
      <div class=" h-56 flex-grow justify-center card  rounded-box place-items-center">
     <h1 className='text-8xl text-amber-500'><FaHandHoldingUsd></FaHandHoldingUsd></h1>
     <h1 className='text-2xl'>Save Money</h1>
      </div>
      <div class=" h-56 flex-grow justify-center card  rounded-box place-items-center">
        <h1 className='text-8xl text-cyan-400'><FaTruckMoving></FaTruckMoving></h1>
        <h1 className='text-2xl'>Proper Tranportation</h1>
        </div>
      
        <div class=" h-56 flex-grow justify-center card 0 rounded-box place-items-center">
        <h1 className='text-8xl text-accent'><FaAmazonPay></FaAmazonPay></h1>
        <h1 className='text-2xl'>Easy Pay</h1>
      </div>
    </div>
    );
};

export default Stat;