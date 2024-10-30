import './Contact.css';
import upload_area from './Images/about_image.png';
import Footer from './Footer'

function Contact() {
  return (
    <div className='full_con'>
      <div className='head_div_con'>
        <p className='cu_con c_con'>CONTACT</p>
        <p className='cu_con u_con'>US</p>
      </div>
      <div className='contaner_con'>
        <img src={upload_area} className='img_con' alt=''></img>
        <div className='info_con'>
          <p className='title_con'>OUR OFFICE</p>
          <p className='p_con'>hayatganj chowk Tanda, Ambedkar nagar,U.P </p>
          <p className='p_con'>Tel:(+91)9430924039 Email:abcd1234@gmail.com</p>
          <p className='title_con'>CAREERS AT PRESCRIPTO</p>
          <p className='p_con'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, impedit.</p>
          <button className='btn_con'>Explore Jobs</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
