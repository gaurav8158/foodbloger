import React from 'react'
import "../App.css"
import about from "../assets/girl (lp).png"
const About = () => {
  return (
    <div className='about-container'>
         <div className='about-left'>
          <img src={about}/>  
            </div>
        <div className='about-right'>
            <h3>About Us</h3>
           <div>
           <p>Lorem Ipsum is simply dummy text of the printing and</p> 
            <p>typesetting industry. Lorem Ipsum has been the industry's</p> 
            <p>standard dummy text ever since the 1500s, when an unknown</p> 
            <p>printer took a galley of type and scrambled it to make a type</p> 
            <p>specimen book. t has survived not only five centuries.</p>
           </div>
           <div className='exbtn'>
           <span className='explore-btn '>Read More</span>
           </div>
      
        </div>
    </div>
  )
}

export default About