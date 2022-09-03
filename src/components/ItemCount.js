import React from 'react'
import {useState} from 'react';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
const ItemCount = ( {stock} ) => {
    const [cantidad, setCantidadProductos] = useState(0);
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
      setCantidadProductos(cantidad - 1);
      console.log(cantidad)
    };
    const agregarProductoAlCarrito = () => {
      if(cantidad < stock){
        setCantidadProductos(cantidad + 1);
        notificarProductoAgregado();   
      }
      else notificarError(); 
    };
 return(
    <>
    <div className='parteSuperiorCardFooter'>
        {<button disabled={cantidad===0} onClick={borrarProductoDelCarrito}>-</button>}
        <p> {cantidad}</p>
        {<button disabled={cantidad===stock} onClick={agregarProductoAlCarrito}>+</button>}
    </div>
        {<button className='btnAgregarCarrito' disabled={cantidad===stock} onClick={agregarProductoAlCarrito}>Agregar al carrito</button> }
    </>
  )
};
export default ItemCount;