
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState ({})
    const { id } =useParams()
    useEffect(() => {

            fetch("../../productos.json")
            .then (res => res.json ())
            .then(productos => {setItemDetail(productos.find(producto => producto.id == id)) })
            .catch (error => console.error("error:", error))
            console.log(itemDetail)

    }, [id]);
    
  
  return (
    <>
    <ItemDetail id = {itemDetail.id} texto = {itemDetail.texto} categoria = {itemDetail.categoria}  precio = {itemDetail.precio} imagen = {itemDetail.imagen} />
    </>
  )
}

export default ItemDetailContainer