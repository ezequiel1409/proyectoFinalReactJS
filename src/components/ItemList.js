import React from 'react';
import Item from './Item';
const ItemList = ({productos}) => {
    return (
      <section className='mainSection'>
        {/* {console.log(productos.length)} */}
        { productos.length ? productos.map( (producto) =>  <Item key={producto.id} {...producto} /> )   : <h2 className='inicioPrograma'>Cargando..</h2>}
     
      </section>
    ); 
};
export default ItemList