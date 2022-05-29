import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useTool from '../../../hooks/useTools';
import OrderModal from '../../Products/OrderDetails/OrderModal';

import Tool from '../Tool/Tool';


const Tools = () => {
    const [tools, setTools] =useTool();
    const [purchase, setPurchase]= useState(null)
    return (
        <div>
            <h1 className=' my-4 text-5xl font-bold'>Our Parts</h1>

            <div className='grid lg:grid-cols-3 gap-4 mt-4 justify-items-center'>
                   {
                tools.slice(0, 6).map (tool => <Tool
                key={tool.id}
                tool = {tool}
                setPurchase= {setPurchase}
                ></Tool>)
            }
            </div>
              {purchase && <Link><OrderModal purchase={purchase}></OrderModal></Link>}

            <button className='btn bg-cyan-500 font-bold text-white mt-8 mb-5' > <Link to="/products">See All Products</Link></button>
         
        </div>
    );
};

export default Tools;