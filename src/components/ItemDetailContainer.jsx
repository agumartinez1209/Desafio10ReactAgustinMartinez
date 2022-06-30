
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {doc, getDoc, getFirestore} from "firebase/firestore";

function ItemDetailContainer() {

    const [producto, setProducto] = useState ({})
    const { id } =useParams()

    const db = getFirestore();
    const coleccion = "productos";



    useEffect(() => {

      const productFound = doc(db, coleccion, id);
      getDoc(productFound).then((res)=>{
        if (res.exists()){
          console.log(res.data());
          setProducto({...res.data(), id: res.id})
        }else{
          alert("no se encontro")
        }
      })

    }, [id]);
    
  
  return (
    <>
    <ItemDetail key = {producto.id} producto= {producto}  />
    </>
  )
}

export default ItemDetailContainer