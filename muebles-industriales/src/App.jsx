import { useEffect, useState } from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import fetchData from './fetchData';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import Home from './components/Home/Home';
import Contacto from './components/Contact';
import NotFound from './components/NotFound';
import FiltroProductos from './components/FiltroProductos';




  

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
          <Route path='/Home' element={<Home/>}
          />
          <Route path="/productos" element={<ItemListContainer productos={productos} />} 
          />
          <Route path='/Contacto' element={<Contacto/>} 
          />

          <Route path="/productos/detail/${el.id} " element={<ItemDetail productos={productos} />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App;
