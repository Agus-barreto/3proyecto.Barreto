import React from "react";
import './Item.css';
import {Link} from 'react-router-dom';
//import FiltroProductos from "./FiltroProductos";


const Item = ({ id, imagen, nombre, descripcion, precio }) => {
    return (
        <div key={id} className="card-productos" >
            <div className="card-imagen">
                <img src={imagen} alt="" className="imagen" />
            </div>
            <div className="detalles-producto">
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <p>Precio: ${precio}</p>
            </div>
            <button className="button">Agregar al Carrito</button>
                    <Link to="{`/detalle/${id}`}"> 
                        <button className="button-detalle">Ver detalles</button>
                    </Link>
            
        </div>
    );
}
export default Item
