import { useContext } from 'react'
import './DoctorsList.css'
import { ItemContext } from '../Context'
import DoctorBox from '../components/DoctorBox';


function DoctorsList() {
  const {doctors} = useContext(ItemContext);
  return (
    <div className='full_dl'>
      <div className='title_dl'>DOCTORS LIST</div>
      <div className='list_dl'>
        {doctors.map((itm,index)=>{
          return(
            <div key={index} className='doc_dl'>
            <DoctorBox key={index} item={itm} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DoctorsList
