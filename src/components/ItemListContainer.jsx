import { useEffect, useState } from "react";
import ItemList from "./ItemList";


function ItemListContainer ({categoria, onAdd }) {
 
 
  const[productos, setProductos] = useState([]) 

  useEffect( () => {
    setTimeout(()=>{
      fetch("../../productos.json")
        .then (res => res.json ())
        .then (data => {
          setProductos(data)  })  
        .catch (error => console.error("error:", error))
    },2000)


    },[categoria])

  
  return( 
    <>
    
    <ItemList productos = {productos} onAdd={onAdd} categoria={categoria}  />
    
    </>
  )
}


export default ItemListContainer
