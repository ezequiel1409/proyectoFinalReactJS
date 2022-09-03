import React from "react"
import ItemCount from "./ItemCount"

const Item = ({id, nombre, costo, imagen, stock }) => {
    // const notify = () => Toastify({
    //     text: "Hola"
    // }).showToast();
  return (
    <article>
        <div className="cardProducto">
            <div className="media">
                <div className="cardImg">
                    <img src={imagen} alt="producto"/>
                </div>
                <div className="cardBody">
                    <h2>{nombre}</h2>
                    <h3>{costo}</h3>
                </div>
                <div className="cardFooter">
                    {/* <button onClick={notify}>Agregar al carrito</button> */}
                    <ItemCount key={id} stock={stock}/>
                </div>
            </div>
        </div>
    </article>
  )
}
export default Item