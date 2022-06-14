
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState ({})
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
    </>
  )
}

export default ItemDetailContainer