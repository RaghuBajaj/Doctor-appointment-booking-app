import { useContext, useEffect, useState } from 'react';
import './AllDoctors.css';
import Footer from './Footer'
import DoctorBox from './DoctorBox';
import { ItemContext } from '../Context';

function AllDoctors() {
  const {doctors,user} = useContext(ItemContext);
  const [specialist , setSpecialist] = useState('');

  const handelSpecialist =(setState, field)=>{
    if( user && Object.keys(user).length > 0){
      setState(field);
    }          
    else{
      alert('Please login first!');
    }
  }

  useEffect(()=>{
  },[])

  return (
    <div className='full_ad'>
      <p>Browse through the doctors specialist.</p>
      <div className='content_ad'>
        <div className='con1_ad'>
          <button className='btn_ad' onClick={()=>{handelSpecialist(setSpecialist,'General physician')}} >General physician</button>
          <button className='btn_ad' onClick={()=>{handelSpecialist(setSpecialist,'Gynecologist')}}  >Gynecologist</button>
          <button className='btn_ad' onClick={()=>{handelSpecialist(setSpecialist,'Dermatologist')}}  >Dermatologist</button>
          <button className='btn_ad' onClick={()=>{handelSpecialist(setSpecialist,'Pediatricians')}}  >Pediatricians</button>
          <button className='btn_ad' onClick={()=>{handelSpecialist(setSpecialist,'Neurologist')}}  >Neurologist</button>
          <button className='btn_ad' onClick={()=>{handelSpecialist(setSpecialist,'Gastroenterologist')}}  >Gastroenterologist</button>
        </div>
        <div className='con2_ad'>
          {doctors.map((itm,index)=>{
            if(itm.speciality === specialist){
              return(  
                <div key={index} className='docBox_hom'> 
                <DoctorBox key={index} item={itm} />  
                </div>)
              } 
              else if(specialist === ''){
                return(  
                  <div key={index} className='docBox_hom'> 
                  <DoctorBox key={index} item={itm} />  
                  </div>)
              }  
              else{
                return '';
              }
          })}
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default AllDoctors;
