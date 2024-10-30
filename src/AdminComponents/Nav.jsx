import { NavLink } from "react-router-dom";
import "./Nav.css";
import add_icon from "./Backgroung Images/add_icon.png";
import doctors_list from "./Backgroung Images/doctors_list.png";
import doctor_icon from "./Backgroung Images/doctor_icon.png";

function Nav() {
  return (
    <div className="full_navb">
      <NavLink to="/Dashboard" className="link_navb">
        <div className="sec_navb">
          <img src={doctor_icon} className="img_navb" alt=""></img>
          <p className="navlink_navb">Dashboard</p>
        </div>
        <p className="blueLine_navb"></p>
      </NavLink>
      <NavLink to="/Appointments" className="link_navb">
        <div className="sec_navb">
          <img src={doctor_icon} className="img_navb" alt=""></img>
          <p className="navlink_navb">Appointments</p>
        </div>
        <p className="blueLine_navb"></p>
      </NavLink>
      <NavLink to="/AddDoctors" className="link_navb">
        <div className="sec_navb">
          <img src={add_icon} className="img_navb" alt=""></img>
          <p className="navlink_navb">Add Doctors</p>
        </div>
        <p className="blueLine_navb"></p>
      </NavLink>
      <NavLink to="/DoctorsList" className="link_navb">
        <div className="sec_navb">
          <img src={doctors_list} className="img_navb" alt=""></img>
          <p className="navlink_navb">Doctors List</p>
        </div>
        <p className="blueLine_navb"></p>
      </NavLink>
    </div>
  );
}

export default Nav;
