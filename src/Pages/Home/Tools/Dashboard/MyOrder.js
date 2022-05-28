import React, {useState, useEffect} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../../../firebase.init';



const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=> {
       if(user){
        fetch(`http://localhost:5000/orders?buyer=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
       }
    }, [user])
    return (
        <div>
            <h1>my order:{orders.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map((order, index) =>    <tr>
                <th>{index +1 }</th>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>{order.Price}</td>
              </tr>
             )
        }
    
   
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;