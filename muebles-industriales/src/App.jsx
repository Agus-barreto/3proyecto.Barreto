import { useEffect, useState } from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import  fetchData from "./fetchData.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import ItemDetail from './components/ItemDetail';
import Home from './components/Home/Home';
import Contacto from './components/Contacto/Contact';
import { CartContext } from './components/CartContext.jsx';
import ItemList from './components/ItemList';

function App() {
  const [productos, setProductos] = useState(0)


useEffect(() => {
fetchData()
  .then(response => {
    setProductos(response);
  })
  .catch(err => console.error(err));
}, []);

const [carrito, setCarrito] = useState ([]);
const user = "Agus";
const edad = 20;
  return (
    <div>
      <CartContext.Provider  value={user}>
      <BrowserRouter> 
        <Navbar />
        <Routes> 
          <Route path='/Home' element={<Home/>} />
          <Route path="/productos" element={<ItemListContainer productos = {productos}/>}/>
          <Route path='/Contacto' element={<Contacto/>} />
          

          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
      </div>
    
  )
}



export default App;
