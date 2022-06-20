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

    const reset = () =>{
        setCount (inicial)
    }


    return (
        
        <div className="text-center">
            <h2>{count}</h2>
            <button onClick={sumar} className="btn btn-outline-success">+</button>
            <button onClick={restar} className="btn btn-outline-success">-</button> <br></br>
            <button onClick={() => {onAdd(count); reset();}} className="btn btn-outline-success">Agregar al carrito</button> <br></br>  
            <button onClick={reset} className="btn btn-outline-success"> Vaciar Carrito</button>
        </div>

    )
}

export default ItemCount