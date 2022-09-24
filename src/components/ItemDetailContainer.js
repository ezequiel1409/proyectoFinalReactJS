import React from "react"
import datosProductos from "../productos.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./item/ItemDetail";
const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams()
  useEffect(() => {
    const getItem = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (datosProductos.length) {
            resolve(datosProductos.find(p => p.id === id));
          } else {
            reject("Hubo un error, probá de nuevo!");
          }
        }, 3000);
      });
    };
    getItem().then((data) => {
      setProductos(data);
      console.log(data)
    })
      .catch((error) => console.error(error + "No existe tales productos."));
  }, []);
  return (
    <div className="container">
      <ItemDetail item={productos} />
    </div>
  )
}
export default ItemDetailContainer