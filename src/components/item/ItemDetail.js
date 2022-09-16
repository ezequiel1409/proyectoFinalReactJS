import React from "react"
import ItemCount from "./ItemCount"
import './itemDetail.css';

const ItemDetail = ({item}) => {
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
                     <ItemCount key={item.id} stock={item.stock} initial={0}/>
                </div>
            </div>

        </div>

        
      </div>
    </>
  )
}
export default ItemDetail