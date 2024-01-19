
import { useEffect, useState } from 'react';
import './login.scss'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {login,resetSuccess} from '../../store/slice/userSlice'
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {

  const [email,setEmail] = useState(""); 
  const [password,setPassword] = useState(""); 
  const [emailErr,setEmailErr]  = useState("")
  const [passwordErr,setPasswordErr]  = useState("")
  const dispatch = useDispatch (); 
  const {success,user,error} = useSelector(state => state.user); 
  console.log(1111,error)
  const handleSubmit = (e)=>{
    let flag = 0;  
    e.preventDefault(); 
    if(email.trim().length === 0){
      setEmailErr('Email is required.')
      flag = 1; 
    }

    if(password.trim().length === 0){
      setPasswordErr('Password is required.')
      flag = 1; 
    }

    if(flag === 1){
      return; 
    }

    dispatch(login({email,password})); 
  }

  const navigate = useNavigate(); 
  if(success === true){
    alert('Login success !')
    dispatch(resetSuccess()); 
    navigate('/')
  }

  useEffect(()=>{
    if(user !== null){
      navigate('/')
    }
    setEmailErr("");
    setPasswordErr("");
    
  },[])
  

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <span style={{color:'red'}}>{error}</span>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label><br/>
        <span style={{color:'red'}}>{emailErr}</span>
        <input value={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value)}/>
        
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label><br/>
        <span style={{color:'red'}}>{passwordErr}</span>
        <input value={password} type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=> setPassword(e.target.value)}/>
      </div>
      <span>You don't have an account ? <Link style={{textDecoration:'underline',color:'blue'}} to="/register">Register</Link></span>
     
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  );
};

export default Login;
