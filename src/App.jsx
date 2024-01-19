import {React} from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import SingleProduct from './pages/singleProduct/SingleProduct'
import NavbarInfo from './components/navbarInfo/NavbarInfo'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Address from './pages/address/Address'
import NotFound from './pages/notFound/NotFound'
import Success from './pages/success/Success'
import {PayPalScriptProvider,PayPalButtons} from '@paypal/react-paypal-js'
import ProductByCategory from './pages/productByCategory/ProductByCategory'
import Destination from './components/destinations/Destinations'
import TravelList from './components/travelList/TravelList'
import Hotel from './components/hotels/Hotels'
import News from './components/news/News'
import AboutUs from './components/about-us/AboutUs'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Payment from './pages/payment/Payment'
import Booking from './pages/booking/Booking'
const App = () => { 

  return (
    <PayPalScriptProvider options={{'client-id':'AagTOsTYtZy14pye1cJ7MOG0KGsxhclHXiuLuuXXVJQwPGz82NqxngLu2sOQSXZO-g0y-DlGsGlIYIkT'}}>
        <div className='page-wrapper' >
            <BrowserRouter>
                <Navbar />
                <NavbarInfo/>
                <Routes>
                    <Route path='/'  exact element={<Home />} />
                    <Route path='/single/:id' element={<SingleProduct />} />
                    <Route path='/instant-book' element={<Cart />} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/address' element={<Address/>}/>
                    <Route path='/destination' element={<Destination/>}/>
                    <Route path='/travel-list/:id' element={<TravelList/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/hotel' element={<Hotel/>}/>
                    <Route path='/about-us' element={<AboutUs/>}/>
                    <Route path='/payment' element={<Payment/>}/>
                    <Route path='/success' element={<Success/>}/>             
                    <Route path='/booking' element={<Booking/>}/>             
                    <Route path="/productbycategory/:id" element={<ProductByCategory/>}  /> 
                    <Route path="*" element={<NotFound/>} />
                </Routes>            
                <Footer/>
            </BrowserRouter>
        </div>
      </PayPalScriptProvider>
   
  )
}

export default App