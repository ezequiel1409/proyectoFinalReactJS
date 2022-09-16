import React from "react"
import { Link } from "react-router-dom"

const Item = ({id, nombre, costo, imagen,  stock }) => {
    // const notify = () => Toastify({
    //     text: "Hola"
    // }).showToast();
  return (
    <article>
            <div className="cardProducto">
                <div className="media">
                    <div className="cardImg">
                        <img src={imagen} alt={nombre}/>
                    </div>
                    <div className="cardBody">
                        <h2>{nombre}</h2>
                        <h3>{costo}</h3>
                    </div>
                    <div className="cardFooter">
                    <Link to={`/producto/item/${id}`}>
                        <button>Ver detalle de producto</button>
                    </Link>
                        {/* <ItemCount key={id} stock={stock} initial={0}/> */}
                    </div>
                </div>
            </div>
    </article>
  )
}
export default Item