import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';



const ItemDetail = ({productos}) => {
    
    const user =useContext(CartContext);
    console.log(user)




    const { id } = useParams();

    const [productoSeleccionado, setProductoSeleccionado] = useState({});
    
    useEffect(() => {
        const productoSeleccionado = productos.find(el => el.id === parseInt(id));
        setProductoSeleccionado(productoSeleccionado);
    },[id, productos]);

    
    
        return (
        <>
        <div key={productoSeleccionado.id} className="text-white bg-black pt-7">

        
        <div className='detalle-producto'>
            <Item 
            imagen={productoSeleccionado.imagen}
            id={productoSeleccionado.id} 
            nombre={productoSeleccionado.nombre} 
            descripcion={productoSeleccionado.descripcion} 
            precio={productoSeleccionado.precio} />
            
        </div>
        <ItemCount 
                /*cantidad={cantidad}
                handleSumar={handleSumar}
                handleRestar={handleRestar}
                handleAgregar={() => { agregarAlCarrito(productos, cantidad)}}*/
            />
        </div>
        
    </>
        
    )
}

export default ItemDetail