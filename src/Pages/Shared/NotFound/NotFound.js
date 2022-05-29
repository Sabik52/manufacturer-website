import React from 'react';
import {FaFrown} from "react-icons/fa";


const NotFound = () => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl m-auto ">
  
  <div class="card-body items-center text-center text-4xl ">
    <h2 class="card-title text-3xl"><FaFrown></FaFrown></h2>
    <p>404! Page Not Found</p>
  </div>
</div>
    );
};

export default NotFound;