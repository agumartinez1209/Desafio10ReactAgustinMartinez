import { useEffect, useState } from "react";
import ItemList from "./ItemList";


const ItemListContainer = ({greeting}) => {
 
 
  const[productos, setProductos] = useState([]) 

  useEffect( () => {
      fetch("https://rickandmortyapi.com/api/character")
      .then (res => res.json ())
      .then (res => setProductos(res.results))  
      .catch (error => console.error("error:", error))

    },[])

  console.log(productos)
  
  return( <div> 
    
    <ItemList productos = {productos} />
    
     </div>
  )
}


export default ItemListContainer
