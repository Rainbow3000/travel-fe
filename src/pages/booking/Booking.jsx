import React, { useEffect } from 'react'
import './booking.scss'
import {getByUser} from '../../store/slice/orderSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
const Booking = () => {
    
    const dispatch = useDispatch(); 
    const {user} = useSelector(state => state.user); 
    const {orders} = useSelector(state => state.order); 
    const naviagte = useNavigate(); 

    useEffect(()=>{
        if(user === null) {
            naviagte('/'); 
            return; 
        }
        dispatch(getByUser(user._id)); 
    },[])

  return (
    <div className='booking-container'>
        <h1>YOUR BOOKING</h1>

<table id="customers">
  <tr>
    <th>Tour Name</th>
    <th>Time Booking</th>
    <th>Date From</th>
    <th>Date To</th>
    <th>Price</th>
    <th>Pay Type</th>
    <th>Status</th>
  </tr>
   {
       orders?.length > 0 && orders?.map(item =>{
           return (
               
               <tr>
                    
                    <td>{item.product?.name}</td>
                    <td>{item.schedule?.createdAt.split('T')[0]}</td>
                    <td>{item.schedule?.dateStart}</td>
                    <td>{item.schedule?.dateEnd}</td>
                    <td>$ {item.totalMonney}</td>
                    <td>{item.payType}</td>
                    <td>{item.status === 0 ? <span style={{color:'blue'}}>Pending</span>:<span style={{color:'green'}}>OK</span>}</td>
                  
                </tr>
                
            )
        })
   }
 
</table>
    </div>
  )
}

export default Booking