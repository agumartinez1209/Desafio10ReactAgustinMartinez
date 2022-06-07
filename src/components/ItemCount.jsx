import React, { useState } from 'react'


const ItemCount = ({ inicial, maximo, onAdd }) => {

    
    const [count, setCount] = useState(inicial)

    const sumar = () => {
    if (count < maximo) {
        setCount(count + 1)
    } else {
        alert("no puedes agregar mas productos")
    }
}

    const restar = () => {
        count > inicial ? setCount(count - 1) : alert("No puedes quitar mas productos")
        setCount(count - 1)
    }


    return (
        
        <div className="text-center">
            <h2>{count}</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>

    )
}

export default ItemCount