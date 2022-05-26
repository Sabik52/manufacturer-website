import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const PurchaseModal = ({purchase, setPurchase}) => {
    const {_id, name, quantity, price} = purchase;
    const [user, loading, error] = useAuthState(auth);

    const handlePurchase = event => {
        
        event.preventDefault();
        const name = event.target.name.value;

       const orders =  {
            purchaseId: _id,
            name: purchase.name,
            quantity: quantity,
            buyer: user.email,
            Price: price,
            buyerName: user.displayName,
            phone: event.target.phone.value

        }
      
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success){
               toast ('Ordered Successfull') 
            }
            else{
                toast ('Already Ordered')
            }
            setPurchase(null);
           

        })
        


    }
    return (
        <div>
          <input type="checkbox" id="purchase-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg"> Purchase for</h3>
                    <label for="purchase-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-4 justify-items-center mt-2' >
                    <input type="text" name='product' value={name} class="input input-bordered w-full max-w-xs" />
                    <input type="text" value={quantity} class="input input-bordered w-full max-w-xs" />
                    <input type="text" value={price} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input disabled value={user?.displayName}  placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email} placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone number" class="input input-bordered w-full max-w-xs" />
                    <input type="submit"  value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;