import React, { useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ productos }) => {

    return (
        <>
            {
                productos.length === 0 ?
                    <p>Cargando...</p>
                    :
                <div>
                    <ItemList productos={productos}/>
                </div>
                    
            }
        </>
    );
};







export default ItemListContainer;