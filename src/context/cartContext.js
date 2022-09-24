
import { clear } from "@testing-library/user-event/dist/clear";
import React, { createContext, useContext, useState } from "react";

const cartContext = createContext();
export const useCartContext = () => useContext(cartContext)
export const cartProvider = ( { children }) => {

    const [item, setItem] = useState([]);

    const addItem = (item, quantity)  =>{
        console.log(item)
        // let producto = {
        //     idProd: item.id,
        //     costo: item.costo,
        //     cantidad: quantity,
        //     nombreProd: item.nombre,
        //     descripcion: item.descripcion,
        //     img: item.imagen
        // }
        // if(isInCart(producto.id)){
        //     let aux = item;
        //     aux[aux.findIndex(actual => actual.id === producto.id)]["quantity"] = quantity
        //     setItem([...aux])
        // }else{
        //     setItem(prod => [...prod, producto]);
        // }
    } 
    const removeItem = (itemID)  =>{
        setItem(item.filter(productoABorrar => productoABorrar.id !== itemID))
    } 
    const clearCart = ()  => {
        return clear(item);
    }
    let  isInCart = (id) => {
        return item.some(prod => prod.id === id)
    }
    return (<cartContext.Provider value={{ item, addItem,  isInCart, removeItem, clearCart }}>
        {children}
    </cartContext.Provider>)
}