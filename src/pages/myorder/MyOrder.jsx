import './myorder.scss'
import React,{useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {STATE_ORDER} from '../../enum/Enum'
let userEmail = null; 
const MyOrder = () => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch(); 
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user')); 
        if(!user){
            navigate('/login'); 
            return; 
        }
        const {_id} = user; 
        userEmail = user.email;
    },[])

    const handleClickCancel = (type,id)=>{
         const data = {
            typeMessage:type,
            body:{
                productId:id
            }
         }
    }
  return (
    <div className='table-container-order'>
        <table class="content-table">
    <thead>
        <tr>
        <th>STT</th>
        <th>Ảnh</th>
        <th>Tên</th>
        <th>Màu</th>
        <th>Kích cỡ</th>
        <th>Số Lượng</th>
        <th>Tổng tiền</th>
        <th>Trạng thái</th>
        </tr>
    </thead>
    
        </table>
    </div>
  )
}

export default MyOrder