import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useReadOneQuery , useEditProductMutation } from '../features/actions/product';

export default function EditProduct() {

    const {id} = useParams()
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const [editProduct] = useEditProductMutation();

    const { data: product , isSuccess} = useReadOneQuery(id)

    useEffect(()=>{
        if(isSuccess){
            setName(product.response.name)
            setPrice(product.response.price)
            setStock(product.response.stock)
        }
    },[isSuccess])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(name.length !== 0 ){
            setName(product.response.name)
        }
        if(price.length !== 0 ){
            setPrice(product.response.price)
        }
        if(stock.length !== 0 ){
            setStock(product.response.stock)
        }

        const newData = {
            id: id,
            name: name,
            price: price,
            stock: stock
        }
        editProduct(newData)

        e.target.reset()
    }

 
    const  handleChange = (e) => {
       if(isSuccess){
            switch (e.target.id) {
              case 'name':
                if(e.target.value === ""){
                    setName(product.response.name)
                } else {
                    setName(e.target.value)
                }
                break;
              case 'price':
                if(e.target.value === ""){
                    setPrice(product.response.price)
                } else {
                    setPrice(e.target.value)
                }
                break;
              case 'stock':
                if(e.target.value === ""){
                    setStock(product.response.stock)
                } else {
                    setStock(e.target.value)
                }
                break;
              default:
                break;
            }

        }
    }


    return (
        <>
            <h2>EditProduct</h2>
            <form onSubmit={handleSubmit}>
                <label >Nombre</label>
                <input onChange={handleChange} id="name" type="text" placeholder={name} />
                <label >Precio</label>
                <input onChange={handleChange} id="price" type="number" placeholder={price}  />
                <label >Stock</label>
                <input onChange={handleChange} id="stock" type="number" placeholder={stock} />
                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}
