import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const OrderModal = ({ order, setOrder }) => {
    const {_id, name, quantity, price } = order;
    const [user, loading, error] = useAuthState(auth)


    const handleOrder = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        console.log(quantity, name)
        

       

        const orders ={
            orderId: _id,
            order: user.displayName,
            email: user.email,
            quantity: quantity,
            price: price,
            phone: event.target.phone.value
           
        }
        fetch(`https://whispering-bastion-71459.herokuapp.com/orders`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(data => {
            setOrder(null)
        })


    }

    
    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Order For {name}</h3>
                    <form onSubmit={handleOrder} >
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Product Name</span>
                            </label>
                            <input type="text" name='name' value={name} readOnly class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text">Available Quantity</span>
                            </label>
                            <input type="text" name='quantity' value={quantity} readOnly class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text">Price Per Piece $</span>
                            </label>
                            <input type="text" value={price} class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input type="name" name='displayname'  value={user?.displayName ||''} class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text">Your Email </span>
                            </label>
                            <input type="email" name='email'  value={user?.email || ''}  class="input input-bordered w-full max-w-xs" />
                            
                            <label class="label">
                                <span class="label-text">Your Phone</span>
                            </label>
                            <input type="text" name='phone' placeholder='Your Phone' class="input input-bordered w-full max-w-xs" />
                            <input  type="submit" value='Submit' class="input input-bordered w-full max-w-xs text-white mt-5 btn bg-cyan-500" />
                           
                        </div>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default OrderModal;