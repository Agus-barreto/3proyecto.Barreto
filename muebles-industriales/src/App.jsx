import { useEffect, useState } from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import fetchData from './fetchData';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';
import ErrorBoundary from './ErrorBoundary';
import NotFound from './components/NotFund';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contacto from './components/Contact';
import ItemList from './components/ItemList';



/*const filtrar= () => {
    const [productosFiltrados, setProductosFiltrados] = useState(productos);

    const filtrarProductos = (categoria) => {
        if (categoria === '') {
            setProductosFiltrados(productos);
        } else {
            const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
            setProductosFiltrados(productosFiltrados);
        }
    };

    return (
        <div>
            <FiltroProductos productos={productos} filtrarProductos={filtrarProductos} />
            <Item productos={productosFiltrados} />
        </div>
    );
};*/


function App() {
  /*const [count, setCount] = useState(0)*/
const[productos, setProductos] = useState ([]);

useEffect(() => {
fetchData()
  .then(response => {
    setProductos(response);
  })
  .catch(err => console.error(err));
}, []);

  



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes> 
          <Route path='/Home' element={<Home/>} />
          <Route path="/productos" element={<ItemListContainer productos={productos} />} />
          <Route path='/Contacto' element={<Contacto/>} />

          <Route path="/2" element={<p>detalle</p>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App;
