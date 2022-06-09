import React from 'react'
import Item from './Item'

const ItemList = ( {productos}) => {
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
        {productos?.map(productos => <Item key={productos.id} productos = {productos} /> )}
    </div>
  )
}

export default ItemList