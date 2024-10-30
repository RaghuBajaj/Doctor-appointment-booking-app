import'./App1.css'; 
import Navbar from './Navbar'; 
import Dashboard from './Dashboard';
import AddDoctors from './AddDoctors';
import Appointmets from './Appointments';
import DoctorsList from './DoctorsList';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';

function App1() {
  return (
    <div className='full_App1'>
      <Navbar />
      <div className='parts_App1'>

        <div className='nav_App1'>
          <Nav/>
        </div>
        <div className='rout_App1'>
        <Routes>
          <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/Appointments' element={<Appointmets></Appointmets>}></Route>
          <Route path='/AddDoctors' element={<AddDoctors></AddDoctors>}></Route>
          <Route path='/DoctorsList' element={<DoctorsList></DoctorsList>}></Route>
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default App1
