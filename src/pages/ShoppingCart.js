import { useParams } from 'react-router-dom'
import Layout from '../layout/Layout'

export default function ShoppingCart() {
  
  let {id}= useParams();
  console.log(id)


  return (
    <>
        <Layout>
            Cart
        </Layout>
    </>
  )
}
