import "./Nav.css";
import add_icon from "./Backgroung Images/add_icon.png";
import doctors_list from "./Backgroung Images/doctors_list.png";
import doctor_icon from "./Backgroung Images/doctor_icon.png";
import { useContext, useState } from "react";
import { ItemContext } from "../Context";

function Nav() {
  const {navigate} = useContext(ItemContext);
  const [activeId,setActiveId] = useState("");
  return (
    <div className="full_navb">
      <div className={activeId === "1" ? "li_navb a_navb":"li_navb"} id={"1"} onClick={(e)=>{setActiveId(e.target.id);navigate("/Dashboard")}}>
        <div className="sec_navb">
          <img src={doctor_icon} className="img_navb" alt=""/>
          <p className="navlink_navb">Dashboard</p>
        </div>
        <p className={activeId === "1" ? "blueLine_navb activebL_navb":"blueLine_navb "}></p>
      </div>
      <div className={activeId === "2" ? "li_navb a_navb":"li_navb"} id={"2"} onClick={(e)=>{setActiveId(e.target.id);navigate("/Appointments")}}>
        <div className="sec_navb">
          <img src={doctor_icon} className="img_navb" alt=""/>
          <p className="navlink_navb">Appointments</p>
        </div>
        <p className={activeId === "2" ? "blueLine_navb activebL_navb":"blueLine_navb "}></p>
      </div>
      <div className={activeId === "3" ? "li_navb a_navb":"li_navb"} id={"3"} onClick={(e)=>{setActiveId(e.target.id);navigate("/AddDoctors")}}>
        <div className="sec_navb">
          <img src={add_icon} className="img_navb" alt=""/>
          <p className="navlink_navb">Add Doctors</p>
        </div>
        <p className={activeId === "3" ? "blueLine_navb activebL_navb":"blueLine_navb "}></p>
      </div>
      <div className={activeId === "4" ? "li_navb a_navb" : "li_navb"} id={"4"} onClick={(e)=>{setActiveId(e.target.id);navigate("/DoctorsList")}}>
        <div className="sec_navb">
          <img src={doctors_list} className="img_navb" alt=""/>
          <p className="navlink_navb">Doctors List</p>
        </div>
        <p className={activeId === "4" ? "blueLine_navb activebL_navb":"blueLine_navb "}></p>
      </div>
    </div>
  );
}

export default Nav;
