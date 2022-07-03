import React from "react";



const ItemCount = ({ sumar, restar, count, reset, onAdd }) => {

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