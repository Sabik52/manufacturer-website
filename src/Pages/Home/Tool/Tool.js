import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tool.css'


const Tool = ({tool, setPurchase}) => {
    const {id, name, img, description, price, quantity} = tool;
    const navigate = useNavigate();
    const navigateToPurchaseDetail = id => {
        navigate(`/purchase`)
    }

    return (
        <div className=''>
            <div class="card w-96 5/6 bg-base-100 shadow-xl basis-3 ">
            <img className='card-img' src={img} alt="" />
            <div class="card-body">
                <div className='text-left card-content'>
                <h2 class="card-title">{name}</h2>
                <h3>Price:${price}</h3>
                <h4>Available Quantity: {quantity}</h4>
                <p>{description}</p>
                </div>
                <div class="card-actions justify-center">
                    <label className='btn bg-secondary font-bold text-black' for="purchase-modal" onClick={() => setPurchase(tool)}>Purchase</label>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Tool;