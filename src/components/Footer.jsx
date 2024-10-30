import { useContext } from 'react';
import { ItemContext } from '../Context';
import './Footer.css';

function Footer() {
    const {assets} = useContext(ItemContext);
  return (
    <div className='full_foo'>
        <div className='p_foo p1'>
            <img src={assets.logo} className='img_foo'></img>
            <p className='pa_foo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fuga cumque repudiandae, maiores laudantium voluptatem inventore. Enim nisi illo facere consequatur distinctio totam perspiciatis culpa molestias inventore molestiae. Alias, earum aliquid? Nemo, incidunt animi?</p>
        </div>
        <div className='p_foo p2'>
            <h3 className='h3_foo'>COMPANY</h3>
            <p className='pa_foo'>Home</p>
            <p className='pa_foo'>About us</p>
            <p className='pa_foo'>Delivery</p>
            <p className='pa_foo'>Privacy policy</p>
        </div>
        <div className='p_foo p3'>
            <h3 className='h3_foo'>GET IN TOUCH</h3>
            <p className='pa_foo'>+1-222-333-444</p>
            <p className='pa_foo'>abcd1234@gmail.com</p> 
        </div>
      
    </div>
  )
}

export default Footer
