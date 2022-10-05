import React from 'react'
import {useGetTShirtQuery} from '../../features/tShirtAPI'
import { RotatingLines } from  'react-loader-spinner'



export default function ProductsStore() {

  let query = ''

  const {
    data: tShirt, 
    error,
    isLoading,
    isSuccess,
    isFailed,
  } = useGetTShirtQuery(query);
  

  return (
    <>
      {isLoading === true ? <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/> : <div>aaa</div>}
      
    </>
  )
}
