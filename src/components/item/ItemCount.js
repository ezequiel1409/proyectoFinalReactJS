import React from 'react'
import {useState} from 'react';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
const ItemCount = ( {stock, initial, onAdd} ) => {
    const [count, setCount] = useState(initial);
    const notificarProductoAgregado = () => Toastify({
        text: "Producto agregado al carrito!",
        duration: 2000,
        close: true, 
        gravity: "bottom",
        position: "right",
        stopOnFocus: true, 
    }).showToast();
    const notificarError = () => Toastify({
      text: "No se pudo agregar el producto debido a falta de stock, disculpe las molestías.",
      duration: 2000,
      close: true, 
      gravity: "bottom",
      position: "right",
      stopOnFocus: true, 
      style: {
        background: "#e74c3c",
      }
    }).showToast();
    const borrarProductoDelCarrito = () => {
      setCount(count - 1);
      console.log(count)
    };
    const agregarProductoAlCarrito = () => {
      if(count < stock){
        setCount(count + 1);
        notificarProductoAgregado();   
      }
      else notificarError(); 
    };
 return(
    <>
    <div className='parteSuperiorCardFooter'>
        {<button disabled={count===initial} onClick={borrarProductoDelCarrito}>-</button>}
        <p> {count}</p>
        {<button disabled={count===stock} onClick={agregarProductoAlCarrito}>+</button>}
    </div>
    <div className='btnFooter'>
        {<button className='btnAgregarCarrito' disabled={count===stock} onClick={agregarProductoAlCarrito}>Agregar al carrito</button> }
    </div>
    </>
  )
};
export default ItemCount;