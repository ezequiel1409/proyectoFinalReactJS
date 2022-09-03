import React from "react"
// import Toastify from 'toastify-js'
// import "toastify-js/src/toastify.css"
const Item = ({nombre, costo, imagen }) => {
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
                    <button >Agregar al carrito</button>
                </div>
            </div>
        </div>
    </article>
  )
}
export default Item