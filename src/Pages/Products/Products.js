import React, { useState } from 'react';
import useTool from '../../hooks/useTools';
import Tool from '../Home/Tool/Tool';
import PurchaseModal from '../Home/Tools/PurchaseModal';
import Footer from '../Shared/Footer/Footer';

const Products = () => {
    const [tools, setTools] =useTool();
    const [purchase, setPurchase]= useState(null)
    return (
             <div>
            <h1 className=' my-4 text-5xl font-bold'>Our Parts</h1>

            <div className='grid lg:grid-cols-3 gap-4 mt-4 justify-items-center'>
                   {
                tools.map (tool => <Tool
                key={tool.id}
                tool = {tool}
                setPurchase= {setPurchase}
                ></Tool>)
            }
            </div>
            {purchase && <PurchaseModal purchase={purchase}></PurchaseModal>}
            <Footer></Footer>
        </div>
      
        
    );
};

export default Products;