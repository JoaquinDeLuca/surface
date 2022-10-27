import React, {useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useGetTShirtQuery} from '../../../features/actions/tShirtAPI'
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


  function ImgCarousel(params) {
    return(
      <div className='carousel-imgContainer'>
        <img className='carousel-img' src={params.photo} alt='productoDestacado'/>
      </div>
    )
  }


  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
  };
  
  return (
    <div className='carouselContainer'>
    <Slider {...settings} style={{width: '100%',height:'100%', margin:'50px auto', padding: '0 20px'}}>
      {data.map(ImgCarousel)}
    </Slider>
    </div>
  );
}

export default Carousel;


