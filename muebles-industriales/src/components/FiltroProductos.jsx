/*import React, { useEffect } from "react";




const FiltroProductos = ({ productos }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');

const FiltroProductos = productos.filter(productos => {
    return (
        (productos.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (category === 'all' || productos.category === category)
    );
});

return (
    <div>
        <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
    />
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="todo">Todo</option>
        <option value="mesas">Mesas Ratonas</option>
        <option value="muebles">Muebles</option>
    </select>

    <ul>
        {FiltroProductos.map(productos => (
        <li key={id}>{productos.name} - {productos.category}</li>
        ))}
    </ul>
    </div>
);
};




export default FiltroProductos;*/