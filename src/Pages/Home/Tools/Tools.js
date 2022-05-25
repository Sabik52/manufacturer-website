import React, { useState } from 'react';
import useTool from '../../../hooks/useTools';
import Tool from '../Tool/Tool';
import PurchaseModal from './PurchaseModal';

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
            {purchase && <PurchaseModal purchase={purchase}></PurchaseModal>}
         
        </div>
    );
};

export default Tools;