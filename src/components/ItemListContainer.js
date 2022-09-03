import React from 'react';
import { useState, useEffect } from "react";
import datosProductos from "../productos.json";
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
      useEffect(() => {
          const getProductos =  () => {
            const products = JSON.parse(JSON.stringify(datosProductos))
              return new Promise( (resolve, reject) => {
                  setTimeout(() =>{
                      if(products.length){
                        resolve(products);
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
        <section>
          <ItemList productos={productos}/>
        </section>
        </>
      )

};
export default ItemListContainer;