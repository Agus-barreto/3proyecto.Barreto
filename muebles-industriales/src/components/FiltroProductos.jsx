import  { useState, useEffect } from 'react';
import ItemList from './ItemList';


/*import { useState } from 'react';

function FiltrarProductos({ productos }) {
    const [filtro, setFiltro] = useState('');
return (
    <div>
    <SearchBar 
        filtro={setFiltro}  />
    <ProductTable 
        productos={productos}
        filtro={setFiltro}
        />
    </div>
);
}

function ProductosCategoriaRow({ categoria }) {
  return (
    <tr>
      <th colSpan="2">
        {categoria}
      </th>
    </tr>
  );
}

function ProductosRow({ productos }) {
  const name = productos.stocked ? productos.name :
    <span style={{ color: 'red' }}>
      {productos.name}
    </span>;

  return (
    <tr>
      <td>{nombre}</td>
      <td>{producto.precio}</td>
    </tr>
  );
}

function ProductosTable({ productos, filter }) {
  const rows = [];
  let lastCategoria = null;

  productos.forEach((producto) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({ filterText, inStockOnly }) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} 
        placeholder="Buscar..."/>
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} />
        {' '}
        Mostrar solo productos en stock
      </label>
    </form>
  );
}



export default function App() {
  return <FiltrarProductos productos={productos} />;
}

/*const FiltroProductos = ({ productos }) => {
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
                <ItemList productos = {filtrado}/>
            </div>
        </>
    );
};

export default FiltroProductos;*/


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




