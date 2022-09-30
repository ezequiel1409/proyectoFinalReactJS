import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './Cart.css';
import ItemCart from "./ItemCart";

const Cart = () => {
const [products, setProducts] = useState([]);
const [total, setTotal] = useState([]);
// const [itemCartQuantity, setitemCartQuantity] = useState([]);
  const { getProducts, item, totalCart, clearCart, getQuantityCart } = useContext(CartContext)

  const getProductsCart = () => {
    let actualCart = getProducts();
        setProducts(actualCart);
        getTotal();
        // getItemCantidad();
  }
  const getTotal = () => {
    let aux = totalCart();
        setTotal(aux)
  }
//   const getItemCantidad = () =>{
//     let aux = getQuantityCart()
//         setitemCartQuantity(aux)
//   }

  useEffect(() => {
    getProductsCart()
  }, [item])
  return (
    <div className="bodySection">
        <div className="cartContainer">
            <div className="cartHeader">
                <div className="encabezado">
                    <h2 className="cartTitle">Mi carrito</h2>
                </div>
                <div className="btnSeguirComprando">
                    <Link to={'/'}> 
                          <span>Seguir comprando</span>
                    </Link>
                </div>
            </div>
            <hr id="superior"/> 
            <div className="cartRow">
                {/* {console.log(products)} */}
                {products.length ? (
                    products.map( (item) => <ItemCart key={item.id} {...item} />,
                     console.log(item))
                )
                :( 
                    <div className="excepcion">
                        <h2 className="heading">No hay productos en el carrito...</h2>
                        <Link to={'/'}> 
                            <span className="heading">Ir a comprar productos</span>
                        </Link>
                    </div>
                )}
                
            </div>
            <hr id="inferior"/> 
            <div className="checkout">
                <div className="total">
                    {/* <div>
                        {/* <div class="Subtotal">
                            Sub-Total
                        </div> }
                        <div className="items">
                            {/* {itemCartQuantity} }
                        </div>
                    </div> */}
                    <div className="totalAmount">
                        <div>
                            <span>Total: </span>
                        </div>
                        <div>
                            <span>$  {total}</span>
                        </div>
                    </div>
                </div>
                <div className="cartFooter">
                    <button className="button" disabled={item.length <= 0 } onClick={clearCart}>Vaciar carrito</button>
                    <button className="button" id="Enjoy" disabled={item.length <= 0}>Continuar compra</button>
                </div>

            </div>
        </div>
    </div>
  )
}
export default Cart