import { useContext, useEffect } from 'react';
import './DoctorBox.css';
import { ItemContext } from '../Context';

function DoctorBox({item}) {
  const {setDoctor,navigate,user} = useContext(ItemContext);

  const handleDoctor =()=>{
    if(user && Object.keys(user).length>0){
      setDoctor(item);
      navigate('./Doctor');
    }
    else{
      alert('Please login first.')
    }
  }

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <div className='full_itm' onClick={handleDoctor}>
        <div className='imgDiv_itm'>
            <img src={item.image} className='img_itm' alt=''/>
        </div>
        <p className='p1_itm com_itm'><p className='dot_itm'>&#11044;</p> Available</p>
        <h4 className='h4_itm com_itm'>{item.name}</h4>
        <p className='p_itm com_itm'>{item.speciality}</p>
    </div>
  )
}

export default DoctorBox
