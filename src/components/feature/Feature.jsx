import {React,useRef} from 'react'
import './feature.css'
import { feature } from '../../data';
import Slider from "react-slick";

import { useState } from 'react';
const Feature = () => {
  const refFeature = useRef(); 
  const [slice,setSlice] = useState(0);
  const handleArrow = (direction)=>{
    if(direction === "right" && slice < 3){
      refFeature.current.style.transform = `translateX(-${(slice + 1) * 100}vw)`
      setSlice(slice=>slice + 1)
    }else{
      refFeature.current.style.transform = `translateX(0vw)`
      setSlice(0)
    }

    if (direction === "left" && slice >= 1) {
      refFeature.current.style.transform = `translateX(-${(slice - 1) * 100}vw)`
      setSlice(slice=>slice - 1)
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    // <div className='feature-container'>  
      <div  className="feature-wraper">
        <Slider {...settings}>
                        {feature  && feature.map(item=>{
                          return (
                            <div className="feature-item">
                              <img height={800} width="100%" src={item.url} alt="" />
                              <div className='feature-item-info'>
                                <span>{item.title}</span>
                                <h1>{item.content}</h1>
                                <div>{item.desc}</div>
                
                              </div>
                            </div>
                          )
                        })}
        </Slider>
      </div>
        
    // </div>
  )
}

export default Feature
