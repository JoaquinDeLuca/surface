import React from 'react'
import './Home.css'

export default function PrintProduct(props) {

    let hoodie = props.data


  return (
    <div className={props.className}>
        <img className='Img' src={hoodie.photo} />
        <div className='container-p'>
            <p className='p'>Realizadas en Frisa algodón 50% y 50% poliéster, no es 100 % algodón, esto evita que encojan. Los Buzos y camperas tienen puños y cintura en Rib (Elástico). Terminación en capuchas: vienen con forrería en jersey en color a elección o corderito.
            </p>
        </div>
    </div>
  )
}
