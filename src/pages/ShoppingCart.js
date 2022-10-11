import { useParams } from 'react-router-dom'

export default function ShoppingCart() {
  
  let {id}= useParams();
  console.log(id)


  return (
    <>
      Cart
    </>
  )
}
