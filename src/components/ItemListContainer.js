import React from 'react';
import { useState, useEffect } from "react";
import datosProductos from "../productos.json";
import ItemList from './item/ItemList';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
      useEffect(() => {
          const getProductos =  () => {
              return new Promise( (resolve, reject) => {
                  setTimeout(() =>{
                      if(datosProductos.length){
                        resolve(datosProductos);
                      }else{
                        reject("Hubo un error, probá de nuevo!");
                      }
                  }, 3000);
              });
          };
            getProductos().then((data) => {
                setProductos(data);

                })
                .catch((error) => console.error(error + "No existe tales productos."));
      }, []);
    
      return (
        <>
        {/* {productos.idCategoria} */}
        <section>
          <ItemList productos={productos}/>
        </section>
        </>
      )

};
export default ItemListContainer;