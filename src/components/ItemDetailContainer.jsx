
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {

    const [producto, setProducto] = useState ({})
    const { id } =useParams()
    useEffect(() => {

            fetch("../../productos.json")
            .then (res => res.json ())
            .then(productos => {setProducto(productos.find(producto => producto.id == id)) })
            .catch (error => console.error("error:", error))
            console.log(producto)

    }, [id]);
    
  
  return (
    <>
    <ItemDetail key = {producto.id} producto= {producto}  />
    </>
  )
}

export default ItemDetailContainer