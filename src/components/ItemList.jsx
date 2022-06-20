import React from 'react'
import Item from './Item'


function ItemList ( {productos, categoria}) {

  let resultadoFiltrado = [];

	if( categoria !== undefined ) {
		resultadoFiltrado = productos.filter( producto => producto.categoria === categoria)
	} else {
		resultadoFiltrado = productos;
		
	}
  return (
    <>
    
    <div style={{display:"flex", flexWrap:"wrap"}}>
      
        {resultadoFiltrado?.map(productos => 
        <Item key={productos.id} productos = {productos} categoria = {categoria} /> )}
    </div>

    </>
  )
}

export default ItemList