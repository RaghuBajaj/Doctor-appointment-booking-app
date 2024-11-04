import { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { ItemContext } from '../Context';

function Navbar() {
  const {assets,user,setUser,setAllAppointments,navigate} = useContext(ItemContext);
  const [account,setAccount] = useState(false);
  const [activeNav,setActiveNav] = useState("");

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
            <li className={activeNav === "1" ? "active_li_nav li_nav" : "li_nav li"} onClick={()=>{navigate('/Home');setActiveNav("1")}}>Home</li>
            <li className={activeNav === "2" ? "active_li_nav li_nav" : "li_nav li"} onClick={()=>{navigate('/AllDoctors');setActiveNav("2")}}>All Doctors</li>
            <li className={activeNav === "3" ? "active_li_nav li_nav" : "li_nav li"} onClick={()=>{navigate('/About');setActiveNav("3")}}>About</li>
            <li className={activeNav === "4" ? "active_li_nav li_nav" : "li_nav li"} onClick={()=>{navigate('/MyAppointments');setActiveNav("4")}}>My Appointments</li>
            <li className={activeNav === "5" ? "active_li_nav li_nav" : "li_nav li"} onClick={()=>{navigate('/Profile');setActiveNav("5")}}>Profile</li>
        </ul>

        <ul className='ul_nav ul2'>
            {(account === false) ? (
              <div className='li_nav log_nav' onClick={()=>{navigate('/Login');setActiveNav("6")}}>Create Account</div>
            ):(
              <div className='li_nav log_nav' onClick={()=>{handleLogout();navigate('/Login');setActiveNav("6")}}>Logout</div>
            )}
        </ul>
    </div>
  )
}

export default Navbar
