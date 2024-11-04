import { useState, useContext, useEffect } from "react";
import "./Doctor.css";
import DoctorBox from "./DoctorBox";
import { ItemContext } from "../Context";

function Doctor() {
  const { doctor, doctors, setAllAppointments,navigate,user ,Bookings,setBookings} = useContext(ItemContext);
  const [active,setActive] = useState("");
  const [activeTime,setActiveTime] = useState("");
  const [appointment, setAppointment] = useState({
    id: doctor._id,
    day: '',
    time:'',
    cancled:false,
    done:false
  });
  console.log(active);

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

            <div className={active === "1" ? "day_docA d_day_docA active_docA" : "day_docA d_day_docA "} id={"1"}
            onClick={(e)=>{
              setAppointment({...appointment,day:'WED 4' });
              setActive(e.target.id);
              }}
            >
              Wed<br/>&nbsp; &nbsp;4
            </div>
            <div className={active === "2" ? "day_docA d_day_docA active_docA" : "day_docA d_day_docA "} id={"2"} 
            onClick={(e)=>{
              setAppointment({...appointment,day:'THU 5'});
              setActive(e.target.id);}}
            >
             Thu<br/>&nbsp;&nbsp;5
            </div>
            <div className={active === "3" ? "day_docA d_day_docA active_docA" : "day_docA d_day_docA "} id={"3"} 
            onClick={(e)=>{
              setAppointment({...appointment,day:'FRI 6'});
              setActive(e.target.id);}}
            >
             Fri<br/>&nbsp;6
            </div>
            <div className={active === "4" ? "day_docA d_day_docA active_docA" : "day_docA d_day_docA "} id={"4"} 
            onClick={(e)=>{
              setAppointment({...appointment,day:'SAT 7'});
              setActive(e.target.id);}}
            >
              Sat<br/>&nbsp;&nbsp;7
            </div>
            <div className={active === "5" ? "day_docA d_day_docA active_docA" : "day_docA d_day_docA "} id={"5"} 
            onClick={(e)=>{
              setAppointment({...appointment,day:'SUN 8'});
              setActive(e.target.id);}}
            >
              Sun<br/>&nbsp;&nbsp;8
            </div>
            <div className={active === "6" ? "day_docA d_day_docA active_docA" : "day_docA d_day_docA "} id={"6"} 
            onClick={(e)=>{
              setAppointment({...appointment,day:'MON 9'});
              setActive(e.target.id);}}
            >
              Mon<br/>&nbsp; &nbsp;9
            </div>
            <div className={active === "7" ? "day_docA d_day_docA active_docA" : "day_docA d_day_docA "} id={"7"} 
            onClick={(e)=>{
              setAppointment({...appointment,day:'TUE 10'});
              setActive(e.target.id);}}
            >
              Tue<br/>&nbsp;10
            </div> 

          </div>
          <div className="days_docA">

             <p className={activeTime === "01" ? "day_docA d_tim_docA active_docA":"day_docA d_tim_docA"} 
            onClick={(e)=>{setAppointment({...appointment,time:'05:00 pm'});setActiveTime(e.target.id)}} id={"01"}
            > 05:00 pm</p>
            <p className={activeTime === "02" ? "day_docA d_tim_docA active_docA":"day_docA d_tim_docA"} 
            onClick={(e)=>{setAppointment({...appointment,time:'06:00 pm'});setActiveTime(e.target.id)}} id={"02"}
            > 06:00 pm</p>
            <p className={activeTime === "03" ? "day_docA d_tim_docA active_docA":"day_docA d_tim_docA"} 
            onClick={(e)=>{setAppointment({...appointment,time:'06:30 pm'});setActiveTime(e.target.id)}} id={"03"}
            > 06:30 pm</p>
            <p className={activeTime === "04" ? "day_docA d_tim_docA active_docA":"day_docA d_tim_docA"}
            onClick={(e)=>{setAppointment({...appointment,time:'07:00 pm'});setActiveTime(e.target.id)}} id={"04"}
            > 07:00 pm</p>
            <p className={activeTime === "05" ? "day_docA d_tim_docA active_docA":"day_docA d_tim_docA"} 
            onClick={(e)=>{setAppointment({...appointment,time:'07:30 pm'});setActiveTime(e.target.id)}} id={"05"}
            > 07:30 pm</p>
            <p className={activeTime === "06" ? "day_docA d_tim_docA active_docA":"day_docA d_tim_docA"} 
            onClick={(e)=>{setAppointment({...appointment,time:'08:00 pm'});setActiveTime(e.target.id)}} id={"06"}
            > 08:00 pm</p>
            <p className={activeTime === "07" ? "day_docA d_tim_docA active_docA":"day_docA d_tim_docA"} 
            onClick={(e)=>{setAppointment({...appointment,time:'08:30 pm'});setActiveTime(e.target.id)}} id={"07"}
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
