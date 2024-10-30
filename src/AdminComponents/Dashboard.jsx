import "./Dashboard.css";
import doctors_icon from "./Backgroung Images/doctors_icon.png";
import patients_icon from "./Backgroung Images/patients_icon.png";
import upload_area from "./Backgroung Images/upload_area.png";
import latest_booking from "./Backgroung Images/latest_booking.png";
import tick_icon from "./Backgroung Images/tick_icon.png";
import cross from "./Backgroung Images/cross.png";
import { useContext } from "react";
import { ItemContext } from "../Context";

function Dashboard() {
  const { doctors, allUsers, bookings, setBookings } = useContext(ItemContext);
  const extra = bookings.length - 5;
  let doctorsCount = 0;
  doctors.map((itm, index) => {
    return (doctorsCount = index + 1);
  });
  let patientsCount = 0;
  allUsers.map((itm, index) => {
    return (patientsCount = index + 1);
  });
  let appointmentsCount = 0;
  allUsers.map((itm, index) => {
    itm.userAppointments.map((apmt, idx) => {
      return (appointmentsCount += 1);
    });
  });
  const handleCancle =(itm)=>{
    console.log(itm);
    setBookings((prev)=>{
      const reList = prev.filter((item)=> !(itm[1] === item[1] && itm[0].day === item[0].day && itm[0].time === item[0].time && itm[0].id === item[0].id));
      return reList;
    })
  }
  return (
    <div className="full_dash">
      <div className="score_dash">
        <div className="se_scor_dash">
          <img src={doctors_icon} className="img_dash" alt=""></img>
          <div className="part_scor_daash">
            <p className="count_dash">{doctorsCount}</p>
            <p className="title_dash">Doctors</p>
          </div>
        </div>
        <div className="se_scor_dash">
          <img src={upload_area} className="img_dash" alt=""></img>
          <div className="part_scor_daash">
            <p className="count_dash">{appointmentsCount}</p>
            <p className="title_dash">Appointments</p>
          </div>
        </div>
        <div className="se_scor_dash">
          <img src={patients_icon} className="img_dash" alt=""></img>
          <div className="part_scor_daash">
            <p className="count_dash">{patientsCount}</p>
            <p className="title_dash">Patients</p>
          </div>
        </div>
      </div>

      <div className="apmt_dash">
        <div className="lb_dash lb1_dash">
          <img src={latest_booking} className="img_lb_dash" alt=""></img>
          <p className="p_lb_dash">Latest Bookings</p>
        </div>

        {bookings.map((itm, index) => {
          let doct = doctors.find((doc, index) => doc._id === itm[0].id);
          if (index >= extra) {
            return (
              <div key={index} className="lb_dash lb2_dash">
                <img src={doct.image} className="doct_img_dash" alt=""></img>
                <div className="doct_info_dash">
                  <p className="doct_name_dash n1_dash">{doct.name}</p>
                  <p className="doct_name_dash n2_dash">
                    Booking on {itm[0].day} | {itm[0].time}
                  </p>
                </div>
                {(itm[0].cancled === false)?(
                  <div className="row_dash">
                    <img src={tick_icon} className="t1_dash " onClick={()=>{handleCancle(itm)}} alt=""/>
                    <img src={cross} className="t2_dash " onClick={()=>{handleCancle(itm)}} alt=""></img>
                  </div>
                ):(
                  <div className="row_dash">
                    <p className='cancle_dash ' onClick={()=>{handleCancle(itm)}}>Cancled</p>
                  </div>
                  
                )}
                
              </div>
            );
          }
          return ;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
