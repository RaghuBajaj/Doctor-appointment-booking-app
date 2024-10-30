import { useEffect, useState, useContext  } from 'react';
import './Login.css';
import { ItemContext } from '../Context';

function Login() {
  const [login,setLogin] = useState(false);
  const { allUsers, setAllUsers, setUser, navigate, setAllAppointments } = useContext(ItemContext);
  const [createInfo,setCreateInfo] = useState({
    name:'',
    email:'',
    password:'',
    contact:'',
    gender:'',
    dob:'',
    address:'',
    userAppointments: [],
  });
  const reset1 = {
    name:'',
    email:'',
    password:'',
    contact:'',
    gender:'',
    dob:'',
    address:'',
    userAppointments: [],
  }
  const handleCreateAccount =()=>{
    if(createInfo.name !== '' && createInfo.email !== '' && createInfo.password !== ''){
      setAllUsers((prev)=>{
        console.log('prev:', prev);
        if(prev){
          return [ ...prev, createInfo ]
        }
        else{
          return [createInfo]
        }
      });
      alert('Account created Successfully!');
      setUser(createInfo);
      setAllAppointments(createInfo.userAppointments);
      setCreateInfo(reset1);
      navigate('/Home');
    }else{
      alert('Please fill in all required fields.');
    }
  }
  const [loginInfo,setLoginInfo] = useState({
    email:'',
    password:'',
  });
  const reset2 = {
    email:'',
    password:'',
  }

  const handleLoginAccount =()=>{
    if( loginInfo.email !== '' && loginInfo.password !== ''){
      const account = allUsers.find((account)=>account.email === loginInfo.email && account.password === loginInfo.password);
      if(account){
        setUser(account);
        setAllAppointments(account.userAppointments);
        setLoginInfo(reset2);
        navigate('/Home');
        return;
      }else{
        alert('Invalid login credentials.');
      }
    }
    else{
      alert('Please fill in all requierd fields.');
    }
  }

  const handleInputChange =( e, setState, field )=>{
    setState((prev)=>({ ...prev,[field]:e.target.value }))
  }
  
  useEffect(()=>{
  },[]);
  return (
    <div className='full_log'>
      {(login === false) && (
         <div className='container_log'>

         <div className='para_log'>
           <h1 className='h1_log'>Create Account</h1>
           <p className='h3_log'>Please sign up to book appointment</p>
         </div>
         <div className='para_log'>
           <h3 className='h3_log'>Full Name</h3>
           <input type='text' value={createInfo.name} className='input_log' onChange={(e)=>handleInputChange( e,setCreateInfo,'name' )}/>
         </div>
         <div className='para_log'>
           <h3 className='h3_log'>Email</h3>
           <input type='email' value={createInfo.email}  className='input_log' onChange={(e)=>handleInputChange( e,setCreateInfo,'email' )}/>
         </div>
         <div className='para_log'>
           <h3 className='h3_log'>Password</h3>
           <input type='password' value={createInfo.password}  className='input_log' onChange={(e)=>handleInputChange( e,setCreateInfo,'password' )}/>
         </div>
         <div className='para_log'>
           <button className='btn_log' onClick={handleCreateAccount}>Create account</button>
         </div>
         <div className='para_log'>
           <p className='h3_log'>Already have acount?  <strong className='switch_log' onClick={()=>{setLogin(true)}}> Login here</strong> </p>
         </div>
 
       </div>
      )}
      {(login === true) && (
        <div className='container_log'>
        <div className='para_log'>
          <h1 className='h1_log'>Login</h1>
          <p className='h3_log'>Please log in to book appointment</p>
        </div>
        <div className='para_log'>
          <h3 className='h3_log'>Email</h3>
          <input type='email' value={loginInfo.email} className='input_log' onChange={(e)=>handleInputChange( e,setLoginInfo,'email' )}/>
        </div>
        <div className='para_log'>
          <h3 className='h3_log'>Password</h3>
          <input type='password'  value={loginInfo.password} className='input_log' onChange={(e)=>handleInputChange( e,setLoginInfo,'password' )}/>
        </div>
        <div className='para_log'>
          <button className='btn_log' onClick={handleLoginAccount}>Login</button>
        </div>
        <div className='para_log'>
          <p className='h3_log'>Create a new account? <strong className='switch_log' onClick={()=>{setLogin(false)}}> Click here</strong> </p>
        </div>
      </div>
      )}
    </div>
  )
}

export default Login
