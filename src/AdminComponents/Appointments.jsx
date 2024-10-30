import { useContext } from 'react';
import './Appointments.css';
import { ItemContext } from '../Context';
import patient_icon from './Backgroung Images/patient_icon.png';
import tick_icon from './Backgroung Images/tick_icon.png';
import cross from './Backgroung Images/cross.png';

function Appointments() {
  const {bookings,setBookings,doctors} = useContext(ItemContext);

  const handleCancle =(itm)=>{
    console.log(itm);
    setBookings((prev)=>{
      const reList = prev.filter((item)=> !(itm[1] === item[1] && itm[0].day === item[0].day && itm[0].time === item[0].time && itm[0].id === item[0].id));
      return reList;
    })
  }

  return (
    <div className='full_apo'>
      <div className='title_apo'>ALL APPOINTMENTS</div>
      <div className='list_apo'>
      {bookings.map((itm,index)=>{
          let doct = doctors.find((doc,index)=> doc._id === itm[0].id);
          return(
            <div key={index} className='lb_apo '>
              <img src={patient_icon} className='doct_img_apo c1_apo'  alt=''/>
              <p className='doct_name_apo c2_apo'>{itm[1]}</p>
              <img src={doct.image} className='doct_img_apo c3_apo' alt=''></img>
              <p className='doct_name_apo c4_apo'>{doct.name}</p>
              <p className='doct_name_apo c5_apo'>{itm[0].day} </p>
              <p className='doct_name_apo c5_apo'>| {itm[0].time}</p>
              {(itm[0].cancled === false)?(
                <div className="row_apo">
                <img src={tick_icon} className='t1_apo ' onClick={()=>{handleCancle(itm)}}/>
                <img src={cross} className='t2_apo' onClick={()=>{handleCancle(itm)}}/>
              </div>
                ):(
                  <div className="row_apo">
                  <p className='cancle_apo ' onClick={()=>{handleCancle(itm)}}>Cancled</p>
                  </div>
              )}
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Appointments
