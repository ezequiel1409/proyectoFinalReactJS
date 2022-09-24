import React from 'react'
import { useState } from 'react';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
const ItemCount = ( {stock, initial, onAdd} ) => {
    const [count, setCount] = useState(initial);
    let notificarProductoAgregado = () => Toastify({
        text: "Producto agregado al carrito!",
        duration: 2000,
        close: true, 
        gravity: "bottom",
        position: "right",
        stopOnFocus: true, 
    }).showToast();
    let notificarError = (text) => Toastify({
      text: text,
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
      if (count <= 0){
        notificarError("No se puede borrar el producto, debido a que no puede restar menos de 0.")
      }else{
        setCount(count - 1);
      }
    };
    const agregarProductoAlCarrito = () => {
      if(count < stock){
        setCount(count + 1);
        notificarProductoAgregado();   
      }
      else notificarError("La cantidad que deseas agregar supera el stock actual, disculpá las molestias."); 
    };
 return(
    <>
    <div className='parteSuperiorCardFooter'>
        {<button disabled={count===initial}  onClick={borrarProductoDelCarrito}>-</button>}
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