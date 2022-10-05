import React, {useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useGetTShirtQuery} from '../../../features/tShirtAPI'
import './Carousel.css'

const Carousel = () => {

  let query = ''

  let data = []

  

  const {
    data: tShirt, 
    error,
    isLoading,
    isSuccess,
    isFailed,
  } = useGetTShirtQuery(query);

  if(isSuccess){
    data = tShirt.response
  }

  useEffect(()=>{
    
    console.log(data)
  },[isSuccess])


  function ImgCarousel(params) {
    return(
      <div className='asd'>
        <img src={params.photo} alt='nasi' style={{width:'auto', height:'200px', border: '1px solid black'}}/>
      </div>
    )
  }


  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };
  
  return (
    <div style={{border:'1px solid black', width:'70%', margin: 'auto'}}>
    <Slider {...settings} style={{width: '100%',height:'200px', margin:'50px auto', padding: '0 20px'}}>
      {data.map(ImgCarousel)}
    </Slider>
    </div>
  );
}

export default Carousel;


