import './Home.css';
import Footer from './Footer';
import doc5 from './Images/doc5.png';
import doc3 from './Images/doc3.png';
import doc4 from './Images/doc4.png';
import Pediatricians from './Images/Neurologist.png';
import Neurologist from './Images/menu_icon.png';
import General_physicion from './Images/Gastroenterologist.png';
import Gastroenterologist from './Images/dropdown_icon.png';
import { useContext, useEffect } from 'react';
import { ItemContext } from '../Context';
import DoctorBox from './DoctorBox';

function Home() {
  const { assets, doctors, navigate } = useContext(ItemContext);
  useEffect(()=>{},[]);
  return (
    <div className='full_hom'>

      <div className='box_hom'>
        <div className='box_p_hom boxP1'>
          <h1 className='box_h1_hom'>Book Appointment </h1>
          <h1 className='box_h1_hom'>With Trusted Doctors</h1>
          <p className=''>Simply browse through our extensive list of trusted doctors,schedule your appointment hassle-free.</p>
          <button className='btn_hom' onClick={()=>{navigate('./AllDoctors')}}>Book appointment <img src={assets.arrow_icon} className='btn_img_hom' alt=''/></button>
        </div>
        <div className='box_p_hom boxP2'>
          <img src={doc3} className='box1_img_hom' alt='' />
          <img src={doc5} className='box2_img_hom' alt='' />
          <img src={doc4} className='box3_img_hom' alt='' />
        </div>
      </div>

      <div className='sp_hom'>
        <h2 className='sp1_hom'>Find by Speciality</h2>
        <p className='sp2_hom'>Simply browse through our extensive list of trusted doctors.</p>
        <p className='sp2_hom'>schedule your appointment hassle-free</p>
        <div className='sp_imgBox_hom'>
          <div className='imgBox_hom' >
              <img src={Pediatricians} className='img1_sp_hom' alt=''></img>
              <p className='sp_p_hom'>Pediatricians</p>
          </div>
          <div className='imgBox_hom' >
              <img src={Neurologist} className='img1_sp_hom' alt=''></img>
              <p className='sp_p_hom'>Neurologist</p>
          </div>
          <div className='imgBox_hom' >
              <img src={General_physicion} className='img1_sp_hom' alt=''></img>
              <p className='sp_p_hom'>General physicion</p>
          </div>
          <div className='imgBox_hom' >
              <img src={Gastroenterologist} className='img1_sp_hom' alt=''></img>
              <p className='sp_p_hom'>Gastroenterologist</p>
          </div>
          
        </div>
      </div>

      <div className='sp_hom'>
        <h2 className='sp1_hom'>Top Doctors to Book</h2>
        <p className='sp2_hom'>Simply browse through our extensive list of trusted doctors.</p>
      </div>
      <div className='doc_hom'>
          {doctors.map((item,index)=>{
            return(
              <div key={index} className='docBox_hom'>
              <DoctorBox key={index} item={item}/>
              </div>
            )
          })}
      </div>

      <div className='box_hom marg_hom'>
        <div className='box_p_hom boxP1'>
          <h1 className='box_h1_hom'>Book Appointment </h1>
          <h1 className='box_h1_hom'>With 100+ Trusted Doctors</h1>
          <button className='btn_hom marg_hom' onClick={()=>{navigate('./Login')}}>Create account </button>
        </div>
        <img src={assets.appointment_img} className='box11_img_hom' alt='' />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
