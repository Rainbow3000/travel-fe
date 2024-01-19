import { React, useEffect, useState, useRef } from 'react'
import './singleProduct.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../store/slice/productSlice';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Slider from "react-slick";
import { feature } from '../../data';

const SingleProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tourId = location.pathname.split('/')[2];
  const dispatch = useDispatch(); 

  const {singleTour} = useSelector(state => state.product); 

  const handleSetPayment = (item)=>{
      localStorage.setItem('choose-tour', JSON.stringify(singleTour))
      localStorage.setItem('choose-schedule', JSON.stringify(item))
  }

  useEffect(() => {
    dispatch(fetchSingleProduct(tourId)); 
  }, [])

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent", color: "#333333 !important" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "transparent", color: "#333333 !important" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  const handleChangeColor = (e) => {

  }
  const refFeature = useRef();
  const [slice, setSlice] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "right" && slice < 3) {
      refFeature.current.style.transform = `translateX(-${(slice + 1) * 100}vw)`
      setSlice(slice => slice + 1)
    } else {
      refFeature.current.style.transform = `translateX(0vw)`
      setSlice(0)
    }

    if (direction === "left" && slice >= 1) {
      refFeature.current.style.transform = `translateX(-${(slice - 1) * 100}vw)`
      setSlice(slice => slice - 1)
    }
  }

  return (

    <div className="tour-detail">
      <div className="elementor-background-overlay">
        <div className="elementor-background"></div>
      </div>
      <div className="elementor-widget-wrap">
        <div className="header-link">
          <h2>Tour Detail</h2>
          <p> <a href="">Home</a> |<a href="">Hotel</a>  | <span> InterContinental {singleTour?.name} </span></p>
        </div>
      </div>
      <div className="container">
        <div className="item-detail">
          <div className="detail-left">
            <div className="name-tour-detail">
              <h2>{singleTour?.name}</h2>
            </div>
            <div className="address">
             
            </div>
            <div className="feature-wraper">
              
                    <div className="feature-item">
                      <img height={600} width="100%" src={singleTour?.image} alt="" />
                    </div>
             
            </div>
            <div className="">
            
              <div className="detail-desc">
                <h2>Description</h2>
                <p>{singleTour?.desc}</p>
              </div>
                <h2>Tour Shedules</h2>
              <div className="table-check">
                  {
                    singleTour?.schedules.length > 0 && singleTour.schedules.map(item =>{
                      return (
                        <>
                        <div className="check-col">From date: {item.dateStart}</div>
                        <div className="check-col">To Date: {item.dateEnd}	</div>
                        <div className="check-col">Hotline: {item.hotline}</div>
                        <button onClick={()=>handleSetPayment(item)} className='check-col'><Link className='link' to="/payment">Order</Link></button>
                      </>
                      )
                    })
                  }

                 
               
            
                
              </div>
            </div>
            <div className="policy">
              <div className="policy-col">
                <h3>PET POLICY</h3>
                <p>Pets are not permitted to enter hotel premise. Service animals that provide assistance to individuals with disabilities are not considered pets. Please contact our hotel before arrival for more information and support.</p>
              </div>
              <div className="policy-col">
                <h3>ACCESSIBILITY</h3>
                <p>Almost all areas of the hotel are wheel chair accessble, inlcuding the banquet and conference area, health club and spa, restaurant outlets.</p>
              </div>
              <div className="policy-col">
                <h3>WIFI</h3>
                <p>Standard Rooms, Suites, Business Center and Meeting Convention Space</p>
              </div>
              <div className="policy-col">
                <h3>PARKING</h3>
                <p>Car parking is available Parking Spaces/125 Spaces Valet parking is available Self-Parking</p>
              </div>
              <div className="policy-col">
                <h3>Guestroom Accessibility Details</h3>
                <ul>
                  <li>✔️ Wheelchair Accessible Closets</li>
                  <li>✔️ Furniture can be rearranged for added space</li>
                  <li>✔️ Wheelchair Accessible Rooms & Routes</li>
                  <li>✔️ Bathroom Cord/Button Emergency System</li>
                  <li>✔️ Bedroom Cord/Button Emergency System</li>
                </ul>
              </div>
              <div className="policy-col">
                <h3>Public Area Accessibility Details</h3>
                <ul>
                  <li>✔️ Wheelchair Accessible Closets</li>
                  <li>✔️ Furniture can be rearranged for added space</li>
                  <li>✔️ Wheelchair Accessible Rooms & Routes</li>
                  <li>✔️ Bathroom Cord/Button Emergency System</li>
                  <li>✔️ Bedroom Cord/Button Emergency System</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="detail-right">
            <div className="make-booking">
              <h3>MAKE A BOOKING</h3>
            </div>
          
            <p><LocationOnIcon />  {singleTour?.address}</p>         
           
            <div className="form-group">
            <ul>                                                    
               
                <li class="d-block ">
                    <div class="pt-1">
                        <span class="fw-bold">${singleTour?.price} x {singleTour?.personNumber} guests:</span><span class="float-end  fw-bold">${singleTour?.price}.00</span>
                    </div>
                </li>
                <li class="d-block ">
                    <div class="pt-1">
                        <span class="fw-bold">Booking fee + tax:</span><span class="float-end  fw-bold">0.00</span>
                    </div>
                </li>
               
                <li class="d-block ">
                    <div class="pt-1">
                        <span class="fw-bold">Other fees</span><span class="float-end  fw-bold">Free</span>
                    </div>
                </li>

                <li class="d-block border-t">
                    <div class="pt-1">
                        <span class="fw-bold">Total</span><span class="float-end  fw-bold">$ {singleTour?.price}</span>
                    </div>
                </li>
            </ul>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default SingleProduct