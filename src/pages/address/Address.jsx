import {React,useEffect} from 'react'
import './address.scss'
import {useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import moment from 'moment';
const Address = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 
  const {register,handleSubmit, formState:{errors} }  = useForm(); 
  const {user} = useSelector(state=>state.user); 
  const {products,total} = useSelector(state=>state.cart);  
  const { isOrderSuccess } = useSelector(state=>state.order);
  const filterProducts = products.map(item => {
    return {productDesc: item.desc,productName: item.name,productId: item._id, quantity: item.quantity, total: item.quantity * item.price, size: item.size, color: item.color,image:item.image}
  })

    const onSubmit  = (data)=>{
        const {address,phone,city,national}  = data; 
        const order = {
            userId: user._id,
            userName: user.userName,
            email:user.email,
            product: [...filterProducts],
            totalOrder: total,
            phone: phone,
            address: address,
            methodPay: "Nhận hàng trả tiền",
            isPaid: false,
            isDelivered: false,
            deliveredAt: "",
            paidAt:"",
            size:"no using",
            orderDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
            resultOrder: "pending"
        }
    }

    if (isOrderSuccess) {

        navigate('/');
      }
  return (

    <div class="py-3 py-md-4 checkout">
    <div class="container">
        <h4>Booking</h4>
        <hr/>

        <div class="row">
            <div class="col-md-12 mb-4">
                <div class="shadow bg-white p-3">
                    <h4 class="text-primary">
                        Tổng tiền :
                        <span style={{color:'red'}} class="float-end">{total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
                    </h4>
                    <hr/>
                    <small>* Lịch trình của bạn sẽ thông báo trước từ 3 - 5 ngày.</small>
                    <br/>
                    <small>* Tư vấn hỗ trợ 24/7</small>
                </div>
            </div>
            <div class="col-md-12">
                <div class="shadow bg-white p-3">
                    <h4 class="text-primary">
                        Thông tin địa chỉ:
                    </h4>
                    <hr/>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="row">
                        <div class="col-md-6 mb-3">
                                <label>Số lượng khách</label><br/>
                                <span style={{color:'red'}}>{errors.address?.type === "required" && "Số lượng khách không được để trống!"}</span><br/>
                                <span style={{color:'red'}}>{errors.address?.type === "minLength" && "Số lượng khách phải ít nhất 8 ký tự"}</span>
                                <input type="text" name="fullname" class="form-control" placeholder="Số lượng khách"  {...register("address",{required:true,minLength:8})}/>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label>Lịch trình</label><br/>
                                <span style={{color:'red'}}>{errors.address?.type === "required" && "Lịch trình không được để trống!"}</span><br/>
                                <span style={{color:'red'}}>{errors.address?.type === "minLength" && "Lịch trình phải ít nhất 8 ký tự"}</span>
                                <input type="text" name="fullname" class="form-control" placeholder="Lịch trình"  {...register("address",{required:true,minLength:8})}/>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label>Địa chỉ</label><br/>
                                <span style={{color:'red'}}>{errors.address?.type === "required" && "Địa chỉ không được để trống!"}</span><br/>
                                <span style={{color:'red'}}>{errors.address?.type === "minLength" && "Địa chỉ phải ít nhất 8 ký tự"}</span>
                                <input type="text" name="fullname" class="form-control" placeholder="địa chỉ"  {...register("address",{required:true,minLength:8})}/>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label>Số điện thoại</label><br/>
                                <span style={{color:'red'}}>{errors.phone?.type === "required" && "Điện thoại không được để trống!"}</span><br/>
                                <span style={{color:'red'}}>{errors.phone?.type === "minLength" && "Điện thoại phải ít nhất 8 ký tự"}</span>
                                <input type="number" name="phone" class="form-control" placeholder="số điện thoại" {...register("phone",{required:true,minLength:10})} />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label>Thành phố</label><br/>
                                <span style={{color:'red'}}>{errors.city?.type === "required" && "Thành phố không được để trống"}</span>
                                <input type="text" name="email" class="form-control" placeholder="thành phố" {...register("city",{required:true})}/>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label>Đất nước</label><br/>
                                <span style={{color:'red'}}>{errors.national?.type === "required" && "Đất nước không được để trống"}</span>
                                <input type="text" name="pincode" class="form-control" placeholder="đất nước" {...register("national", { required: true })} />
                            </div>
                           
                            <div class="col-md-12 mb-3">
                                <div class="d-md-flex align-items-start">
                                    <div class="nav col-md-3 flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <button class="nav-link fw-bold" id="cashOnDeliveryTab-tab" data-bs-toggle="pill" data-bs-target="#cashOnDeliveryTab" type="submit" role="tab" aria-controls="cashOnDeliveryTab" aria-selected="true">HOÀN TẤT ĐẶT HÀNG</button>
                                    
                                    </div>
                                
                                </div>

                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    </div>
</div>

  )
}

export default Address