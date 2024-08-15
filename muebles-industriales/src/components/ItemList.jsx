import React from 'react';
import Item from './Item';


const ItemList = ({  productos }) => {

    return (
        <div className="item-list">
            {
                productos.map((el) => {
                    return (
                        <Item 
                        key={el.id} 
                        id={el.id}
                        imagen={el.imagen}
                        nombre={el.nombre}
                        descripcion={el.descripcion}
                        precio={el.precio}
                    />
                    )
                    
                })
            }
        </div>
    );
};

export default ItemList;