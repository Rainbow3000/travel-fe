import React from 'react';
import './hotels.css';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Hotels = () => {
    const {products} = useSelector(state => state.product); 
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", color:"#333333 !important" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "transparent", color:"#333333 !important" }}
            onClick={onClick}
          />
        );
      }
      
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    
    return (
        <div  className="hotels">
            <div className="hotel-top">
                    <p>Top Hotels</p>
                    <h2>Sale Off Booking Open Now!</h2>
                    <span>Over 1000 Hotel rooms worldwide sale off. Book Hotel rooms and enjoy your holidays with distinctive experience</span>
            </div>
            <div className="container-hotel">
                <Slider {...settings}>
                    {
                        products.length > 0 && products.filter(item => item.isSale).map(item =>{
                            return (
                                <Link to={`/single/${item._id}`}>
                                    <div className="feature-item1">
                                        <div className="item-header1">
                                            
                                                <img height={350} width="100%" src={item.image} alt="" />
                                            
                                        </div>
                                        <div className="item-main1">
                                            <div className='feature-item-info1'>
                                               
                                                    <h2>{item.name}</h2>
                                                
                                                <p>{item.price}$ | {item.personNumber} Person</p>
                                                <span>{item.desc}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                  
                </Slider>
              
            </div>
      </div>
    )
};

export default Hotels;
