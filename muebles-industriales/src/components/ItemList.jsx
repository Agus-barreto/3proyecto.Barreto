import React from "react";
import Item from "./Item";


const ItemList = ({ producto = [] }) => {
    console.log( producto); 

    return (
        <div className="item-list">
            {
                producto.map((el) => (
                    <Item 
                        key={el.id}
                        id={el.id}
                        imagen={el.imagen}
                        nombre={el.nombre}
                        descripcion={el.descripcion}
                        precio={el.precio}
                    />
                ))
            }
        </div>
    );
};



    
export default ItemList