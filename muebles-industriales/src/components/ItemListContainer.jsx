import React, { useEffect } from 'react'
import ItemList from './ItemList';
import Loader from './Loader';

const ItemListContainer = ({ productos }) => {

    return (
        <>
            { productos.length === 0 ? 
                    <Loader />
                :
                <div>
                    <ItemList productos={productos} />
                </div>
                    
            }
        </>
    );
};







export default ItemListContainer;