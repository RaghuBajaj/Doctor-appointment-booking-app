import { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { ItemContext } from '../Context';

function Navbar() {
  const [account,setAccount] = useState(false);
  const {assets,user,setUser,setAllAppointments} = useContext(ItemContext);

  const changeState =()=>{
    if(user && Object.keys(user).length > 0){
      setAccount(true);
    }
    else{
      setAccount(false);
    }
  }

  const handleLogout =()=>{
    setUser({});
    setAllAppointments([]);
    localStorage.removeItem('user');
    localStorage.removeItem('MyAppointments');
  }
  
  useEffect(()=>{
    changeState();
  },[user]);
  return (
    <div className='full_nav'>

        <div className='icon_nav'>
          <img src={assets.logo} className='img_nav' alt=''></img>
        </div>

        <ul className='ul_nav ul1'>
            <NavLink to='/Home' ><li className='li_nav'>HOME</li></NavLink>
            <NavLink to='/AllDoctors' ><li className='li_nav'>ALL DOCTORS</li></NavLink>
            <NavLink to='/About' ><li className='li_nav'>ABOUT</li></NavLink>
            <NavLink to='/MyAppointments' ><li className='li_nav'>MyAppointments</li></NavLink>
            <NavLink to='/Profile' ><li className='li_nav'>PROFILE</li></NavLink> 
        </ul>

        <ul className='ul_nav ul2'>
            {(account === false) ? (
              <NavLink to='/Login'className='li_nav log_nav'>Create Account</NavLink>
            ):(
              <NavLink to='/Login' className='li_nav log_nav' onClick={handleLogout}>LOGOUT</NavLink>
            )}
        </ul>
    </div>
  )
}

export default Navbar
