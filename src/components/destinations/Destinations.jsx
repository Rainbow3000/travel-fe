import React, { useEffect, useState } from 'react';
import './destinations.css';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
const Destinations = () => {
    const {categorys} = useSelector(state => state.category);
  
    const [tour,setTour] = useState([]); 

    useEffect(()=>{
      
    },[categorys.length])
    return (
        <div className="container-desti">
            <div className="destinations">
                <div className="destination-top">
                    <p>Top Destinations</p>
                    <h2>Explore Top Destinations</h2>
                    <span>Discover outstanding Southeast Asian tours with us !</span>
                </div>
                <div className="destination-tour">
                    {
                        categorys.length > 0  && (
                                <div className="destination-col-5">
                                  
                                        <Link to={`/travel-list/${categorys[0]?._id}`}>
                                            <div className="destination-img">
                                                <img src={ categorys[0]?.image} alt="" />
                                            </div>
                                            <div className="destination-name">
                                                <div className='name-tour'>{ categorys[0]?.name}</div>
                                                
                                            </div>
                                            <div className="color-overlay"></div>
                                        </Link>
                                    
                                </div>
                        )
                    }
                    <div className="destination-col-7">

                        {
                            categorys.length > 0 && categorys.slice(1,categorys.length).map(item =>{
                                return (
                                    <Link to={`/travel-list/${item._id}`}>
                                        <div className="child-col-7">
                                     
                                        <div className="destination-img">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="destination-name">
                                            <div className='name-tour'>{item.name}</div>
                                           
                                        </div>
                                        <div className="color-overlay"></div>
                                     
                                        </div>
                                    </Link>
                                )
                            })
                        }

                     

                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Destinations;
