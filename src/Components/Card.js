import React from 'react'
import "../App.css"
const Card = ({image, heading, dis }) => {
  return (
    <div className='artical-card'>
     
            <img src={image}/>
            <h1 className='footer-head artical-header'>{heading}</h1>
            <div>
            <p>PLorem Ipsum is simply dummy text of the</p>
            <p>printing and typesetting industry. Lorem</p>
             <p>Ipsum has been the industry's standard...</p>
            </div>
          
         <div className='card-more'>
            <span >Read More</span>
            </div>   
    </div>
  )
}

export default Card