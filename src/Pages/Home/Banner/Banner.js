import React from 'react';
import image from '../../../Images/Banner/image1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='home-banner' >
            <img  className='w-full' src={image} alt="" />
        </div>
    );
};

export default Banner;