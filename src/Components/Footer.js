import React from 'react'
import logo from "../assets/Screenshot_669 1.png"
import { EmailIcon } from '@chakra-ui/icons'
import { Flex, IconButton } from '@chakra-ui/react'
import sclogo1 from "../assets/Path 1.png"
import sclogo2 from "../assets/Path 2.png"
import sclogo3 from "../assets/Path 3.png"
import "../App.css"
const Footer = () => {
    return (
        <footer>
            <div className='footer-logo'>
                <img src={logo} className='logos' />
            </div>
            <div>
                <h3 className='footer-head'>Contact Us</h3>
                <div>
                    <p>Lorem Ipsum Pvt Ltd.5/1, Magalton</p>
                    <p>Road, Phartosh Gate near YTM</p>
                    <p>Market, XYZ-343434</p>
                </div>
                <p>example2020@gmail.com</p>
                <p>(904) 443-0343</p>
            </div>
            <div>
                <h3 className='footer-head'>More</h3>
                <p>About Us</p>
                <p>Products</p>
                <p>Career</p>
                <p>Contact Us</p>
            </div>
            <div className='footer-end'>
                <div  className='socialicons'>
                    <h3 className='footer-head social-head'>Social Links</h3>

                    <Flex className='social-icon'>
                        <span className='icon-social-bg'>  <img src={sclogo1} /></span>
                        <span className='icon-social-bg'><img src={sclogo2} /></span>
                        <span className='icon-social-bg'><img src={sclogo3} /></span>

                    </Flex>
                </div>
                <p>© 2022 Food Truck Example</p>
            </div>
        </footer>
    )
}

export default Footer