import React from 'react';


const FiltroProductos = ({productos, categoria}) => {
   /* const [filtrado, setFiltrado] = useState([]);
    useEffect(() => setfiltrado(productos), []);*/

    const FiltrarProducto = (nombre) => {
    const FiltrarProducto = productos.filter((e)=>
    e.nombre.toLowerCase().includes(filter.toLowerCase(nombre))
    );
    setFiltrado(filtrar)
    };
    
    console.log(filtrado)
    const entrada = (e) => FiltrarProducto(e.target.value);
return(
    <>
    <label htmlFor="FiltrarProductos">Buscar muebles por categotia:</label>
    <div> {filtrado.map((e) =>(
        <div key={el.id}>
        <div >
            <div>
            <img src={e.imagen}></img>
            <h1 > {e.precio}</h1>
            <p>{e.descripcion}</p>
        </div>
        </div>
    </div>
    ))}
    </div>
    </>

)
}
export default FiltroProductos