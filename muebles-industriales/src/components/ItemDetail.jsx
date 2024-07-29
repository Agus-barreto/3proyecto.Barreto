import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchdata from "../fetchData";
import FilterProductos from "./FiltroProductos";



const ItemDetail = ({productos}) => {
    const {id} = useParams();
    const [productoSeleccionado, setProductosSeleccionados]= useState({});

    const [item, setItem] = useState();

    useEffect(() => {
    setItem(productos.find((el) => el.id === parseInt(id)))
    }, [id, productos]);


    return (
        <>
          { (
            <div key={el.id}>
              <div >
                <div>
                  <img src={imagen}></img>
                  <h1 > {el.precio}</h1>
                  <p>{el.descripcion}</p>
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