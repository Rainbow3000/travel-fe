import React, { useState,useEffect } from 'react';
import './payment.scss';
import { useDispatch, useSelector } from 'react-redux';
import {createOrder,resetSuccess} from '../../store/slice/orderSlice'
import { useNavigate } from 'react-router-dom';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { FaInfo } from "react-icons/fa";
import {PayPalButtons} from '@paypal/react-paypal-js'
const Payment = () => {
    const [name,setName] = useState(""); 
    const [email,setEmail] = useState(""); 
    const [phoneNumber,setPhoneNumber] = useState(""); 
    const [address,setAddress]= useState(""); 
    const [note,setNote] = useState(""); 
	const [order,setOrder] = useState(null);
    const [nameErr,setNameErr] = useState(""); 
    const [emailErr,setEmailErr] = useState(""); 
    const [phoneErr,setPhoneErr] = useState(""); 
    const [addressErr,setAddressErr]= useState(""); 
	const [payType,setPayType] = useState("Normal"); 
	const [tourInfo,setTourInfo] = useState(null); 
	const [scheduleInfo,setScheduleInfo] = useState(null); 
	const {success}  = useSelector(state => state.order)
	const {user}  = useSelector(state => state.user)
	const dispatch = useDispatch(); 
	const navigate = useNavigate()
	
	useEffect(()=>{

		if(user === null){
			navigate('/login')
			return; 
		}

		setTourInfo( JSON.parse(localStorage.getItem('choose-tour')))
		setScheduleInfo(JSON.parse(localStorage.getItem('choose-schedule')))
	},[])


	if(success === true){
		dispatch(resetSuccess()); 
		alert('Order successfully !'); 
		navigate('/booking'); 
	}


    const handleSubmit = (e)=>{
        e.preventDefault(); 
        let check = 0; 
        if(name.trim() === ""){
            setNameErr("Name is required")
            check = 1; 
        }

        if(email.trim() === ""){
            setEmailErr("Email is required")
            check = 1; 
        }
        if(phoneNumber.trim() === ""){
            setPhoneErr("Phone is required")
            check = 1; 
        }

        if(address.trim() === ""){
            setAddressErr("Address is required")
            check = 1; 
        }

      
        if(check === 1) return; 

        const customer = {
						name,
            email,
            address,
						phoneNumber,
            note,
						userId:user._id,
		
        }

        const order = {
			product : tourInfo?._id,
			schedule: scheduleInfo?._id,
			totalMonney:tourInfo.price,
			payType
        }
		
		dispatch(createOrder({customer,order}))
	
    }



	  // creates a paypal order
	  const createOrderPaypal = (data, actions) => {
		return actions.order.create({
			purchase_units: [
				{
					description: "Booking travel",
					amount: {
						currency_code: "USD",
						value: tourInfo?.price,
					},
				},
			],
		}).then((orderID) => {
				return orderID;
			});
	};
  
	// check Approval
	const onApprove = (data, actions) => {
		return actions.order.capture().then(function (details) {
			if(details){
				console.log(details)
				
				const customer = {
					name:details.payer.name.given_name,
					email:details.payer.email_address,
					address:details.payer.address.country_code,
					phoneNumber,
					note,
					userId:user._id
				}
		
				const order = {
					product : tourInfo?._id,
					schedule: scheduleInfo?._id,
					totalMonney:tourInfo.price,
					payType:'Paypal'
				}
				
				dispatch(createOrder({customer,order}))
			}
		});
	};

    return (

        <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">ORDER INFO</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-10 col-md-12">
					<div class="wrapper">
						<div class="row no-gutters">
							<div class="col-md-7 d-flex align-items-stretch">
								<div class="contact-wrap w-100 p-md-5 p-4">
							
									<div id="form-message-warning" class="mb-4"></div> 
				      		<div id="form-message-success" class="mb-4">
				           
				      		</div>
									<form method="POST" id="contactForm" name="contactForm" onSubmit={handleSubmit}>
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<span style={{color:'red'}}>{nameErr}</span>
													<input value={name} type="text" class="form-control" name="name" id="name" placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
												</div>
											</div>
											<div class="col-md-6"> 
												<div class="form-group">
													<span style={{color:'red'}}>{emailErr}</span>

													<input value={email} type="email" class="form-control" name="email" id="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<span style={{color:'red'}}>{phoneErr}</span>
													<input value={phoneNumber} type="text" class="form-control" name="subject" id="subject" placeholder="Phone" onChange={(e)=> setPhoneNumber(e.target.value)}/>
												</div>

                                                <div class="form-group">
													<span style={{color:'red'}}>{addressErr}</span>
													<input value={address} type="text" class="form-control" name="subject" id="subject" placeholder="Address" onChange={(e)=> setAddress(e.target.value)}/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<textarea value={note} name="message" class="form-control" id="message" cols="30" rows="7" placeholder="Message" onChange={(e)=> setNote(e.target.value)}></textarea>
												</div>
											</div>
											<div class="col-md-12" style={{display:'flex'}}>
												<div class="form-group">
													<input onClick={()=>setPayType('Normal')} type="submit" value="ORDER" class="btn btn-primary"/>
													<div class="submitting"></div>
												</div>
                                                <div class="form-group">
													 <PayPalButtons  
													style={{ layout: "vertical" }}
													createOrder={createOrderPaypal}
													onApprove={onApprove}/>
												
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className='info-tour-wrapper' class="col-md-5 d-flex align-items-stretch" >
								<div class="info-wrap bg-primary w-100 p-lg-5 p-4">
									<h3  class="mb-4 mt-md-4">Your Tour</h3>




                            <div style={{display:'flex',alignItem:'center'}}  class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
								<FaInfo/>
				        		</div>
				        		<div  style={{marginLeft:10}} class="text pl-3">
					            <p><span >Tour Name:</span>{tourInfo?.name}</p>
					          </div>
				           </div>
 

				        	<div style={{display:'flex',alignItem:'center'}}  class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<IoLocationSharp/>
				        		</div>
				        		<div  style={{marginLeft:10}} class="text pl-3">
					            <p><span>Address:</span> {tourInfo?.address}</p>
					          </div>
				           </div>
						   <div style={{display:'flex',alignItem:'center'}}  class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<MdOutlineDateRange/>
				        		</div>
				        		<div  style={{marginLeft:10}} class="text pl-3">
					            <p><span>From date:</span>{scheduleInfo?.dateStart}</p>
					          </div>
				          </div>
						  <div style={{display:'flex',alignItem:'center'}}  class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
								<MdOutlineDateRange/>

				        		</div>
				        		<div  style={{marginLeft:10}} class="text pl-3">
					            <p><span>To date:</span>{scheduleInfo?.dateEnd}</p>
					          </div>
				          </div>
				        	<div  style={{display:'flex',alignItem:'center'}} class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<FaPhone/>
				        		</div>
				        		<div  style={{marginLeft:10}} class="text pl-3">
					            <p><span>Hotline:</span>{scheduleInfo?.hotline}</p>
					          </div>
				          </div>
				        	<div style={{display:'flex',alignItem:'center'}}  class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<FaDollarSign/>
				        		</div>
				        		<div  style={{marginLeft:10}} class="text pl-3">
					            <p><span>Price:</span> <a href="mailto:info@yoursite.com">$ {tourInfo?.price}</a></p>
					          </div>
				          </div>
				        	
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
};

export default Payment;
