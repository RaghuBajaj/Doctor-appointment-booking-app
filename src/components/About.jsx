import './About.css';
import about_image from './Images/about_image.png'
import Footer from './Footer'

function About() {
  return (
    <div className='full_abt'>

      <div className='title_div_abt t1_abt'>
        <p className='au_abt a1_abt'>ABOUT</p>
        <p className='au_abt a2_abt'>US</p>
      </div>
      <div className='contaner_abt'>
        <img src={about_image} className='img_abt' alt=''></img>
        <div className='info_abt'>
          <p className='p_info_abt'>Welcome to Prescripto Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate nemo incidunt alias consectetur asperiores quis placeat, maiores voluptatum esse, omnis commodi cupiditate minima libero ut laborum exercitationem autem recusandae id.</p>
          <p className='p_info_abt'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cupiditate id totam sunt sit cum molestiae labore eaque eos pariatur. Quos blanditiis doloremque ducimus porro eveniet obcaecati doloribus aliquid voluptatibus excepturi sit est, voluptatum et odit, debitis iste adipisci laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, blanditiis?</p>
          <p className='p_h_info_abt'>Our Vision</p>
          <p className='p_info_abt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, reiciendis! Quos, voluptatibus libero animi rerum tempore eum reprehenderit incidunt consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsam repellendus harum similique, debitis sequi! Aspernatur excepturi sunt a. Maxime!</p>
        </div>
      </div>

      <div className='title_div_abt t2_abt'>
        <p className='au_abt a1_abt'>WHY</p>
        <p className='au_abt a2_abt'>CHOOSE US</p>
      </div>

      <div className='wcu_abt'>
        <div className='box_wcu_abt'>
          <p className='p1_wcu_abt'>EFFICIENCY:</p>
          <p className='p2_wcu_abt'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='box_wcu_abt'>
          <p className='p1_wcu_abt'>CONVENIENCE:</p>
          <p className='p2_wcu_abt'>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='box_wcu_abt'>
          <p className='p1_wcu_abt'>PERSONALIZATION:</p>
          <p className='p2_wcu_abt'> recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default About
