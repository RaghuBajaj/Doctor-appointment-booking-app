import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AllDoctors from './components/AllDoctors';
import Login from './components/Login';
import Doctor from './components/Doctor';
import Profile from './components/Profile';
import MyAppointments from './components/MyAppointments';
// import Speciality from './components/Speciality';
 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/AllDoctors' element={<AllDoctors />}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
       
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Doctor' element={<Doctor/>}></Route>
        <Route path='/MyAppointments' element={<MyAppointments/>}></Route>
        {/* <Route path='/Speciality' element={<Speciality/>}></Route> */}
      </Routes>
      
    </div>
  );
}

export default App;
