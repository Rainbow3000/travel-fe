import React, { useEffect } from 'react'
import './home.scss'
import Feature from '../../components/feature/Feature'
import AboutUs from '../../components/about-us/AboutUs'
import Destinations from '../../components/destinations/Destinations'
import Hotels from '../../components/hotels/Hotels'
import TravelList from '../../components/travelList/TravelList'
import News from '../../components/news/News'
import { useDispatch } from 'react-redux'
import {fetchProducts} from '../../store/slice/productSlice'
import {getCategory} from '../../store/slice/categorySlice'
const Home = () => {

    const dispatch = useDispatch();   
    useEffect(()=>{
        dispatch(fetchProducts()); 
        dispatch(getCategory()); 
    },[])
    return <>
         <Feature/> 
         <AboutUs/>
         <Destinations/>
         <Hotels/>
         <TravelList/>
     
    </> 

        
}

export default Home