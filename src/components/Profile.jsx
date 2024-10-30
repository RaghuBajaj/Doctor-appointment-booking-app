import profile_pic from './Images/profile_pic.png';
import'./Profile.css';
import Footer from './Footer';
import { useContext, useEffect, useState } from 'react';
import { ItemContext } from '../Context';

function Profile() {
  const {user,setUser} = useContext(ItemContext);
  const [edit,setEdit] = useState(false);
  const [userInfo,setUserInfo] = useState({
    name:'',
    email:'',
    password:'',
    contact:'',
    gender:'',
    dob:'dd/mm/yy',
    address:'',
    userAppointments: [],
  });
  console.log('userInfo:', userInfo);
  useEffect(()=>{
    setUserInfo(user);
  },[user]);

  const handleEditChange = (e, setState , field) => {
    setState ((prev)=>({...prev,[field]: e.target.value}));
  }
  const handleEditSave =()=>{
    setUser(userInfo);
    setEdit(false);
  };
  
  return (
    <div className='full_pfl'>

      <div className='profile_pfl'>
        <img src={profile_pic} className='img_pfl' alt=''></img>
        <h3 className='name_pfl'>{user.name}</h3>
        <p className='line_pfl'></p>

        <div className='info_pfl'>

          <div className='contact_info_pfl'>
            <p className='heading_info_pfl'>CONTACT INFORMATION</p>
            <div className='section_info_pfl'>
              <p className='title_info_pfl'>Email id:</p>
              {(edit === false) ? (
                <p className='input_pfl'>{user.email}</p>
              ):(
                <input type='email' className='input_pfl' value={userInfo.email} onChange={(e)=>{handleEditChange(e,setUserInfo,'email')}} />
              ) }
            </div>
            <div className='section_info_pfl'>
              <p className='title_info_pfl'>Phone:</p>
              {(edit === false) ? (
                <p className='input_pfl'>{user.contact}</p>
              ):(
                <input type='text' className='input_pfl' value={userInfo.contact} onChange={(e)=>{handleEditChange(e,setUserInfo,'contact')}}/>
              ) }
              
            </div>
            <div className='section_info_pfl'>
              <p className='title_info_pfl'>Address:</p>
              {(edit === false) ? (
                <p className='input_pfl'>{user.address}</p>
              ):(
                <input className='input_pfl' value={userInfo.address} onChange={(e)=>{handleEditChange(e,setUserInfo,'address')}}/>
              ) }
              
            </div>
          </div>

          <div className='contact_info_pfl'>
            <p className='heading_info_pfl'>BASIC INFORMATION</p>
            <div className='section_info_pfl'>
              <p className='title_info_pfl'>Gender:</p>
              {(edit === false) ? (
                <p className='input_pfl'>{user.gender}</p>
              ):(
                <input className='input_pfl' value={userInfo.gender} onChange={(e)=>{handleEditChange(e,setUserInfo,'gender')}}/>
              ) }
              
            </div>
            <div className='section_info_pfl'>
              <p className='title_info_pfl'>Birthday:</p>
              {(edit === false) ? (
                <p type='date' className='input_pfl'>{user.dob}</p> 
              ):(
                <input type='date' value={userInfo.dob} className='input_pfl' onChange={(e)=>{handleEditChange(e,setUserInfo,'dob')}} />
              ) }
              
            </div>
          </div>

          
          {(edit === false) ? (
              <button className='btn_pfl' onClick={()=>{setEdit(true)}}>Edit</button>
            ):(
              <button className='btn_pfl' onClick={()=>{ handleEditSave()}} >Save Changes</button>
            ) 
          }

        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default Profile
