import {React,useEffect} from 'react'
import './cart.css'
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Cart = () => {
  const {products,total} = useSelector(state => state.cart); 
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  console.log(navigate.parameter)
  useEffect(()=>{
     const data = JSON.parse(localStorage.getItem('cart'));
     if(data !== null){
    
     }
  },[dispatch])

  let filterProducts = [...products]; 
  const handleClick = (type,indexs,productId)=>{
      if(type === "decrement"){
            let product = filterProducts.find((item,index)=>index === indexs);
            filterProducts = [...filterProducts.slice(0,indexs),{...product,quantity: product.quantity > 1 ? product.quantity - 1 : 1 },...filterProducts.slice(indexs + 1)]; 
        }else{
          let product = filterProducts.find((item,index) => index === indexs);
          filterProducts = [...filterProducts.slice(0, indexs), { ...product, quantity: product.quantity + 1 }, ...filterProducts.slice(indexs + 1)]; 
      }

  }

  const handleRemoveCart = (indexs)=>{
        const filterProductsRemove = filterProducts.filter((item,index)=>index !== indexs);  
 
  }
  const handleCartNextStep = ()=>{
        const user = JSON.parse(localStorage.getItem('user')); 
        if(!user){
            navigate({
                pathname:'/login', 
                search: '?from=Cart',
            });
        }else{
            navigate('/address'); 
        }
  }
  return (
 
    <div class="py-3 py-md-5 bg-light" style={{minHeight:630,height:'auto',position:'relative',width:1300, margin:'0 auto', marginTop:25}}>
        {
            filterProducts?.length > 0 ? (
                <>
                    <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="shopping-cart">

                                        <div class="cart-header d-none d-sm-none d-mb-block d-lg-block">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <h4>Địa điểm</h4>
                                                </div>
                                                <div class="col-md-2">
                                                    <h4>Lịch trình</h4>
                                                </div>
                                                <div class="col-md-2">
                                                    <h4>Số lượng Hành khách</h4>
                                                </div>
                                                <div class="col-md-2">
                                                    <h4>Giá</h4>
                                                </div>
                                                <div class="col-md-2">
                                                    <h4>Xóa</h4>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            filterProducts && filterProducts.map((item,index)=>{
                                                return (
                                                <div class="cart-item">
                                                    <div class="row">
                                                        <div class="col-md-4 my-auto">
                                                            <a href="">
                                                                <label class="product-name">
                                                                    <img src={item.image} style={{width: "120px" , height: "120px"}} alt=""/>
                                                                    {item.name}
                                                                </label>
                                                            </a>
                                                        </div>
                                                        <div class="col-md-2 my-auto">
                                                                <label class="product-name">
                                                                    3 ngày 2 đêm
                                                                </label>
                                                        </div>
                                                        <div class="col-md-2 col-7 my-auto">
                                                            <div class="quantity">
                                                                <div class="input-group">
                                                                    <span onClick={()=>handleClick("decrement",index,item._id)} class="btn btn1"><i class="fa fa-minus"></i></span>
                                                                    <input type="text" value={item.quantity} class="input-quantity" />
                                                                    <span onClick={()=>handleClick("increment",index,item._id)}  class="btn btn1"><i class="fa fa-plus"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-2 my-auto">               
                                                            {item.price_new && (
                                                                <label style={{ color: 'red' }} class="price">
                                                                    {item.price_new.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                                                </label>
                                                            )}
                                                        </div>
                                                        <div class="col-md-2 col-5 my-auto">
                                                            <div class="remove">
                                                                <span onClick={()=>handleRemoveCart(index)} href="" class="btn btn-danger btn-sm">
                                                                    <i class="fa fa-trash"></i> XÓA
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                )
                                            })
                                        }
                                                
                                    </div>
                                </div>
                            </div>
                        
                    
                    </div>
                        <div style={{position:'absolute',right:0,bottom:0, padding:20}}>
                        
                        <h4>Tổng tiền: <mark style={{color:'red'}}>{total?.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</mark></h4>
                         
                         <button className='btn-cart'  onClick={handleCartNextStep}>Tiếp tục</button>
                     </div>
                </>

            ):(
                <div style={{textAlign:'center',fontWeight:'bold'}}>GIỎ HÀNG CHƯA CÓ SẢN PHẨM</div>
            )
        }
    </div>

  )
}

export default Cart