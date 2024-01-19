import React from 'react';
import './travelList.css';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const TravelList = () => {
    let {travelProducts} = useSelector(state => state.product)
    
    const location = useLocation(); 
    const url = location.pathname; 
    const id = location.pathname.split('/')[2]; 
    const [product,setProduct] = useState([]);

    
    return (
        <div className="container-travel">
            <div className="travel" style={{textAlign:'center'}}>
                <div className="travel-top">
                    <p id='travel'>Travel List</p>
                    <h2>Top Tour Hot</h2>
                    <span>Discover outstanding Southeast Asian tours with us !</span>
                </div>
                <div className="travel-list" >

                    {
                        travelProducts?.length > 0 && id === undefined && travelProducts.map(item =>{
                            return (
                                <Link to={`/single/${item._id}`}>
                                    <div className="child-travel">

                                        <a href="/single/1">
                                            <div className="travel-img">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="travel-name">
                                                <div className="name-left">
                                                  
                                                    <div className='name-tour'>{item.name}</div>
                                                </div>
                                                <div className="cost-tour">
                                                    <div className="tour-desti">
                                                        <span className='tour-price'>${item.price}</span>
                                                        <span> | {item.personNumber} Person</span>
                                                    </div>
                                                    <div className="duration">
                                                        <p>{item.time}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="color-overlay"></div>
                                        </a>
                                    </div>
                                </Link>
                            )
                        })
                    }

{
                        travelProducts?.length > 0 && id !== undefined && travelProducts.filter(item => item.category === id).map(item =>{
                            return (
                                <div className="child-travel">

                                   <Link to={`/single/${item._id}`}>
                                        <div className="travel-img">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="travel-name">
                                            <div className="name-left">
                                                <div className="travel-form">{item.address}
                                                    <div className="mb-1"></div>
                                                </div>
                                                <div className='name-tour'>{item.name}</div>
                                            </div>
                                            <div className="cost-tour">
                                                <div className="tour-desti">
                                                    <span className='tour-price'>${item.price}</span>
                                                    <span> | {item.personNumber} Person</span>
                                                </div>
                                                <div className="duration">
                                                    <p>{item.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="color-overlay"></div>
                                   </Link>
                                 
                                </div>
                            )
                        })
                    }

                
                </div>
                    {
                        travelProducts.length === 0 && (
                            <span>There are no products searched !</span>
                        )
                    }
                  
            </div>
           
        </div>
    )
};

export default TravelList;
