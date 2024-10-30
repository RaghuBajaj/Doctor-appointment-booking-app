import { createContext, useEffect, useState } from "react";
import { assets, specialityData, doctors } from "./components/assets";
import { useNavigate } from "react-router-dom";

export const ItemContext = createContext({});

const ItemContextProvider = (props) => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});
  const [allAppointments, setAllAppointments] = useState([]);
  const [doctor, setDoctor] = useState({});
  const navigate = useNavigate();
  
  const [bookings,setBookings] = useState([]); 

  // console.log('allUsers',allUsers);
  // console.log('booking:', bookings);

  const UpdateAll = () => {
    if(allUsers.length > 0){
      setAllUsers((prevStat) => {
        let updated = prevStat.map((account)=>{
          if(account && Object.keys(account).length > 0){
            if(account.email === user.email && account.password === user.password){
              if(account.userAppointments !== allAppointments){
                return { ...account, userAppointments : allAppointments };
              }
                return account;
            }
              return account;
          }
            return account;
        });
        return updated;
      });
    }
  };

  const handleAccountUpdate =()=>{
    setAllUsers((prev)=>{
      const update = prev.map((itm)=>{
        if(itm.name === user.name){
          return user;
        }
        return itm;
      })
      return update;
    })
  }

  useEffect(() => {
    const allUsers_ = JSON.parse(localStorage.getItem("allUsers")) || [];
    const user_ = JSON.parse(localStorage.getItem("user")) || {};
    const MyAppointments_ = JSON.parse(localStorage.getItem("MyAppointments")) || [];
    const bookings_ = JSON.parse(localStorage.getItem("bookings")) || [];
    setAllUsers(allUsers_);
    setUser(user_);
    setAllAppointments(MyAppointments_);
    setBookings(bookings_);
  }, []); 

  useEffect(()=>{
    if( allUsers.length > 0){
      localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }
  },[allUsers])
  useEffect(()=>{
    if( user && Object.keys(user).length > 0 ){
      localStorage.setItem("user", JSON.stringify(user));
    }
  },[ user])
  useEffect(() => {
    if( allAppointments.length > 0 ){
      localStorage.setItem("MyAppointments", JSON.stringify(allAppointments));
    }
  }, [ allAppointments]);
  useEffect(() => {
    if( bookings.length > 0 ){
      localStorage.setItem("bookings", JSON.stringify(bookings));
    }
  }, [ bookings]);

  useEffect(()=>{
    UpdateAll();
  },[allAppointments]);

  useEffect(()=>{
    handleAccountUpdate();
  },[user]);

  const value = {
    allUsers,
    setAllUsers,
    user,
    setUser,
    assets,
    specialityData,
    doctors,
    doctor,
    setDoctor,
    navigate,
    allAppointments,
    setAllAppointments,
    bookings,
    setBookings
  };

  return (
    <ItemContext.Provider value={value}>{props.children}</ItemContext.Provider>
  );
};
export default ItemContextProvider;
