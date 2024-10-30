import "./MyAppointments.css";
import { useContext } from "react";
import { ItemContext } from "../Context";

function MyAppointments() {
  const { allAppointments, doctors, setAllAppointments ,bookings,setBookings} = useContext(ItemContext);
  const cancleAppointment = (item)=>{
    
    setBookings(()=>{
      const updateB =  bookings.map((itm,index)=>{
        console.log('itemsss',itm);
        if(itm[0].id === item.id && itm[0].day === item.day && itm[0].time === item.time){
          itm[0].cancled = true;
          return itm;
          console.log('itm',itm);
        }
        return itm;
      })
      return( updateB);
    });
    setAllAppointments(()=>{
      const updateA =  allAppointments.filter((itm)=> !(itm.id === item.id && itm.day === item.day && itm.time === item.time))
      return( updateA);
    });
  }
  return (
    <div className="full_myA">
      <div className="title_myA">MY APPOINTMENTS</div>
      <div className="show_apmt_myA">
        {allAppointments.map((item, index) => {
          const doc = doctors.filter((itm) => {
            if (itm._id === item.id) {
              return itm;
            }
          });
          return (
            <div key={index} className="item_myA">
              <div className="doc_myA">
                <div className="image_myA">
                  <img src={doc[0].image} className="img_doc_myA" alt="" />
                </div>
                <div className="info_myA">
                  <p className="name_myA nam1_myA">{doc[0].name}</p>
                  <p className="daytime_myA dt2_myA">{doc[0].speciality}</p>
                  <p className="name_myA nam2_myA">Address:</p>
                  <p className="daytime_myA dt1_myA">{doc[0].address.line1}</p>
                  <p className="daytime_myA dt1_myA">{doc[0].address.line2}</p>
                  <p className="name_myA nam2_myA">Date and Time: 
                  <span className="daytime_myA dt2_myA"> {item.day} | {item.time}</span></p>
                </div>
              </div>
              <div className="btn_opt_myA">
                <button className="btn_myA bt2_myA">Pay Now</button>
                <button className="btn_myA bt1_myA" onClick={()=>{cancleAppointment(item)}}>Cancle</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyAppointments;
