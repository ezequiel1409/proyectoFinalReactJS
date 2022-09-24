import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount"
import './itemDetail.css';
const ItemDetail = ( {item}) => {
  const [counter, setCounter] = useState(0)
  const { addProduct, isInCart } = useContext(CartContext)
  const onAdd = (quantity) => {
    setCounter(quantity);
    addProduct(item, quantity)
  }
  return (
    <>
      <div className="detailItem">
        <div className="article">
          <div className="articleIMG">
            <img src={item.imagen} alt={item.nombre}></img>
          </div>
          <div className="articleBody">
            <div className="articleTitle">
              <h2>{item.nombre}</h2>
            </div>
            <div className="articlePrice">
              <h3>{item.costo}</h3>
            </div>
            <div className="articleDescription">
              {item.descripcion}
            </div>
            <div className="articleFooter">
              <div style={{display: isInCart(item.id) ? "none" : "block"}}>
                <ItemCount key={item.id} stock={item.stock} initial={counter} onAdd={onAdd} />
              </div>
              <div style={{ display: isInCart(item.id) ? "block" : "none"}}>
                    <div>
                      <Link to={'/cart'}> 
                        <button>
                          <span>Ir hacia el carrito</span>
                        </button>
                      </Link>
                    </div>
                    <div >

                    </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </>
  )
}
export default ItemDetail