import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
const CartWidget = () => {
  let estilos = {height:"1.5em", width:"1.5em", color:"white"};
  return (
    <FaShoppingCart style={estilos}/>
  )
}
export default CartWidget