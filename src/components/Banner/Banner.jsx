import React from "react";
import './Banner.css'

export default function Banner(props){
    let title = props.title
    let subtitle = props.subtitle
    let background = props.background

    return (
    <div className='homeBanner'>
        <img className='bannerBackground' src={background} alt="banner"/>
        <div className='bannerText'>
            <h2 className='bannerTitle'>{title}</h2>
            <p className='bannerSubtitle'>{subtitle}</p>
        </div>
    </div>
    )
}