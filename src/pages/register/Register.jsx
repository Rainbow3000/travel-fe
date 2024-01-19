
import { useState,useEffect } from 'react';
import './register.scss'
import { Link, useNavigate } from 'react-router-dom';
import {register} from '../../store/slice/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import { resetSuccess } from '../../store/slice/userSlice';
const Login = () => {

    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [userNameErr,setUserNameErr] = useState(""); 
    const [emailErr,setEmailErr]  = useState("")
    const [passwordErr,setPasswordErr]  = useState("")

    const {success,user,error} = useSelector(state => state.user)
    const dispatch = useDispatch(); 
    const handleSubmit = (e)=>{
        e.preventDefault(); 

        let flag = 0 ;
        if(userName.trim().length === 0){
            setUserNameErr('User name is required !')
            flag = 1;
        }

        if(email.trim().length === 0){
            setEmailErr('Email is required !')
            flag = 1;
        }
        if(password.trim().length === 0){
            setPasswordErr('Password is required !')
            flag = 1;
        }

        if(flag === 1){
            return; 
        }

        dispatch(register({userName,email,password}))
    }
    const navigate = useNavigate(); 
    if(success === true){
        alert('Register success !');
        dispatch( resetSuccess()); 
        navigate('/login');  
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
        <label for="exampleInputEmail1" class="form-label">Your Name</label><br/>
        <span style={{color:'red'}}>{userNameErr}</span>
        <input value={userName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setUserName(e.target.value)}/>
        
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label><br/>
        <span style={{color:'red'}}>{emailErr}</span>
        <input value={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
        
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label><br/>
        <span style={{color:'red'}}>{passwordErr}</span>
        <input value={password} type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <span>Are you ready have an account ? <Link style={{textDecoration:'underline',color:'blue'}} to="/login">Login</Link></span>
     
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  );
};

export default Login;
