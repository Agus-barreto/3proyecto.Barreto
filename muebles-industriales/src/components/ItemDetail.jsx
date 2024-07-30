import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from './Item';


const ItemDetail = ({productos}) => {
    const {id} = useParams();
    /*const [productoSeleccionado, setProductosSeleccionados]= useState({});*/

    const [item, setItem] = useState();

    useEffect(() => {
      const productoSeleccionado = productos.find((el) => el.id === parseInt(id));
      setItem(productoSeleccionado);
  }, [id, producto]);
  
    if (!item) {
      return <div>Loading...</div>; 
  }

    return (
        <>
          { (
            <div key={item.id}>
              <div >
                <div>
                  <img src={item.imagen}></img>
                  <h1> {item.precio}</h1>
                  <p>{item.descripcion}</p>
                  <button>
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      );
    };
/*useEffect(() => {
    const findProduct = productos.find(el => el.id === parseInt(id));
    array.find(el => el.id === parseInt(id));
    setProductoSeleccionado(findProduct);
    },[]);

if (productoSeleccionado == undefined){
    console.log("error, productoSeleccionado")
}
/*return (
    <> 
        <div key={id} className="card-productos">
        <img src={imagen} alt="" className="imagen" />
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>${precio}</p>
            <button onClick={() => ItemDetail(productos)}>Agregar al Carrito</button>
        </div>
    </>
);*/

/*return (
    <div>
        <p>
            Detalle del producto {productoSeleccionado.nombre}
        </p>
        <Item key={productoSeleccionado.id} id={productoSeleccionado.id} nombre={productoSeleccionado.nombre} precio={productoSeleccionado.precio} />
    </div>
)
}*/


export default ItemDetail