import React, { useEffect } from 'react';
import './aboutus.css';
import { Link } from 'react-router-dom';
const AboutUs = () => {

    return (
        <div className="">
            <div className="container-about">
                <div className="backgr-image">
                    <img src="https://res.cloudinary.com/dgyolr1sq/image/upload/v1702892774/bg-trans_cew4vc.png" alt="" />
                </div>
                <div className="container1">
                    <div className="about-row">
                        <div className="about-left">
                            <img src="https://res.cloudinary.com/dgyolr1sq/image/upload/v1703039163/vict-1024x1024_1_oiv02c.jpg" alt="" />
                        </div>
                        <div className="about-right">
                           <h3>About Us</h3>
                           <span>Victoria Tour VIET NAM</span>
                           <p>Victoria Tour and General Trading Co., Ltd (also known as Victoriatour) was established in 2012. After only a short period of operation, Victoriatour has risen to become one of the leading travel brands in Vietnam. Each year, Victoriatour is proud to provide more than 500,000 customers with high quality and diverse travel experiences, tailored to their individual needs.Come to Victoria Tour to discover the wonders, with the motto: “Enjoy life – Enjoy your life”</p>
                           <button>VIEW MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
