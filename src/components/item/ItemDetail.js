import React, { useContext, useState } from "react"
import { useCartContext } from "../../context/cartContext";
import ItemCount from "./ItemCount"
import './itemDetail.css';
const ItemDetail = ( {item} ) => {
  const [counter, setCounter] = useState(0)
  const { addProduct, isInCart, removeProduct } = useContext(useCartContext)
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
                     <ItemCount key={item.id} stock={item.stock} initial={0} onAdd={onAdd}/>
                </div>
            </div>

        </div>

        
      </div>
    </>
  )
}
export default ItemDetail