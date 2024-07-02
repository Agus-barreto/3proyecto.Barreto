
import './App.css'
import Navbar from './components/Navbar';
import ItemsListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='App'>
        <Navbar />
        <ItemsListContainer greeting={"Bienvenido a nuestra web! Esperamos que disfrutes de tu recorrido."}/>
    </div>
  )   
}



export default App
