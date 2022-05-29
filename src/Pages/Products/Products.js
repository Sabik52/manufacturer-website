import React, { useState } from 'react';
import useTool from '../../hooks/useTools';
import Tool from '../Home/Tool/Tool';

import Footer from '../Shared/Footer/Footer';

const Products = () => {
    const [tools, setTools] =useTool();
    
    return (
             <div>
            <h1 className=' my-4 text-5xl font-bold'>Our Parts</h1>

            <div className='grid lg:grid-cols-3 gap-4 mt-4 justify-items-center'>
                   {
                tools.map (tool => <Tool
                key={tool.id}
                tool = {tool}
               
                ></Tool>)
            }
            </div>
            
            <Footer></Footer>
        </div>
      
        
    );
};

export default Products;