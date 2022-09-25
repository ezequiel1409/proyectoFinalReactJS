import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext";
import './Cart.css';
import ItemCart from "./ItemCart";

const Cart = () => {
const [products, setProducts] = useState([]);
  const { getProducts, item, totalCart } = useContext(CartContext)

  const getProductsCart = () => {
    let actualCart = getProducts();
        setProducts(actualCart);
  }

  useEffect(() => {
    getProductsCart()
  }, [item])
  return (
    <section className="bodySection">
        <div className="cartContainer">
            <div className="cartHeader">
                <h2 className="cartTitle">Mi carrito</h2>
            </div>
            <div className="cartRow">
                {products.length ? (
                    products.map( (item) => <ItemCart key={item.id} {...item} />)
                  ) : (
                    <h2 className="heading">No hay productos en el carrito...</h2>
                  )}
                
            </div>
            <hr/> 
            <div className="checkout">
                <div className="total">
                    <div>
                        {/* <div class="Subtotal">
                            Sub-Total
                        </div> */}
                        <div className="items">
                            {/* {products.} */}
                        </div>
                    </div>
                    <div className="totalAmount">
                        {totalCart}
                    </div>
                </div>
                <div className="cartFooter">
                    <button className="button">Vaciar carrito</button>
                    <button className="button" id="Enjoy">Continuar compra</button>
                </div>

            </div>
        </div>
    </section>
  )
}
export default Cart