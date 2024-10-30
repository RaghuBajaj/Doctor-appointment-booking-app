import { useContext } from 'react';
import './Speciality.css';
import { ItemContext } from '../Context';
// import Pediatricians from './Images/Neurologist.png';
// import Neurologist from './Images/menu_icon.png';
// import General_physicion from './Images/Gastroenterologist.png';
// import Gastroenterologist from './Images/dropdown_icon.png';

function Speciality() {
  const {speciality} = useContext(ItemContext);
  return (
    <div className='full_spec'>
        <div className='part1_spec'>
            <img src={speciality} className='img_spec' alt=''/>
        </div>
        <div className='part2_spec'></div>
      
    </div>
  )
}

export default Speciality
