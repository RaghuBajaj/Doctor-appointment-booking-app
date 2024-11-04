import { useContext, useEffect, useState } from 'react';
import './AllDoctors.css';
import Footer from './Footer'
import DoctorBox from './DoctorBox';
import { ItemContext } from '../Context';

function AllDoctors() {
  const {doctors,user} = useContext(ItemContext);
  const [specialist , setSpecialist] = useState('');
  const [activeSpec , setActiveSpec] = useState("");

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
          <button className={activeSpec === "1" ? "btn_ad active_btn_ad":"btn_ad b_"} onClick={()=>{handelSpecialist(setSpecialist,'General physician');setActiveSpec("1")}} >General physician</button>
          <button className={activeSpec === "2" ? "btn_ad active_btn_ad":"btn_ad b_"} onClick={()=>{handelSpecialist(setSpecialist,'Gynecologist');setActiveSpec("2")}}  >Gynecologist</button>
          <button className={activeSpec === "3" ? "btn_ad active_btn_ad":"btn_ad b_"} onClick={()=>{handelSpecialist(setSpecialist,'Dermatologist');setActiveSpec("3")}}  >Dermatologist</button>
          <button className={activeSpec === "4" ? "btn_ad active_btn_ad":"btn_ad b_"} onClick={()=>{handelSpecialist(setSpecialist,'Pediatricians');setActiveSpec("4")}}  >Pediatricians</button>
          <button className={activeSpec === "5" ? "btn_ad active_btn_ad":"btn_ad b_"} onClick={()=>{handelSpecialist(setSpecialist,'Neurologist');setActiveSpec("5")}}  >Neurologist</button>
          <button className={activeSpec === "6" ? "btn_ad active_btn_ad":"btn_ad b_"} onClick={()=>{handelSpecialist(setSpecialist,'Gastroenterologist');setActiveSpec("6")}}  >Gastroenterologist</button>
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
