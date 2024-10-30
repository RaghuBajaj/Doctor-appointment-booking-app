import { useState, useContext, useEffect } from "react";
import "./Doctor.css";
import DoctorBox from "./DoctorBox";
import { ItemContext } from "../Context";

function Doctor() {
  const { doctor, doctors, setAllAppointments,navigate,user ,Bookings,setBookings} = useContext(ItemContext);
  
  const [appointment, setAppointment] = useState({
    id: doctor._id,
    day: '',
    time:'',
    cancled:false,
    done:false
  });
  // console.log(appointment);


  const handleBookAppointment = ()=>{
    if(appointment.id !== '' && appointment.day !== '' && appointment.time !== ''){
      setAllAppointments((prev)=>{
        return [...prev,appointment]});
      setBookings((prev)=>{
        return [...prev,[appointment,user.name,user.email]]});
      setAppointment({...appointment,day:'',time:''});  
      navigate('./MyAppointments');
    }
  }

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <div className="full_docA">
      <div className="cont_docA">
        <img src={doctor.image} className="img_docA" alt=""></img>
        <div className="about_docA">
          <h3>{doctor.name}</h3>
          <div className="degAbt_docA">
            <p>{doctor.degree}</p>
            <p>{doctor.speciality}</p>
            <span className="exp_docA">{doctor.experience}</span>
          </div>
          <p className="about1_docA">About :</p>
          <p className="abt_docA">{doctor.about}</p>
          <div className="apFee_docA">
            <p>Appointment Fees : </p>
            <p className="p1_docA"> ${doctor.fees}</p>
          </div>
        </div>
      </div>

      <div className="cont_docA con1_docA">
        <div className="about_docA">
          <h3 className="about1_docA">Booking slots</h3>
          <div className="days_docA">

            {/* {
            ['WED 4','THU 5','FRI 6','SAT 7','SUN 8','MON 9','TUE 10'].map((daydate)=>{
              <div 
              key={daydate}
              className="day_docA d_day_docA" 
              onClick={()=>{
                setAppointment({...appointment,day:daydate })
                  }
                } >
                  <p className="dd_docA">{daydate.split(' ')[0]}</p>
                  <p className="dd_docA">{daydate.split(' ')[1]}</p>
                </div>
            })} */}

            <div className="day_docA d_day_docA" 
            onClick={()=>{
              setAppointment({...appointment,day:'WED 4' })
              }}
            >
              <p className="dd_docA">WED</p>
              <p className="dd_docA">4</p>
            </div>
            <div className="day_docA d_day_docA" 
            onClick={()=>{setAppointment({...appointment,day:'THU 5'})}}
            >
              <p className="dd_docA">THU</p>
              <p className="dd_docA">5</p>
            </div>
            <div className="day_docA d_day_docA" 
            onClick={()=>{setAppointment({...appointment,day:'FRI 6'})}}
            >
              <p className="dd_docA">FRI</p>
              <p className="dd_docA">6</p>
            </div>
            <div className="day_docA d_day_docA" 
            onClick={()=>{setAppointment({...appointment,day:'SAT 7'})}}
            >
              <p className="dd_docA">SAT</p>
              <p className="dd_docA">7</p>
            </div>
            <div className="day_docA d_day_docA" 
            onClick={()=>{setAppointment({...appointment,day:'SUN 8'})}}
            >
              <p className="dd_docA">SUN</p>
              <p className="dd_docA">8</p>
            </div>
            <div className="day_docA d_day_docA" 
            onClick={()=>{setAppointment({...appointment,day:'MON 9'})}}
            >
              <p className="dd_docA">MON</p>
              <p className="dd_docA">9</p>
            </div>
            <div className="day_docA d_day_docA" 
            onClick={()=>{setAppointment({...appointment,day:'TUE 10'})}}
            >
              <p className="dd_docA">TUE</p>
              <p className="dd_docA">10</p>
            </div> 

          </div>
          <div className="days_docA">

             <p className="day_docA d_tim_docA" 
            onClick={()=>{setAppointment({...appointment,time:'05:00 pm'})}}
            > 05:00 pm</p>
            <p className="day_docA d_tim_docA" 
            onClick={()=>{setAppointment({...appointment,time:'06:00 pm'})}}
            > 06:00 pm</p>
            <p className="day_docA d_tim_docA" 
            onClick={()=>{setAppointment({...appointment,time:'06:30 pm'})}}
            > 06:30 pm</p>
            <p className="day_docA d_tim_docA" 
            onClick={()=>{setAppointment({...appointment,time:'07:00 pm'})}}
            > 07:00 pm</p>
            <p className="day_docA d_tim_docA" 
            onClick={()=>{setAppointment({...appointment,time:'07:30 pm'})}}
            > 07:30 pm</p>
            <p className="day_docA d_tim_docA" 
            onClick={()=>{setAppointment({...appointment,time:'08:00 pm'})}}
            > 08:00 pm</p>
            <p className="day_docA d_tim_docA" 
            onClick={()=>{setAppointment({...appointment,time:'08:30 pm'})}}
            > 08:30 pm</p> 

          </div>
          <button className="btn_docA" onClick={handleBookAppointment} >Book appointment</button>
        </div>
      </div>

      <div className="sp_hom">
        <h3 className="sp1_hom">Related Doctors</h3>
        <p className="sp2_hom">Simply browse through our extensive list of trusted doctors.</p>
      </div>
      <div className='doc_hom'>
        {doctors.map((itm, index) => {
          if (itm.speciality === doctor.speciality  &&  itm !== doctor) {
            return (
              <div key={index} className="docBox_hom">
                <DoctorBox  item={itm} />
              </div>
            );
          }
          return '';
        })}
      </div>
    </div>
  );
}

export default Doctor;
