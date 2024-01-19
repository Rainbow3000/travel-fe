import {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginIcon from '@mui/icons-material/Login';
import './navbar.scss'
import { Badge, Button } from '@mui/material'
import {Link} from 'react-router-dom'
import { useEffect,useRef} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'; 
import MenuSide from '../menuSide/MenuSide';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {logout} from '../../store/slice/userSlice'
import {findProduct} from '../../store/slice/productSlice'
const Navbar = () => {
    const dispatch = useDispatch(); 
    const [textSearch,setTextSearch] = useState(""); 
    const {user} = useSelector(state => state.user); 
    const {orders} = useSelector(state => state.order); 
    

    const handleSearch = ()=>{
        dispatch(findProduct(textSearch))
    }

    useEffect(()=>{
        setTextSearch(""); 
    },[])

    return (

<div className='container-nav'>
    <div className='navbar-wrapper'>
    <div className='navbar-left'>
					<div className='navbar-left-logo'>
						<Link to='/'>
							<h1>
								<img
									src='https://res.cloudinary.com/dgyolr1sq/image/upload/v1702892750/Logovictoriatour_w6xuke.jpg'
									alt=''
									className='nav-logo'
								/>
							</h1>
						</Link>
					</div>
				</div>
                <div className='input-search'>
                    <input value={textSearch} onChange={(e)=>setTextSearch(e.target.value)} type="text" placeholder='Search your tour here...' />
                    
                    <button onClick={handleSearch}>
                        <a href="#travel">Search</a>
                    </button>
                </div>
                <div className='navbar-center'>
					<ul className='nav-list'>
						<li>
							<Link to='/'>Home</Link>
						</li>
                        <li>
							<Link to='/about-us'>About Us</Link>
						</li>
                        <li>
							<Link to='/destination'>Destinations</Link>
						</li>
                     
                        <li>
							<Link to='/hotel'>Hotel</Link>
						</li>
                        <li>
							<Link to='/news'>News</Link>
						</li>
                        {
                            user !== null && (
                                <li>
                                    <Link to='/booking'>BOOKING ({orders?.length}) </Link>
                                </li>

                            )
                        }
						
					</ul>
				</div>
                <div className='navbar-right'>
					<div className='navbar-center-input'>
                   
                    {
                        user  === null ? (
                            <Button className='btn-book-now' variant="contained">
                                                       
                                <Link className='btn-link' to="/login">Login | Register</Link>
                                                     
                            </Button>
                        ):(
                            <>
                            <Button className='btn-book-now' variant="contained" onClick={()=> dispatch(logout())}>
                                                       
                                <Link className='btn-link' to="#">{user?.userName} &nbsp; &nbsp;<ExitToAppIcon/></Link>
                                                 
                            </Button>
                           
                            </>
                        )
                    }

					</div>
				</div>
    </div>
    
</div>

   
  )
}

export default Navbar