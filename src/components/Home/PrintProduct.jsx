import React from 'react'
import './Home.css'

export default function PrintProduct(props) {

    let hoodie = props.data


  return (
    <div className={props.className}>
        <img className='Img' src={hoodie.photo} />
        <div className='container-p'>
            <p className='p'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriesypesetting, remaining.
            </p>
        </div>
    </div>
  )
}
