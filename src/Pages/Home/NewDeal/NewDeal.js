import React from 'react';
import image from '../../../Images/Section/case.jpg'

const NewDeal = () => {
    return (
        <div class="hero min-h-screen bg-cyan-500 justify-evenly">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src= {image} />
          <div>
            <h1 class="text-5xl text-white font-bold">Best Deal of The Day</h1>
            <p class="py-6 text-white">Meshify 2 Compact is a high-performing case with a bold, stealth-inspired aesthetic. Its striking exterior features bolt-free, flush tempered glass, a fully removable top panel granting excellent interior access, and a front USB 3.1 Type-C port.</p>
            <button class="btn bg-cyan-500 text-white">Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default NewDeal;