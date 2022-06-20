import { useEffect, useState } from "react";
import ItemList from "./ItemList";


function ItemListContainer ({categoria, onAdd }) {
 
 
  const[productos, setProductos] = useState([]) 

  useEffect( () => {
    setTimeout(()=>{
<<<<<<< HEAD
      fetch("../../productos.json")
        .then (res => res.json ())
        .then (data => {
          setProductos(data)  })  
        .catch (error => console.error("error:", error))
    },2000)
=======
      fetch("https://rickandmortyapi.com/api/character")
      .then (res => res.json ())
      .then (res => setProductos(res.results))  
      .catch (error => console.error("error:", error))
    },2000)

>>>>>>> 0be3c50ae0c2723522ed2c5a4a17005d5bd43e90


    },[categoria])

  
  return( 
    <>
    
    <ItemList productos = {productos} onAdd={onAdd} categoria={categoria}  />
    
    </>
  )
}


export default ItemListContainer
