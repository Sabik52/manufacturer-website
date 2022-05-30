import { signOut } from 'firebase/auth';
import React, {useState, useEffect} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom';
import auth from '../../../../firebase.init';



const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=> {
       if(user){
        fetch(`https://whispering-bastion-71459.herokuapp.com/orders?email=${user.email}`,{
          method: 'GET',
          headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res =>{
          console.log('res', res);
           if(res.status===401 ||res.status ===403 ){
            signOut(auth);
            localStorage.removeItem('accessToken');
            Navigate('/');
          }
          
           return res.json()
        })
      .then(data =>{
        setOrders(data);
      } ); 
        
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
                <td>{order.order}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
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