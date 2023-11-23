import React, { useRef, useState } from 'react'
import img1 from "../assets/grilled-tomatoes-1-846x846 1.png"
import img2 from "../assets/meal-prep-ideas-846x846 1.png"
import img3 from "../assets/meal-prep-ideas-846x846 1 (1).png"
import img4 from "../assets/img4.png"
import img5 from "../assets/meal-prep-ideas-846x846 1 (2).png"
import img6 from "../assets/meal-prep-ideas-846x846 1 (3).png"
import Card from './Card'
import "../App.css"
import Slider from 'react-slick';
import { Box, Button, Flex } from '@chakra-ui/react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const Articles = () => {

const[page ,setPage] = useState(1);
  const sliderRef = useRef(null);
  const images = [
   {head:"Grilled  Tomatoes at Home",
  image:img1
  },
  {head:"Snacks for Travel",
  image:img2
  },
  {head:"Post-Workout Recipes",
  image:img3
  },
  {head:"How To Grill Corn",
  image:img4
  },
  {head:"Crunchwrap Supreme",
  image:img5
  },
  {head:"Broccoli Cheese Soup",
  image:img6
  }
  ];

  const itemsPerPage = 3;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: itemsPerPage,
    slidesToScroll: itemsPerPage,
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
    setPage(1)
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
    setPage(2);
  };

  return (
    <div className="artical-component">
       <h1 className='footer-head'>Latest Articles</h1>
     
      <Slider className='slider' ref={sliderRef} {...settings}>
     
        {images.map((data, index) => (
             <Card key={index} image={data.image} heading={data.head} />
        ))}
      
      </Slider>
      <Flex justifyContent="center" alignItems="center" mt={4}>
        <Button onClick={handlePrev} mr={2}>
        <FaAngleLeft />
        </Button>
        <span >{page}/2</span>
        <Button ml={2} onClick={handleNext}><FaAngleRight/></Button>
      </Flex>
 </div>
  );

}

export default Articles
