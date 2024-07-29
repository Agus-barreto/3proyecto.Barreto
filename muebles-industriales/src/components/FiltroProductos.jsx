import  { useState, useEffect } from 'react';



const FiltroProductos = ({ productos, categoria }) => {
    const [filtrado, setFiltrado] = useState([]);
    const [filtro, setFiltro] = useState('');

    useEffect(() => {
        setFiltrado(productos.filter(producto => 
            producto.categoria.toLowerCase() === categoria.toLowerCase()
        ));
    }, [productos, categoria]);

    useEffect(() => {
        const resultadosFiltrados = productos.filter(producto => 
            producto.nombre.toLowerCase().includes(filtro.toLowerCase())
        );
        setFiltrado(resultadosFiltrados);
    }, [filtro, productos]);

    const entrada = (e) => setFiltro(e.target.value);

    return (
        <>
            <label htmlFor="filtrarProductos">Buscar muebles por nombre:</label>
            <input
                type="text"
                id="filtrarProductos"
                onChange={entrada}
                placeholder="Buscar por nombre..."
            />
            <div>
                {filtrado.map((e) => (
                    <div key={e.id}>
                        <div>
                            <img src={e.imagen} alt={e.nombre} />
                            <h1>{e.precio}</h1>
                            <p>{e.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FiltroProductos;


/*const FiltroProductos = ({productos, categoria}) => {
    const [filtrado, setFiltrado] = useState([]);
    const [filtro, setFiltro] = useState("");


    useEffect(() =>(
        setFiltrado(productos.filter(producto =>
            producto.categoria.toLowerCase() === categoria.toLowerCase()
        ));
    )

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
}*/




