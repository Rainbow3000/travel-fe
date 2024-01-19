import React from 'react'
import './menuSide.scss'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector,useDispatch } from 'react-redux';
const MenuSide = ({user,toggleMenu,menuRef}) => {
    const dispatch = useDispatch(); 
   
  return (
      <div onClick={()=>toggleMenu()} ref={menuRef} className='navbar-menu-show'>
          <ul>
              <li>ABOUT</li>
              <li>CONTACT</li>
              {
                  user ? (
                      <>
                      <Link to="/me">
                            <li>{`hello!,${user.userName}`}</li>
                      </Link>
                     <li >LOGOUT</li></>) : (
                   <>
                          <Link to="/login"><li>LOGIN</li></Link>
                          <Link to="/register"><li>REGISTER</li></Link>
                      </>
                  )
              }

              <li><Link to="/instant-book"><ShoppingCartOutlinedIcon /></Link></li>
          </ul>
      </div>
  )
}

export default MenuSide