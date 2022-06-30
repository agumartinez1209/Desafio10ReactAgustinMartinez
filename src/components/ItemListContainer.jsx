import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import { useParams } from "react-router-dom";

function ItemListContainer ({categoria, onAdd }) {
 
 
  const[productos, setProductos] = useState([]) 
  const {id} = useParams();

  useEffect( () => {
    const db = getFirestore();
    const productosColeccion = collection(db,"productos");

    if (id){
      const filtro = query(productosColeccion, where("categoria", "==","id"));
      getDocs(filtro).then(snapshot => {
        setProductos(snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id})));
      })
    } else{
      getDocs(productosColeccion).then(snapshot =>{
        setProductos(snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id})));
      })
    }



    },[id])

  
  return( 
    <>
    
    <ItemList productos = {productos} onAdd={onAdd} categoria={categoria}  />
    
    </>
  )
}


export default ItemListContainer
