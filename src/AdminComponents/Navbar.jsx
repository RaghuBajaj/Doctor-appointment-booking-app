import './Navbar.css';
import admin_logo from './Backgroung Images/admin_logo.png'

function Navbar() {
  return (
    <div className='full_nbar'>
      <div className='logo_nbar'>
        <img src={admin_logo} className='img_nbar' alt=''></img>
        <p className='admin_nbar'>Admin</p>
      </div>
      <div className='logout_nbar'>Logout</div>
    </div>
  )
}
export default Navbar
