import React from "react";
import "./itemCount.css"
import ItemDetail from "./ItemDetail";
const ItemCount = () => { 
    
    const handleRestar = () =>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () =>{
        cantidad < productos.stock  && setCantidad( cantidad + 1)
    }
    const handleAgregar = () =>{
        console.log(productos)
    }

    return(
        <div>
        <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <p>cantidad</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount