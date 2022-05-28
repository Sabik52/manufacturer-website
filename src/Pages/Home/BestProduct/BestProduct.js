import React from 'react';
import img1 from '../../../Images/Section/gggss.png'

const BestProduct = () => {
    return (
        <div class="flex flex-col bg-cyan-500 w-full lg:flex-row">
            <div class="grid flex-grow h-96 card  rounded-box place-items-start">
                <img className='h-96 mt-3 ' src={img1} alt="" />
            </div>

            <div class=" flex-grow h-96 card rounded-box  justify-center">
                <h2 className='text-secondary font-bold text-8xl'>Hard Drive</h2>
                <h1 className='text-5xl text-white font-medium leading-relaxed'>Find The Best One <br /> With Best Price</h1>
                <h5 className='text-3xl font-bold bg-secondary  p-2 '>$100 <small>pcs</small></h5>

            </div>
        </div>
    );
};

export default BestProduct;