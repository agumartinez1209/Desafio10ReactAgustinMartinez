
import { useState, useEffect } from 'react'
<<<<<<< HEAD
import { useParams } from 'react-router-dom'
=======
>>>>>>> 0be3c50ae0c2723522ed2c5a4a17005d5bd43e90
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState ({})
<<<<<<< HEAD
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
=======
    useEffect(() => {

        setTimeout(() =>{
            fetch("https://rickandmortyapi.com/api/character")
            .then (res => res.json ())
            .then (res => setItemDetail(res.results))  
            .catch (error => console.error("error:", error))
        },2000);



      

    }, [])
    
    
    console.log(itemDetail)
  return (
    <>
    <ItemDetail id= {itemDetail.id} name = {itemDetail.name} species = {itemDetail.species}  status = {itemDetail.status} />
>>>>>>> 0be3c50ae0c2723522ed2c5a4a17005d5bd43e90
    </>
  )
}

export default ItemDetailContainer