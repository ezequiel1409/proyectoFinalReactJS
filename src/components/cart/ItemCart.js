import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext";

const ItemCart = ( {id, title, price, quantity, src, description }) => {
  const { removeItem } = useContext(CartContext)
  const borrarProductoDelCarrito = () => {
    removeItem(id);
  }
  // console.log(item);
  return (
    <div className="cartItem">
                    <div className="boxImage">
                        <img src={src} className="cardImage" alt={title} />
                    </div>
                    <div className="aboutProduct">
                        <h3 className="title">{title}</h3>
                    </div>
                    <div className="counter">
                        {/* <button className="btn" onClick={quantity+1}>+</button> */}
                        <div className="count">{quantity}</div>
                        {/* <button className="btn" onClick={quantity-1}>-</button> */}
                    </div>
                    <div className="prices">
                      <h5 className="amount">${price}</h5>
                      <button className="remove" onClick={borrarProductoDelCarrito}>x</button>
                    </div>
    </div>
  )
}
export default ItemCart