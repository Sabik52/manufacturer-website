import React, { useState } from 'react';
import useTool from '../../../hooks/useTools';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] =useTool();
    return (
        <div>
            <h1 className=' my-4 text-5xl font-bold'>Our Parts</h1>

            <div className='grid lg:grid-cols-3 gap-4 mt-4 justify-items-center'>
                   {
                tools.slice(0, 6).map (tool => <Tool
                key={tool.id}
                tool = {tool}
                ></Tool>)
            }
            </div>
         
        </div>
    );
};

export default Tools;