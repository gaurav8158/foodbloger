import React from 'react'
import backshape from "../assets/Vector 1.png"
import upper from "../assets/Group 289.png"
import logo from "../assets/Screenshot_669 1.png"
import "../App.css"
const Main = () => {
    return (
        <div>
             <nav>
                <img src={logo}/>
                <span className='touch-btn'>Get In Touch</span>
             </nav>
             <div className='main-container'>
            
            <div className='main-left'>
                <h2>Discover the </h2>
                <h2 ><span className='best'>Best </span>
                    Food
                </h2>
                <h2>and Drinks</h2>

                <div><p>Naturally made Healthcare Products for the </p>
                    <p>better care & support of your body.</p>
                </div>
                <div className='explore'>
                    <span className='explore-btn'>Explore Now!</span>
                </div>
            </div>
            <div className='main-right'>
                <img className="backimg" src={backshape} />
                <img className='upperimg' src={upper} />
            </div>
           
        </div>
        </div>
       
    )
}

export default Main