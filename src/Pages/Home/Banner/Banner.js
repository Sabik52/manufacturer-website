import React from 'react';
import './Banner.css'


const Banner = () => {
    return (
        <div class="hero min-h-screen banner">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-lg">
      <h1 class="mb-5 text-5xl font-bold">Welcome to CompuCare</h1>
      <p class="mb-5">We Care Your Laptop, Desktop <br /> All types of Computer</p>
      <button class="btn bg-cyan-500">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;